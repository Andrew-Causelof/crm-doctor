import React from 'react'
import PropTypes from 'prop-types'

function Tab({ text, onClick, active }) {
  return (
    <li className={`menu_item ${active ? 'menu_item-active' : ''}`} onClick={onClick}>
    <a className="menu_link" onClick={(e) => e.preventDefault()}>
      <span className="menu_link_status"></span>
      <div className="menu_link_content">
        <div className="menu_link_text">{text}</div>
      </div>
    </a>
  </li>
  )
}

export default Tab


Tab.propTypes = {
    text: PropTypes.string.isRequired, // Обязательное поле для текста
    onClick: PropTypes.func, // Необязательный обработчик клика
    active: PropTypes.bool, // Указывает, активен ли таб
};
