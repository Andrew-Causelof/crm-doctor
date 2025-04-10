import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function SingleSelector({ options, onChange, placeholder, value }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(value || ''); // Инициализация выбранного пункта из пропсов
  const [validationClass, setValidationClass] = useState(''); // Класс для валидации

  // Обработка клика на опцию
  const handleSelect = (option) => {
    setSelectedItem(option);
    setIsDropdownOpen(false);
    onChange(option); // Обновляем выбранный элемент через onChange
  };

  // Обработчик клика по кнопке для отображения/скрытия выпадающего списка
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Проверка, выбран ли пункт, и установка класса
  useEffect(() => {
    setValidationClass(selectedItem ? 'ok' : 'err');
  }, [selectedItem]);

  return (
    <div className={`select ${isDropdownOpen ? 'show' : ''} ${validationClass}`}>
      <button
        type="button"
        className="select_toggle"
        onClick={toggleDropdown}
      >
        {selectedItem || placeholder}
      </button>

      {isDropdownOpen && (
        <div className="select_dropdown">
          <ul className="select_options">
            {options.map((option, index) => (
              <li
                key={index}
                className={`select_option ${selectedItem === option ? 'select_option-selected' : ''}`}
                onClick={() => handleSelect(option)}
              >
                <div className="radio_item" type="single">
                  <input
                    type="radio"
                    checked={selectedItem === option}
                    readOnly
                  />
                  <span className="radio_item_visible"></span>
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

SingleSelector.propTypes = {
  options: PropTypes.array.isRequired, // Список доступных опций
  onChange: PropTypes.func.isRequired, // Функция, которая будет вызываться при изменении выбора
  placeholder: PropTypes.string, // Плейсхолдер для пустого состояния
  value: PropTypes.string, // Значение выбранного пункта
};
