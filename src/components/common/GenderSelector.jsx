import InputField from '../common/InputField';
import PropTypes from 'prop-types';
import { useUserStore } from '../../store';

export default function GenderSelector() {
    const { userData, setUserData } = useUserStore();

    const handleChange = (e) => {
        setUserData("gender", e.target.value); // Обновляем поле gender
    };

    return (
        <div className="form_controls">
            <div className="control">
                <span className="control_title">Ваш пол</span>
                <div className="checkbox">
                    <label htmlFor="male">
                        <InputField
                            id="male"
                            type="radio"
                            name="sex"
                            value="male"
                            onChange={handleChange}
                            checked={userData.gender === "male"}  // Привязка к состоянию из Zustand
                        />
                        <div className="checkbox_cell"></div>
                        <span>Мужской</span>
                    </label>
                    <label htmlFor="fem">
                        <InputField
                            id="fem"
                            type="radio"
                            name="sex"
                            value="fem"
                            onChange={handleChange}
                            checked={userData.gender === "fem"} // Привязка к состоянию из Zustand
                        />
                        <div className="checkbox_cell"></div>
                        <span>Женский</span>
                    </label>
                </div>
            </div>
        </div>
    );
}


GenderSelector.propTypes = {
    defaultGender: PropTypes.string, // Начальное значение пола
};
