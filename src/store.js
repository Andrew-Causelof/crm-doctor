import { create } from 'zustand';
import { API_BASE_URL } from './config';
import axios from 'axios';

const initialUserData = {
  activeTab: 'patients',
};

const useAppStore = create((set) => ({
  appData: initialUserData,
  selectedPatientId: null, // ← ID выбранного пациента

  setAppData: (field, value) => {
    set((state) => {
      const updatedUserData = { ...state.appData, [field]: value };
      return {
        appData: {
          ...updatedUserData,
        },
      };
    });
  },
  setSelectedPatientId: (id) => set({ selectedPatientId: id }),
}));

export { useAppStore };

// const useUserStore = create((set) => ({
//   userData: {
//     files: {},
//   }, // Начальное состояние
//   loading: false,
//   error: null,

//   setUserData: (field, value) => {
//     set((state) => {
//       const updatedUserData = { ...state.userData, [field]: value };
//       const updatedProgress = calculateProgress(updatedUserData);

//       return {
//         userData: {
//           ...updatedUserData,
//           progress: updatedProgress,
//         },
//       };
//     });
//   },

//   fetchUserData: async (userId) => {
//     set({ loading: true, error: null });

//     try {
//       const response = await axios.get(`${API_BASE_URL}/patient/${userId}`);
//       const userData = response.data;
//       const progress = calculateProgress(userData);

//       set({ userData: { ...userData, progress }, loading: false });
//     } catch (error) {
//       console.error("Ошибка загрузки данных пользователя:", error);
//       set({ error: "Не удалось загрузить данные", loading: false });
//     }
//   },

//   saveUserData: async (userId) => {
//     set({ loading: true, error: null });

//     try {
//       const { userData } = useUserStore.getState();
//       console.log(" userData", userData);
//       await axios.put(`${API_BASE_URL}/patient/${userId}`, userData, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//         withCredentials: true, // Это будет работать только если сервер отправляет Access-Control-Allow-Credentials
//       });
//     } catch (error) {
//       console.error("Ошибка сохранения данных пользователя:", error);
//     }
//   },

//   // Загрузка списка файлов пользователя
//   fetchUserFiles: async (userId) => {
//     try {
//       const response = await axios.get(
//         `${API_BASE_URL}/patient/${userId}/files`
//       );
//       set((state) => ({
//         userData: {
//           ...state.userData,
//           files: response.data,
//         },
//       }));
//     } catch (error) {
//       console.error("Ошибка загрузки файлов:", error);
//     }
//   },

//   // Загрузка файла
//   uploadFile: async (userId, fieldName, file) => {
//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const response = await axios.post(
//         `${API_BASE_URL}/patient/${userId}/files/upload`,
//         formData,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );

//       set((state) => {
//         // Обновляем только files
//         const updatedFiles = {
//           ...state.userData.files,
//           [fieldName]: [
//             ...(state.userData.files[fieldName] || []),
//             response.data,
//           ],
//         };

//         // Создаем новое состояние с обновленными файлами
//         const updatedUserData = {
//           ...state.userData,
//           files: updatedFiles,
//         };

//         // Пересчитываем прогресс
//         const updatedProgress = calculateProgress(updatedUserData);

//         return {
//           userData: {
//             ...updatedUserData,
//             progress: updatedProgress,
//           },
//         };
//       });
//     } catch (error) {
//       console.error("Ошибка загрузки файла:", error);
//     }
//   },

//   // Удаление файла
//   deleteFile: async (userId, fieldName, fileId) => {
//     try {
//       await axios.delete(`${API_BASE_URL}/patient/${userId}/files/${fileId}`);

//       set((state) => {
//         // Обновляем только files
//         const updatedFiles = {
//           ...state.userData.files,
//           [fieldName]: state.userData.files[fieldName]?.filter(
//             (file) => file.id !== fileId
//           ),
//         };

//         // Создаем новое состояние с обновленными файлами
//         const updatedUserData = {
//           ...state.userData,
//           files: updatedFiles,
//         };

//         // Пересчитываем прогресс
//         const updatedProgress = calculateProgress(updatedUserData);

//         return {
//           userData: {
//             ...updatedUserData,
//             progress: updatedProgress,
//           },
//         };
//       });
//     } catch (error) {
//       console.error("Ошибка удаления файла:", error);
//     }
//   },
// }));

// const useDescriptionStore = create((set) => ({
//   descriptions: [
//     {
//       tag: "polisTag",
//       content:
//         "Чтобы ввести 16-значный номер полиса ОМС, нужно указать цифры с лицевой стороны полиса в поле «Полис ОМС». Для полисов старого образца, которые получены до 2011 года, нужно вводить серию и номер без пробелов.",
//     },
//     {
//       tag: "polisRegionTag",
//       content: "Регион полиса страхового полиса СНИЛС",
//     },
//     {
//       tag: "snilsTag",
//       content:
//         "СНИЛС — это личный страховой номер из 11 цифр, который присваивают каждому человеку один раз и на всю жизнь. Он также совпадает с номером счёта, на котором содержится вся информация о стаже работника и пенсионных отчислениях работодателей.",
//     },
//     {
//       tag: "passportTag",
//       content:
//         "Серия паспорта состоит из четырёх чисел. Номер паспорта состоит из шести цифр.",
//     },
//     {
//       tag: "passportFromTag",
//       content:
//         "Узнать, кем выдан паспорт, можно на первой странице документа. На развороте с фотографией в первой строчке указано, кем выдан паспорт, а также указаны отделение, город и область.",
//     },
//     {
//       tag: "cityTag",
//       content:
//         "Узнать город регистрации по паспортным данным можно на странице паспорта, где проставляется штамп постоянной регистрации (начиная с пятой страницы документа).",
//     },
//     {
//       tag: "addressTag",
//       content:
//         " Обычно сведения о постоянной прописке указываются на 5-й странице паспорта. В этой графе указана дата регистрации, адрес места жительства и орган, который произвёл регистрацию. Если у человека было несколько мест регистрации, то информация о них будет указана на последующих страницах паспорта.",
//     },
//     {
//       tag: "commentTag",
//       content: "Опишите, пожалуйста, основное, что вас беспокоит",
//     },
//     {
//       tag: "chronicDiseasesTag",
//       content:
//         "При ответе на вопрос о хронических заболеваниях в анкете стоит перечислить все известные вам хронические состояния. Если доктору будут важны детали, он задаст дополнительные вопросы.",
//     },
//     {
//       tag: "medicationsTag",
//       content:
//         "При заполнении анкеты о жалобах на здоровье важно сообщить о приёме любых ранее выписанных медикаментов. Об этом нужно рассказать врачу, чтобы специалист мог учесть сочетаемость препаратов между собой.",
//     },
//     {
//       tag: "surgeriesTag",
//       content:
//         "При заполнении анкеты о жалобах на здоровье важно сообщить о ранее перенесённых операциях. Если они были, нужно перечислить все операции и год их выполнения.",
//     },
//     {
//       tag: "alergyTag",
//       content:
//         "При заполнении анкеты о жалобах на здоровье нужно указать, есть ли у вас аллергия или лекарственная непереносимость. Если да, следует описать характер реакции и указать, на какие лекарственные средства она возникает.",
//     },
//     {
//       tag: "infectionTag",
//       content:
//         "При заполнении анкеты о жалобах на здоровье нужно указать, были ли или есть ли у вас инфекционные заболевания.",
//     },
//     {
//       tag: "inheritanceDiseases",
//       content:
//         "При заполнении анкеты о жалобах на здоровье нужно указать, есть ли у вас наследственные заболевания.",
//     },
//     {
//       tag: "badHabbitsTag",
//       content: "Опишите ваши вредные привычки если они есть",
//     },
//     {
//       tag: "pregnantTag",
//       content: "Беременны в настоящий момент?",
//     },
//     {
//       tag: "sickLeaveTag",
//       content: "Нужен ли больничный лист?",
//     },
//   ],
//   setDescriptions: (data) => set({ descriptions: data }), // Устанавливаем данные
//   getDescriptionByTag: (tag) => {
//     return (state) => state.descriptions.find((desc) => desc.tag === tag);
//   },
// }));

// const useDocumentStore = create((set) => ({
//   documents: {},
//   addDocument: (fieldName, file) =>
//     set((state) => ({
//       documents: {
//         ...state.documents,
//         [fieldName]: [...(state.documents[fieldName] || []), file],
//       },
//     })),
//   removeDocument: (fieldName, fileName) =>
//     set((state) => ({
//       documents: {
//         ...state.documents,
//         [fieldName]: state.documents[fieldName].filter(
//           (file) => file.name !== fileName
//         ),
//       },
//     })),
//   clearDocuments: (fieldName) =>
//     set((state) => ({
//       documents: {
//         ...state.documents,
//         [fieldName]: [],
//       },
//     })),
// }));

// // Функция для расчета заполненности полей
// const calculateProgress = (userData) => {
//   const sections = {
//     general: [
//       "gender",
//       "lastname",
//       "firstname",
//       "thirdname",
//       "birthday",
//       "height",
//       "weight",
//       "phone",
//       "phone2",
//       "email",
//       "polis",
//       "polisRegion",
//       "snils",
//       "passport",
//       "passportDate",
//       "passportFrom",
//       "city",
//       "address",
//     ],
//     medical: [
//       "comment",
//       "chronicDiseases",
//       "diseaseList",
//       "medications",
//       "medicationList",
//       "surgeries",
//       "surgeriesComment",
//       "alergy",
//       "alergyList",
//       "infection",
//       "infectionList",
//       "inheritanceDiseasesComment",
//       "badHabbits",
//       "badHabbitsList",
//       "pregnant",
//       "sickLeave",
//     ],
//     documents: [
//       "passport",
//       "polis_files",
//       "snils_files",
//       "general_files",
//       "coagulogram_files",
//       "blood-biochemical_files",
//       "blood-infectious_files",
//       "blood-group_files",
//       "blood-phenotyping_files",
//       "urine-general_files",
//       "covid_files",
//     ],
//   };

//   let progress = {};

//   Object.keys(sections).forEach((section) => {
//     const fields = sections[section];

//     const filledFields = fields.filter((field) => {
//       let value;

//       if (section === "documents") {
//         // Берем значения из userData.files (если оно есть)
//         value = userData.files?.[field];
//       } else {
//         // Остальные секции берем прямо из userData
//         value = userData[field];
//       }

//       if (Array.isArray(value)) {
//         return value.length > 0; // Проверяем, что массив не пустой
//       }

//       if (typeof value === "string") {
//         return value.trim() !== ""; // Проверяем, что строка не пустая
//       }

//       return value !== undefined && value !== null; // На случай других типов данных
//     });

//     progress[section] = Math.round((filledFields.length / fields.length) * 100);
//   });

//   return progress;
// };

//export { useUserStore, useDescriptionStore, useDocumentStore };
