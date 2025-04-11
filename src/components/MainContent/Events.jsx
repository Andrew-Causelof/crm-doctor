import React from 'react';
import { useEffect, useState } from 'react';
import Breadcrumbs from '../common/Breadcrumbs';
import eventsData from '../../data/dummyEvents.json';
import EventsList from '../common/EventsList';
import Pagination from '../common/Pagination';
import EventsSearch from '../common/EventsSearch';
import EventsAction from '../common/EventsAction';
function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  console.log(events);

  return (
    <main className="main main-full">
      <div className="content">
        <Breadcrumbs title="События" />
        <div className="content_body">
          <div className="page_actions">
            <EventsAction />
            <EventsSearch />
          </div>
          <EventsList groupedEvents={events} />
          <Pagination />
        </div>
      </div>
    </main>
  );
}

export default Events;
