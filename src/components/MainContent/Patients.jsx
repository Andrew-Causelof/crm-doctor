import React from 'react';
import Breadcrumbs from '../common/Breadcrumbs';
import { useAppStore } from '../../store';
import PatientDetails from './PatientDetails';
import PatientsList from './PatientsList ';

function Patients() {
  const { selectedPatientId } = useAppStore();

  return selectedPatientId ? <PatientDetails /> : <PatientsList />;
}

export default Patients;
