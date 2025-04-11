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
  const {
    fetchPatients,
    patients,
    pagination,
    loading,
    letters,
    selectedLetter,
    selectLetter,
  } = usePatientStore();

  useEffect(() => {
    fetchPatients(); // Загружаем сразу при входе
  }, []);

  if (loading) {
    return <div>Загрузка пациентов...</div>;
  }

  // Группируем пациентов по первой букве фамилии
  const groupedPatients = patients.reduce((acc, patient) => {
    const firstLetter = patient.lastName[0].toUpperCase();
    if (!acc[firstLetter]) acc[firstLetter] = [];
    acc[firstLetter].push(patient);
    return acc;
  }, {});

  const groupedArray = Object.entries(groupedPatients).map(
    ([letter, group]) => ({
      letter,
      patients: group,
    })
  );

  const alphabetData = letters.map((letter) => ({
    letter,
    selected: selectedLetter === letter,
    available: true,
  }));

  return (
    <main className="main main-full">
      <div className="content">
        <Breadcrumbs title="Все пациенты" />
        <div className="content_body">
          <div className="page_actions">
            <AlphabetFilter
              availableLetters={letters} // <- буквы, за которыми есть пациенты
              selectedLetter={selectedLetter} // <- выбранная буква
              onSelect={selectLetter}
            />

            <EventsSearch />
          </div>

          {groupedArray.map((group) => (
            <PatientsGroup key={group.letter} group={group} />
          ))}

          <Pagination />
        </div>
      </div>
    </main>
  );
}

export default PatientsList;
