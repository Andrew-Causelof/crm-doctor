import PropTypes from 'prop-types';
import classNames from 'classnames';
import Description from '../common/Description';

function PatientField({ id, name, label, placeholder, value, descriptionTag }) {
  const inputClass = classNames('input', {
    ok: value,
    err: !value,
  });

  return (
    <div className="control">
      <label
        className={classNames('control_title', {
          'control_title-notice': descriptionTag,
        })}
        htmlFor={id}
      >
        {label}
        {descriptionTag && <Description tag={descriptionTag} />}
      </label>
      <input
        id={id}
        name={name}
        type="text"
        placeholder={placeholder}
        value={value}
        className={inputClass}
        onChange={() => {}} // потому что у врача только чтение
      />
    </div>
  );
}

PatientField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  descriptionTag: PropTypes.string, // Опциональный description
};

export default PatientField;
