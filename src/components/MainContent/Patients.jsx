import React from 'react';
import { useAppStore } from '../../store/store';
import PatientDetails from './PatientDetails';
import PatientsList from './PatientsList';

function Patients() {
  const { selectedPatientId } = useAppStore();

  return selectedPatientId ? <PatientDetails /> : <PatientsList />;
}

export default Patients;
