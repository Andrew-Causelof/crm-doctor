import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Пример данных регионов
const regions = [
    { id: '77', name: 'Москва' },
    { id: '78', name: 'Санкт-Петербург' },
    { id: '50', name: 'Московская область' },
    { id: '47', name: 'Ленинградская область' },
    { id: '01', name: 'Республика Адыгея' },
    { id: '02', name: 'Республика Башкортостан' },
    // Добавьте другие регионы
];

export default function RegionSelector({ value, onChange }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState('');

    // Инициализируем выбранный регион из `value`
    useEffect(() => {
        const region = regions.find((region) => region.id === value);
        if (region) {
            setSelectedRegion(region.name);
        }
    }, [value]);

    const handleSelect = (region) => {
        setSelectedRegion(region.name); // Отображаем выбранный регион
        setIsDropdownOpen(false); // Закрываем выпадающий список
        if (onChange) {
            onChange(region.id); // Передаем ID региона родительскому компоненту
        }
    };

    return (
        <div className="select">
            <button
                type="button"
                className="select_toggle"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
                {selectedRegion || 'Выберите регион полиса...'}
            </button>
            {isDropdownOpen && (
                <div className="select_dropdown">
                    <ul className="select_options">
                        {regions.map((region) => (
                            <li
                                key={region.id}
                                className="select_option"
                                onClick={() => handleSelect(region)}
                            >
                                {region.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

RegionSelector.propTypes = {
    value: PropTypes.string, // ID текущего выбранного региона
    onChange: PropTypes.func.isRequired, // Callback для передачи выбранного ID
};
