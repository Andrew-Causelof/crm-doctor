import React, { useEffect } from 'react';
import Breadcrumbs from '../common/Breadcrumbs';
import Pagination from '../common/Pagination';
import AlphabetFilter from '../common/AlphabetFilter';
import alphabetData from '../../data/dummyAlphabet.json';
import EventsSearch from '../common/EventsSearch';
import patientsData from '../../data/dummyPatients.json';
import PatientsGroup from '../common/PatientsGroup';

import { usePatientStore } from '../../store/patientStore';

function PatientsList() {
  const { fetchPatients, patients, loading, pagination } = usePatientStore();

  useEffect(() => {
    fetchPatients(); // Загружаем сразу при входе
  }, []);

  if (loading) {
    return <div>Загрузка пациентов...</div>;
  }

  console.log(patients);

  return (
    <main className="main main-full">
      <div className="content">
        <Breadcrumbs title="Все пациенты" />
        <div className="content_body">
          <div className="page_actions">
            <AlphabetFilter data={alphabetData} />
            <EventsSearch />
          </div>

          {patientsData.map((group) => (
            <PatientsGroup key={group.letter} group={group} />
          ))}

          <Pagination />
        </div>
      </div>
    </main>
  );
}

export default PatientsList;
