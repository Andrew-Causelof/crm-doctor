import React from 'react';
import PropTypes from 'prop-types';
import { useAppStore } from '../../store/store';

function PatientsGroup({ group }) {
  const { setSelectedPatientId } = useAppStore();

  return (
    <article className="article">
      <div className="article_head">
        <div className="title title-article title-badge">
          {group.letter} <span>{group.patients.length}</span>
        </div>
      </div>
      <div className="article_body">
        <div className="events_items">
          {group.patients.map((patient) => (
            <div className="events_item" key={patient.id}>
              <div className="events_item_checkbox">
                <input type="checkbox" id={`checkbox-${patient.id}`} />
                <label
                  className="events_item_checkbox_visible"
                  htmlFor={`checkbox-${patient.id}`}
                ></label>
              </div>
              <div className="events_item_info">
                <a onClick={() => setSelectedPatientId(patient.id)}>
                  {patient.name}{' '}
                </a>
              </div>
              <span className="events_item_timestamp">
                {patient.messages} сообщение{patient.messages !== 1 ? 'й' : ''}
              </span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

PatientsGroup.propTypes = {
  group: PropTypes.shape({
    letter: PropTypes.string.isRequired,
    patients: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        messages: PropTypes.number.isRequired,
        link: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
};

export default PatientsGroup;
