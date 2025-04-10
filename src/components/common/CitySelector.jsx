import PropTypes from 'prop-types';

const YANDEX_GEOCODER_API_KEY = 'fa617298-1ac0-4a37-987a-b0e8ce460241'; // @TODO Заменить на свой API ключ

export default function CitySelector({ value, onChange, placeholder, disabled = false }) {
  const [cityList, setCityList] = useState([]);
  const [query, setQuery] = useState(value || '');
  const [validationClass, setValidationClass] = useState('');

  const validateField = (fieldValue) => {
    return fieldValue && fieldValue.trim() !== '';
  };

  const handleChange = (e) => {
    const currentValue = e.target.value;
    setQuery(currentValue);

    if (onChange) {
      onChange(e, currentValue);
    }

    setValidationClass(validateField(currentValue) ? 'ok' : 'err');
  };

  const handleCitySelect = (city) => {
    setQuery(city);
    setCityList([]);
    if (onChange) {
      onChange(null, city); // Обновляем значение
    }
  };

  const fetchCities = async (query) => {
    if (!query) {
      setCityList([]);
      return;
    }

    try {
      const response = await fetch(`https://geocode-maps.yandex.ru/1.x/?format=json&geocode=${query}&apikey=${YANDEX_GEOCODER_API_KEY}`);
      const data = await response.json();

      const cities = data.response.GeoObjectCollection.featureMember.map(item => {
        return item.GeoObject.name;
      });

      setCityList(cities);
    } catch (error) {
      console.error('Error fetching cities:', error);
    }
  };

  useEffect(() => {
    fetchCities(query);
  }, [query]);

  useEffect(() => {
    setValidationClass(validateField(value) ? 'ok' : 'err');
  }, [value]);

  return (
    <div className={`select ${validationClass}`}>
      <input
        type="text"
        name="city"
        value={query}
        placeholder={placeholder}
        onChange={handleChange}
        disabled={disabled}
        className={`input-field ${validationClass}`}
      />
      {cityList.length > 0 && (
        <div className="select_dropdown">
          <ul className="select_options">
            {cityList.map((city, index) => (
              <li
                key={index}
                className="select_option"
                onClick={() => handleCitySelect(city)}
              >
                <span>{city}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

CitySelector.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};
