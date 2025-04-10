import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function AlphabetFilter({ data, onSelect }) {
  return (
    <div className="page_actions_chars">
      {data.map(({ letter, selected, available }) => (
        <button
          key={letter}
          className={classNames(
            'page_actions_chars_item',
            { 'page_actions_chars_item-current': selected },
            { 'page_actions_chars_item-notification': available }
          )}
          //   onClick={() => onSelect(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}

AlphabetFilter.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      letter: PropTypes.string.isRequired,
      selected: PropTypes.bool,
      available: PropTypes.bool,
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
};
