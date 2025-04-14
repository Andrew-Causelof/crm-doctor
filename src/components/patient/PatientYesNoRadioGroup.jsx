import PropTypes from 'prop-types';

function PatientYesNoRadioGroup({
  idPrefix,
  name,
  value,
  labelYes = 'Да',
  labelNo = 'Нет',
}) {
  return (
    <div className="checkbox">
      <label htmlFor={`${idPrefix}-yes`}>
        <input
          id={`${idPrefix}-yes`}
          type="radio"
          name={name}
          value="yes"
          checked={value === 'yes'}
          onChange={() => {}}
        />
        <div className="checkbox_cell"></div>
        <span>{labelYes}</span>
      </label>

      <label htmlFor={`${idPrefix}-no`}>
        <input
          id={`${idPrefix}-no`}
          type="radio"
          name={name}
          value="no"
          checked={value === 'no'}
          onChange={() => {}}
        />
        <div className="checkbox_cell"></div>
        <span>{labelNo}</span>
      </label>
    </div>
  );
}

PatientYesNoRadioGroup.propTypes = {
  idPrefix: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  labelYes: PropTypes.string,
  labelNo: PropTypes.string,
};

export default PatientYesNoRadioGroup;
