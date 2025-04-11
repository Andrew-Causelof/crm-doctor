import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const alphabet = [
  'А',
  'Б',
  'В',
  'Г',
  'Д',
  'Е',
  'Ж',
  'З',
  'И',
  'К',
  'Л',
  'М',
  'Н',
  'О',
  'П',
  'Р',
  'С',
  'Т',
  'У',
  'Ф',
  'Х',
  'Ц',
  'Ч',
  'Ш',
  'Э',
  'Ю',
  'Я',
];

function AlphabetFilter({ availableLetters = [], selectedLetter, onSelect }) {
  return (
    <div className="page_actions_chars">
      {alphabet.map((letter) => (
        <button
          key={letter}
          className={classNames('page_actions_chars_item', {
            'page_actions_chars_item-current': selectedLetter === letter,
            'page_actions_chars_item-notification':
              availableLetters.includes(letter),
          })}
          onClick={() => onSelect(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}

export default AlphabetFilter;

AlphabetFilter.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      letter: PropTypes.string.isRequired,
      selected: PropTypes.bool,
      available: PropTypes.bool,
    })
  ).isRequired,
  onSelect: PropTypes.func,
};
