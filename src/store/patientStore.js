import { create } from 'zustand';
import axios from 'axios';
import { API_BASE_URL } from '../config';

export const usePatientStore = create((set) => ({
  patients: [], // Список пациентов
  letters: [], // Список букв для AlphabetFilter
  pagination: {
    page: 1,
    limit: 10,
    total: 0,
    pages: 0,
  },
  selectedLetter: '',
  loading: false,
  error: null,

  fetchPatients: async (page = 1, limit = 10, letter = '') => {
    set({ loading: true, error: null });

    try {
      const response = await axios.get(`${API_BASE_URL}/patients`, {
        params: { page, limit, letter },
      });

      const { patients, pagination, letters } = response.data.success;

      set({
        patients: patients,
        pagination: pagination,
        letters: letters,
        loading: false,
      });
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

    await usePatientStore.getState().fetchPatients(1, 10, letter);
  },

  changePage: async (page) => {
    const { pagination, selectedLetter, fetchPatients } =
      usePatientStore.getState();
    await fetchPatients(page, pagination.limit, selectedLetter);
  },
}));
