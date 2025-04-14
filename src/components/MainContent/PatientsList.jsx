import React, { useEffect } from 'react';
import Breadcrumbs from '../common/Breadcrumbs';
import PatientPagination from '../common/PatientPagination';
import AlphabetFilter from '../common/AlphabetFilter';
import alphabetData from '../../data/dummyAlphabet.json';
import EventsSearch from '../common/EventsSearch';
import patientsData from '../../data/dummyPatients.json';
import PatientsGroup from '../common/PatientsGroup';
import { usePatientStore } from '../../store/patientStore';
import Loader from '../common/Loader';

function PatientsList() {
  const {
    fetchPatients,
    pagination,
    loading,
    letters,
    selectedLetter,
    selectLetter,
    getFilteredPatients,
    searchQuery,
  } = usePatientStore();

  const patients = getFilteredPatients();

  useEffect(() => {
    fetchPatients(); // Загружаем сразу при входе
  }, []);

  if (loading) {
    return <Loader />;
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
        <Breadcrumbs
          title="Все пациенты"
          letter={selectedLetter}
          onResetFilters={() => selectLetter('')}
        />
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

          {!searchQuery && <PatientPagination />}
        </div>
      </div>
    </main>
  );
}

export default PatientsList;
