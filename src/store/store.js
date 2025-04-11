import { create } from 'zustand';
import { API_BASE_URL } from '../config';
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
