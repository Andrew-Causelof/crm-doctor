import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Selector({ options, type = 'single', onChange, placeholder }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  // Обработка клика на опцию
  const handleSelect = (option) => {
    let updatedItems;
    if (type === 'multiple') {
      if (selectedItems.includes(option)) {
        // Если элемент уже выбран, убираем его
        updatedItems = selectedItems.filter((item) => item !== option);
      } else {
        // Добавляем элемент в выбранные
        updatedItems = [...selectedItems, option];
      }
    } else {
      // Для одиночного выбора всегда выбираем только один пункт
      updatedItems = [option];
    }

    setSelectedItems(updatedItems);
    onChange(updatedItems); // Отправляем выбранные элементы в родительский компонент
  };

  // Обработчик клика по кнопке для отображения/скрытия выпадающего списка
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Функция для отображения выбранных пунктов
  const renderSelectedItems = () => {
    return selectedItems.map((item, index) => (
      <div key={index} className="selected_item">
        <div className="selected_item_head">
          <span className="selected_item_title">{item}</span>
          <button
            type="button"
            className="selected_item_del"
            onClick={() => handleSelect(item)} // Удаление выбранного пункта
          >
            Удалить
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="select">
      <button
        type="button"
        className="select_toggle"
        onClick={toggleDropdown}
      >
        {selectedItems.length > 0 ? selectedItems.join(', ') : placeholder}
      </button>

      {isDropdownOpen && (
        <div className="select_dropdown">
          <ul className="select_options">
            {options.map((option, index) => (
              <li
                key={index}
                className={`select_option ${selectedItems.includes(option) ? 'select_option-selected' : ''}`}
                onClick={() => handleSelect(option)}
              >
                <div className="checkbox_item">
                  <input
                    type={type === 'multiple' ? 'checkbox' : 'radio'}
                    checked={selectedItems.includes(option)}
                    readOnly
                  />
                  <span className="checkbox_item_visible"></span>
                </div>
                <span className="select_option_text">{option}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="selected">
        {renderSelectedItems()}
      </div>
    </div>
  );
}

Selector.propTypes = {
  options: PropTypes.array.isRequired, // Список доступных опций
  type: PropTypes.oneOf(['single', 'multiple']), // Тип выбора: одиночный или множественный
  onChange: PropTypes.func.isRequired, // Функция, которая будет вызываться при изменении выбора
  placeholder: PropTypes.string, // Плейсхолдер для пустого состояния
};
