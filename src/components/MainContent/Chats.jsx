import React from 'react';
import { useEffect, useState } from 'react';
import Breadcrumbs from '../common/Breadcrumbs';
import EventsAction from '../common/EventsAction';
import EventsSearch from '../common/EventsSearch';
import Pagination from '../common/Pagination';
import messagesData from '../../data/dummyMessages.json';
import MessagesList from '../common/MessagesList';

function Chats() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(messagesData);
  }, []);

  return (
    <main className="main main-full">
      <div className="content">
        <Breadcrumbs title="Чаты с пациентами" />
        <div className="content_body">
          <div className="page_actions">
            <EventsAction />
            <EventsSearch />
          </div>
          <MessagesList groupedMessages={messagesData} />
          <Pagination />
        </div>
      </div>
    </main>
  );
}

export default Chats;
