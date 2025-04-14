import { create } from 'zustand';
import axios from 'axios';
import { API_BASE_URL } from '../config';

const usePatientStore = create((set, get) => ({
  patients: [], // Список пациентов
  operations: {
    planned: [],
    past: [],
  },
  letters: [], // Список букв для AlphabetFilter
  pagination: {
    page: 1,
    limit: 10,
    total: 0,
    pages: 0,
  },
  searchQuery: '',
  selectedLetter: '',
  loading: false,
  error: null,

  setSearchQuery: (query) => set({ searchQuery: query }),

  setOperations: (type, operations) =>
    set((state) => ({
      operations: {
        ...state.operations,
        [type]: operations,
      },
    })),

  fetchPatients: async (page = 1, limit = 10, letter = '', append = false) => {
    set({ loading: true, error: null });

    try {
      const response = await axios.get(`${API_BASE_URL}/patients`, {
        params: { page, limit, letter },
      });

      const { patients, pagination, letters } = response.data.success;

      set((state) => ({
        patients: append ? [...state.patients, ...patients] : patients, // если append=true → добавляем
        pagination,
        letters,
        loading: false,
      }));
    } catch (error) {
      console.error('Ошибка загрузки пациентов:', error);
      set({ error: 'Ошибка загрузки данных', loading: false });
    }
  },

  selectLetter: async (letter) => {
    set((state) => ({
      selectedLetter: letter,
      pagination: { ...state.pagination, page: 1 },
    }));

    await usePatientStore.getState().fetchPatients(1, 10, letter, false);
  },

  changePage: async (page) => {
    const { pagination, selectedLetter, fetchPatients } = get();
    await fetchPatients(page, pagination.limit, selectedLetter, false); // ← append = true
  },

  getFilteredPatients: () => {
    const { patients, searchQuery } = get();
    if (!searchQuery) return patients;

    const lowerCaseQuery = searchQuery.toLowerCase();

    return patients.filter((patient) => {
      const fullName =
        `${patient.lastName} ${patient.name} ${patient.secondName}`.toLowerCase();
      return fullName.includes(lowerCaseQuery);
    });
  },

  savePatientOperations: async (patientId) => {
    try {
      const { operations } = usePatientStore.getState();

      await axios.put(
        `${API_BASE_URL}/patient/${patientId}/operations`,
        operations,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      console.log('Операции успешно сохранены!');
    } catch (error) {
      console.error('Ошибка сохранения операций пациента:', error);
    }
  },
}));

const useDescriptionStore = create((set) => ({
  descriptions: [
    {
      tag: 'polisTag',
      content:
        'Чтобы ввести 16-значный номер полиса ОМС, нужно указать цифры с лицевой стороны полиса в поле «Полис ОМС». Для полисов старого образца, которые получены до 2011 года, нужно вводить серию и номер без пробелов.',
    },
    {
      tag: 'polisRegionTag',
      content: 'Регион полиса страхового полиса СНИЛС',
    },
    {
      tag: 'snilsTag',
      content:
        'СНИЛС — это личный страховой номер из 11 цифр, который присваивают каждому человеку один раз и на всю жизнь. Он также совпадает с номером счёта, на котором содержится вся информация о стаже работника и пенсионных отчислениях работодателей.',
    },
    {
      tag: 'passportTag',
      content:
        'Серия паспорта состоит из четырёх чисел. Номер паспорта состоит из шести цифр.',
    },
    {
      tag: 'passportFromTag',
      content:
        'Узнать, кем выдан паспорт, можно на первой странице документа. На развороте с фотографией в первой строчке указано, кем выдан паспорт, а также указаны отделение, город и область.',
    },
    {
      tag: 'cityTag',
      content:
        'Узнать город регистрации по паспортным данным можно на странице паспорта, где проставляется штамп постоянной регистрации (начиная с пятой страницы документа).',
    },
    {
      tag: 'addressTag',
      content:
        ' Обычно сведения о постоянной прописке указываются на 5-й странице паспорта. В этой графе указана дата регистрации, адрес места жительства и орган, который произвёл регистрацию. Если у человека было несколько мест регистрации, то информация о них будет указана на последующих страницах паспорта.',
    },
    {
      tag: 'commentTag',
      content: 'Опишите, пожалуйста, основное, что вас беспокоит',
    },
    {
      tag: 'chronicDiseasesTag',
      content:
        'При ответе на вопрос о хронических заболеваниях в анкете стоит перечислить все известные вам хронические состояния. Если доктору будут важны детали, он задаст дополнительные вопросы.',
    },
    {
      tag: 'medicationsTag',
      content:
        'При заполнении анкеты о жалобах на здоровье важно сообщить о приёме любых ранее выписанных медикаментов. Об этом нужно рассказать врачу, чтобы специалист мог учесть сочетаемость препаратов между собой.',
    },
    {
      tag: 'surgeriesTag',
      content:
        'При заполнении анкеты о жалобах на здоровье важно сообщить о ранее перенесённых операциях. Если они были, нужно перечислить все операции и год их выполнения.',
    },
    {
      tag: 'alergyTag',
      content:
        'При заполнении анкеты о жалобах на здоровье нужно указать, есть ли у вас аллергия или лекарственная непереносимость. Если да, следует описать характер реакции и указать, на какие лекарственные средства она возникает.',
    },
    {
      tag: 'infectionTag',
      content:
        'При заполнении анкеты о жалобах на здоровье нужно указать, были ли или есть ли у вас инфекционные заболевания.',
    },
    {
      tag: 'inheritanceDiseases',
      content:
        'При заполнении анкеты о жалобах на здоровье нужно указать, есть ли у вас наследственные заболевания.',
    },
    {
      tag: 'badHabbitsTag',
      content: 'Опишите ваши вредные привычки если они есть',
    },
    {
      tag: 'pregnantTag',
      content: 'Беременны в настоящий момент?',
    },
    {
      tag: 'sickLeaveTag',
      content: 'Нужен ли больничный лист?',
    },
    {
      tag: 'passport_files',
      content: 'Копии паспорта всех страниц',
    },
    {
      tag: 'polis_files',
      content: 'Копии полиса ОМС',
    },
    {
      tag: 'snils_files',
      content: 'Копия СНИЛС',
    },
    {
      tag: 'general_files',
      content:
        'Общий анализ крови с лейкоцитарной формулой и тромбоцитами + СО',
    },
    {
      tag: 'coagulogram_files',
      content: 'Коагулограмма',
    },
    {
      tag: 'blood-biochemical_files',
      content: 'Биохимический анализ крови',
    },
    {
      tag: 'blood-infectious_files',
      content: 'Инфекционно-иммунологический анализ крови (pdf / jpg / png)',
    },
    {
      tag: 'blood-group_files',
      content: 'Определение группы крови и резус-фактора',
    },
    {
      tag: 'blood-phenotyping_files',
      content: 'Фенотипирование эритроцитов',
    },
    {
      tag: 'urine-general_files',
      content: 'Общий анализ мочи',
    },
    {
      tag: 'covid_files',
      content:
        'ПЦР на COVID-19 из носоглотки и ротоглотки (не ранее чем за 1-2 дня до госпитализации, результат действителен 48 часов)',
    },
  ],
  setDescriptions: (data) => set({ descriptions: data }), // Устанавливаем данные
  getDescriptionByTag: (tag) => {
    return (state) => state.descriptions.find((desc) => desc.tag === tag);
  },
}));

export { usePatientStore, useDescriptionStore };
