import React, { useEffect, useRef, useState } from 'react';
import 'air-datepicker/air-datepicker.css';
import AirDatepicker from 'air-datepicker';
import PropTypes from 'prop-types';

export default function AirDatepickerField({
    id,
    value,
    onChange,
    placeholder = 'Выбрать дату',
    type = 'text',
    className = '',
}) {
    const inputRef = useRef(null);
    const [validationClass, setValidationClass] = useState('');

    // Устанавливаем класс валидации при каждом обновлении значения
    useEffect(() => {
        setValidationClass(value ? 'ok' : 'err'); // Если значение есть, класс 'ok', иначе 'err'
    }, [value]);

    // Инициализация AirDatepicker
    useEffect(() => {
        if (inputRef.current) {
            new AirDatepicker(inputRef.current, {
                onSelect({ formattedDate }) {
                    if (onChange) {
                        onChange(formattedDate); // Передаем выбранную дату в родительский компонент
                    }
                },
                dateFormat: 'dd.MM.yyyy', // Формат даты
            });
        }
    }, [onChange]);

    return (
        <input
            id={id}
            ref={inputRef}
            type={type}
            defaultValue={value}
            placeholder={placeholder}
            className={`${className} ${validationClass}`} // Применяем классы валидации
        />
    );
}

AirDatepickerField.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string, // Значение поля
    placeholder: PropTypes.string, // Плейсхолдер
    onChange: PropTypes.func, // Обработчик изменения
    type: PropTypes.string, // Опционально: тип поля
    className: PropTypes.string, // Опционально: класс для стилизации
};
