import React from 'react';

function MessagesList({ groupedMessages }) {
  return (
    <>
      {groupedMessages.map((group) => (
        <article className="article" key={group.date}>
          <div className="article_head">
            <div className="title title-article title-badge">
              {new Date(group.date).toLocaleDateString('ru-RU')}{' '}
              <span>{group.events.length}</span>
            </div>
          </div>
          <div className="article_body">
            <div className="events_items">
              {group.events.map((message) => (
                <div
                  key={message.record_id}
                  className={`events_item ${
                    message.read ? 'events_item-readed' : ''
                  }`}
                >
                  <div className="events_item_checkbox">
                    <input
                      type="checkbox"
                      id={`checkbox-${message.record_id}`}
                      //   defaultChecked={message.read}
                    />
                    <label
                      className="events_item_checkbox_visible"
                      htmlFor={`checkbox-${message.record_id}`}
                    ></label>
                  </div>
                  <div className="events_item_info">
                    <span className="events_item_person">Пользователь</span>
                    <a href="#">{message.user.name}</a>
                    <span>написал</span>
                    <a href="#">в чат</a>
                  </div>
                  <span className="events_item_timestamp">{message.time}</span>
                </div>
              ))}
            </div>
          </div>
        </article>
      ))}
    </>
  );
}

export default MessagesList;
