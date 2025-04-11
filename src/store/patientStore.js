import { create } from 'zustand';
import axios from 'axios';
import { API_BASE_URL } from '../config';

export const usePatientStore = create((set) => ({
  patients: [], // Список пациентов
  pagination: {
    page: 1,
    limit: 10,
    total: 0,
    pages: 0,
  },
  selectedLetter: '', // Для фильтрации по букве
  loading: false,
  error: null,

  // Метод для загрузки списка пациентов
  fetchPatients: async (page = 1, limit = 10, letter = '') => {
    set({ loading: true, error: null });

    try {
      const response = await axios.get(`${API_BASE_URL}/patients`, {
        params: { page, limit, letter },
      });

      const { patients, pagination } = response.data.success;

      set({
        patients: patients,
        pagination: pagination,
        loading: false,
      });
    } catch (error) {
      console.error('Ошибка загрузки пациентов:', error);
      set({ error: 'Ошибка загрузки данных', loading: false });
    }
  },

  // Метод для выбора буквы и перезагрузки пациентов
  selectLetter: async (letter) => {
    set((state) => ({
      selectedLetter: letter,
      pagination: {
        ...state.pagination,
        page: 1, // сбрасываем страницу при выборе буквы
      },
    }));

    // Перезагрузка пациентов по выбранной букве
    await usePatientStore.getState().fetchPatients(1, 10, letter);
  },

  // Метод для смены страницы
  changePage: async (page) => {
    const { pagination, selectedLetter, fetchPatients } =
      usePatientStore.getState();
    await fetchPatients(page, pagination.limit, selectedLetter);
  },
}));
