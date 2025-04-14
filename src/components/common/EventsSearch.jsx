import React from 'react';
import { usePatientStore } from '../../store/patientStore';

function EventsSearch() {
  const { setSearchQuery } = usePatientStore();

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="page_actions_search search">
      <input type="text" placeholder="Поиск..." onChange={handleChange} />
      <span className="search_icon"></span>
    </div>
  );
}

export default EventsSearch;
