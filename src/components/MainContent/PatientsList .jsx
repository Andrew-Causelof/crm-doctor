import React from 'react';
import Breadcrumbs from '../common/Breadcrumbs';
import Pagination from '../common/Pagination';
import AlphabetFilter from '../common/AlphabetFilter';
import alphabetData from '../../data/dummyAlphabet.json';
import EventsSearch from '../common/EventsSearch';
import patientsData from '../../data/dummyPatients.json';
import PatientsGroup from '../common/PatientsGroup';

function PatientsList() {
  return (
    <main className="main main-full">
      <div className="content">
        <Breadcrumbs title="Все пациенты" />
        <div class="content_body">
          <div class="page_actions">
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
