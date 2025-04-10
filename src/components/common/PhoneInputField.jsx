import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function PhoneInputField({
    id,
    name,
    value,
    placeholder = '+7 (___) ___ - __ - __',
    onChange,
    autoComplete = '',
    className = '',
}) {
    const [inputValue, setInputValue] = useState(value || '');
    const [validationClass, setValidationClass] = useState(''); // Для 'ok' или 'err'

    // Форматирование ввода телефона
    const formatPhoneNumber = (phone) => {
        const numbers = phone.replace(/\D/g, ''); // Удаляем все, кроме цифр
        const formatted = numbers
            .replace(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2}).*/, '+$1 ($2) $3 - $4 - $5')
            .replace(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/, '+$1 ($2) $3 - $4 - $5'); // Форматируем по маске
        return formatted.length > 2 ? formatted : numbers; // Если меньше 2 символов, возвращаем просто цифры
    };

    // Валидация номера
    const validatePhoneNumber = (phone) => {
        const numbers = phone.replace(/\D/g, ''); // Удаляем все, кроме цифр
        return numbers.length === 11; // Российский номер должен содержать 11 цифр
    };

    // Обработка изменения значения
    const handleChange = (e) => {
        const formattedValue = formatPhoneNumber(e.target.value);
        setInputValue(formattedValue);

        // Уведомляем родительский компонент об изменении
        if (onChange) {
            onChange(e, formattedValue); // Передаем отформатированное значение
        }

        // Устанавливаем класс валидации
        setValidationClass(validatePhoneNumber(formattedValue) ? 'ok' : 'err');
    };

    // Эффект для синхронизации переданного значения
    useEffect(() => {
        if (value) {
            setInputValue(formatPhoneNumber(value));
            setValidationClass(validatePhoneNumber(value) ? 'ok' : 'err');
        }
    }, [value]);

    return (
        <input
            id={id}
            type='text'
            name={name}
            value={inputValue}
            placeholder={placeholder}
            onChange={handleChange}
            autoComplete={autoComplete}
            className={`${className} ${validationClass}`}
        />
    );
}

PhoneInputField.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    autoComplete: PropTypes.string,
    className: PropTypes.string,
};
