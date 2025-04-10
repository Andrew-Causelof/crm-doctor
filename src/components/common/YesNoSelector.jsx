import PropTypes from 'prop-types';
import { useUserStore } from '../../store';

export default function YesNoSelector({ labelYes, labelNo, fieldName }) {
    const { userData, setUserData } = useUserStore(); // Получаем состояние и метод для его обновления

    const handleChange = (e) => {
        setUserData(fieldName, e.target.value); // Обновляем значение в состоянии по уникальному fieldName
    };

    return (
        <div className="checkbox">
            <label htmlFor={`yes-${fieldName}`}>
                <input
                    id={`yes-${fieldName}`}
                    type="radio"
                    name={fieldName}
                    value="yes"
                    onChange={handleChange}
                    checked={userData[fieldName] === "yes"}
                />
                <div className="checkbox_cell"></div>
                <span>{labelYes}</span> {/* Переименовываем в зависимости от пропса */}
            </label>
            <label htmlFor={`no-${fieldName}`}>
                <input
                    id={`no-${fieldName}`}
                    type="radio"
                    name={fieldName}
                    value="no"
                    onChange={handleChange}
                    checked={userData[fieldName] === "no"}
                />
                <div className="checkbox_cell"></div>
                <span>{labelNo}</span> {/* Переименовываем в зависимости от пропса */}
            </label>
        </div>
    );
}

YesNoSelector.propTypes = {
    labelYes: PropTypes.string.isRequired, // Текст для варианта "Да"
    labelNo: PropTypes.string.isRequired, // Текст для варианта "Нет"
    fieldName: PropTypes.string.isRequired, // Название поля для сохранения в глобальном состоянии
};
