import React from 'react';

function EventsList({ groupedEvents }) {
  return (
    <>
      {groupedEvents.map((group) => (
        <article className="article" key={group.date}>
          <div className="article_head">
            <div className="title title-article title-badge">
              {new Date(group.date).toLocaleDateString('ru-RU')}{' '}
              <span>{group.events.length}</span>
            </div>
          </div>
          <div className="article_body">
            <div className="events_items">
              {group.events.map((event) => (
                <div
                  key={event.record_id}
                  className={`events_item ${
                    event.read ? 'events_item-readed' : ''
                  }`}
                >
                  <div className="events_item_checkbox">
                    <input
                      type="checkbox"
                      id={`checkbox-${event.record_id}`}
                      data-record-id={event.record_id}
                      //   defaultChecked={!event.read} @TODO По-умолчанию выделить новые
                    />
                    <label
                      className="events_item_checkbox_visible"
                      htmlFor={`checkbox-${event.record_id}`}
                    ></label>
                  </div>
                  <div className="events_item_info">
                    <span className="events_item_person">Пользователь</span>
                    <a href="#">{event.user.name}</a>
                    <span>добавил документ</span>
                    <a href={event.link} target="_blank" rel="noreferrer">
                      {event.title}
                    </a>
                  </div>
                  <span className="events_item_timestamp">{event.time}</span>
                </div>
              ))}
            </div>
          </div>
        </article>
      ))}
    </>
  );
}

export default EventsList;
