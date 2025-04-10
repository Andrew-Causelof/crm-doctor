import { useState } from 'react';
import PropTypes from 'prop-types';
import { useUserStore } from '../../store'; // Импортируем Zustand

export default function SelectorWithComments({ options, placeholder, fieldName }) {
  const { userData, setUserData } = useUserStore(); // Получаем состояние из Zustand
  const [selectedItems, setSelectedItems] = useState(userData[fieldName] || []);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Обработка клика на опцию
  const handleSelect = (option) => {
    let updatedItems;
    if (selectedItems.some((item) => item.id === option.id)) {
      updatedItems = selectedItems.filter((item) => item.id !== option.id);
    } else {
      updatedItems = [...selectedItems, { ...option, showCommentInput: false }];
    }

    setSelectedItems(updatedItems);
    setUserData(fieldName, updatedItems); // Сохраняем выбранные элементы в Zustand
  };

  // Обработчик клика по кнопке для отображения/скрытия выпадающего списка
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Добавление комментария
  const handleCommentChange = (e, id) => {
    const updatedItems = selectedItems.map((item) =>
      item.id === id ? { ...item, comment: e.target.value } : item
    );
    setSelectedItems(updatedItems);
    setUserData(fieldName, updatedItems); // Обновляем состояние в Zustand
  };

  // Удаление выбранного элемента и его комментария
  const handleDelete = (id) => {
    const updatedItems = selectedItems.filter((item) => item.id !== id);
    setSelectedItems(updatedItems);
    setUserData(fieldName, updatedItems); // Удаляем из состояния
  };

  // Т toggling комментарий инпута
  const handleToggleCommentInput = (id) => {
    const updatedItems = selectedItems.map((item) =>
      item.id === id ? { ...item, showCommentInput: !item.showCommentInput } : item
    );
    setSelectedItems(updatedItems);
    setUserData(fieldName, updatedItems);
  };

  return (
    <>
      <div className={`select ${isDropdownOpen ? 'show' : ''}`}>
        <button
          type="button"
          className="select_toggle"
          onClick={toggleDropdown}
        >
          {selectedItems.length > 0 ? selectedItems.map((item) => item.name).join(', ') : placeholder}
        </button>

        {isDropdownOpen && (
          <div className="select_dropdown">
            <ul className="select_options">
              {options.map((option, index) => (
                <li
                  key={index}
                  className={`select_option ${selectedItems.some((item) => item.id === option.id) ? 'select_option-selected' : ''}`}
                  onClick={() => handleSelect(option)}
                >
                  <div className="checkbox_item">
                    <input
                      type="checkbox"
                      checked={selectedItems.some((item) => item.id === option.id)}
                      readOnly
                    />
                    <span className="checkbox_item_visible"></span>
                  </div>
                  <span className="select_option_text">{option.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}



      </div>
      {/* Блоки с комментариями для выбранных элементов */}
      <div className="selected">
        {selectedItems.map((item) => (
          <div key={item.id} className="selected_item">
            <div className="selected_item_head">
              <span className="selected_item_title">{item.name}</span>
              <button
                type="button"
                className="selected_item_del"
                onClick={() => handleDelete(item.id)}
              >
                Удалить
              </button>
            </div>
            <div className="selected_item_body">
              {/* Если комментарий пустой, показываем кнопку для добавления */}
              {!item.comment && !item.showCommentInput && (
                <button
                  type="button"
                  className="selected_item_add"
                  onClick={() => handleToggleCommentInput(item.id)}
                >
                  Добавить комментарий к заболеванию
                </button>
              )}
              {/* Если showCommentInput true или есть комментарий, показываем поле для ввода */}
              {item.showCommentInput || item.comment ? (
                <textarea
                  className="textarea textarea-sm"
                  placeholder="Добавьте комментарий"
                  value={item.comment || ''}
                  onChange={(e) => handleCommentChange(e, item.id)}
                />
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

SelectorWithComments.propTypes = {
  options: PropTypes.array.isRequired, // Список доступных опций
  placeholder: PropTypes.string, // Плейсхолдер для пустого состояния
  fieldName: PropTypes.string.isRequired, // Уникальное имя для поля состояния
};
