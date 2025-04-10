import { useState } from 'react';
import PropTypes from 'prop-types';

export default function MultipleSelector({ options, onChange, placeholder, value }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState(value || []);

  // Обработка клика на опцию
  const handleSelect = (option) => {
    let updatedItems;
    if (selectedItems.includes(option)) {
      // Если элемент уже выбран, убираем его
      updatedItems = selectedItems.filter((item) => item !== option);
    } else {
      // Добавляем элемент в выбранные
      updatedItems = [...selectedItems, option];
    }

    setSelectedItems(updatedItems);
    onChange(updatedItems); // Отправляем выбранные элементы в родительский компонент
  };

  // Обработчик клика по кнопке для отображения/скрытия выпадающего списка
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={`select ${isDropdownOpen ? 'show' : ''}`}>
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
                    type="checkbox"
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
    </div>
  );
}

MultipleSelector.propTypes = {
  options: PropTypes.array.isRequired, // Список доступных опций
  onChange: PropTypes.func.isRequired, // Функция, которая будет вызываться при изменении выбора
  placeholder: PropTypes.string, // Плейсхолдер для пустого состояния
  value: PropTypes.array, // Список выбранных опций
};
