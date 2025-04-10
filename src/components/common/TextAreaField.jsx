import { useUserStore } from '../../store'; // Импортируем Zustand хранилище
import PropTypes from 'prop-types';

export default function TextAreaField({ id, name, placeholder }) {
  const { userData, setUserData } = useUserStore(); // Получаем состояние и метод для его обновления

  const handleChange = (e) => {
    setUserData(name, e.target.value); // Обновляем комментарий в глобальном состоянии
  };

  return (
    <div className="form_controls">
      <div className="control">
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          value={userData[name] || ''}
          onChange={handleChange}
          className="textarea"
        />
      </div>
    </div>
  );
}

TextAreaField.propTypes = {
  id: PropTypes.string, // Уникальный ID для поля
  name: PropTypes.string.isRequired, // Имя поля для доступа к состоянию
  placeholder: PropTypes.string, // Плейсхолдер
};
