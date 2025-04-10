import React from 'react'
import PropTypes from 'prop-types'

function MessageTab({text, onClick, active}) {
  return (
    <li className={`menu_item ${active ? 'menu_item-active' : ''}`}>
    <a  className="menu_link" onClick={onClick}>
      <span className="menu_link_status"></span>
      <div className="menu_link_content">
        <div className="menu_link_text">{text}</div>
        <div className={`notifications notifications-v2 ${active ? 'notifications-dark' : ''}`}>
          <div className="notifications_icon"></div>
          <div className="notifications_count">15 новых сообщений</div>
        </div>
      </div>
    </a>
  </li>
  )
}

export default MessageTab


MessageTab.propTypes = {
    text: PropTypes.string.isRequired, // Обязательное поле для текста
    onClick: PropTypes.func, // Необязательный обработчик клика
    active: PropTypes.bool, // Указывает, активен ли таб
};
