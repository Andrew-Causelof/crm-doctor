import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function SnilsInputField({
    id,
    name,
    value,
    placeholder = 'Введите номер СНИЛС...',
    onChange,
    className = '',
}) {
    const [inputValue, setInputValue] = useState(value || '');
    const [validationClass, setValidationClass] = useState(''); // Класс 'ok' или 'err'

    // Маска СНИЛС: форматируем ввод
    const formatSnils = (snils) => {
        const numbers = snils.replace(/\D/g, ''); // Удаляем все, кроме цифр
        return numbers
            .replace(/(\d{3})(\d{3})(\d{3})(\d{2})?/, '$1-$2-$3 $4') // Маска "___-___-___ __"
            .trim(); // Убираем лишние пробелы
    };

    // Валидация СНИЛС: проверяем формат и контрольную сумму
    const validateSnils = (snils) => {
        const numbers = snils.replace(/\D/g, ''); // Удаляем все символы, кроме цифр
        if (numbers.length !== 11) return false; // СНИЛС должен содержать 11 цифр

        // Проверка контрольной суммы
        const snilsNumber = numbers.slice(0, 9); // Первые 9 цифр
        const controlSum = parseInt(numbers.slice(-2), 10); // Последние 2 цифры — контрольная сумма

        let sum = 0;
        for (let i = 0; i < snilsNumber.length; i++) {
            sum += parseInt(snilsNumber[i], 10) * (9 - i);
        }

        if (sum < 100) return sum === controlSum;
        if (sum === 100 || sum === 101) return controlSum === 0;
        return sum % 101 === controlSum || (sum % 101 === 100 && controlSum === 0);
    };

    // Обработка изменения значения
    const handleChange = (e) => {
        const formattedValue = formatSnils(e.target.value);
        setInputValue(formattedValue);

        // Передаем отформатированное значение в родительский компонент
        if (onChange) {
            onChange(e, formattedValue);
        }

        // Устанавливаем класс валидации
        setValidationClass(validateSnils(formattedValue) ? 'ok' : 'err');
    };

    // Эффект для синхронизации переданного значения
    useEffect(() => {
        if (value) {
            const formattedValue = formatSnils(value);
            setInputValue(formattedValue);
            setValidationClass(validateSnils(formattedValue) ? 'ok' : 'err');
        }
    }, [value]);

    return (
        <input
            id={id}
            name={name}
            value={inputValue}
            placeholder={placeholder}
            onChange={handleChange}
            className={`${className} ${validationClass}`} // Применяем классы 'ok' или 'err'
            type='text'
        />
    );
}

SnilsInputField.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string, // Значение СНИЛС
    placeholder: PropTypes.string, // Плейсхолдер
    onChange: PropTypes.func, // Обработчик изменения
    className: PropTypes.string, // Дополнительный CSS-класс
};
