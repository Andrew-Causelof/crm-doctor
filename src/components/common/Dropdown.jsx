import React, { useState } from 'react';
import classNames from 'classnames';

function Dropdown({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={classNames('dropdown', { active: isOpen })}>
      <div className="dropdown_head" onClick={toggleDropdown}>
        <div class="dropdown_name"> {title}</div>

        <div className="dropdown_icon"></div>
      </div>
      <div className="dropdown_body">{children}</div>
    </div>
  );
}

export default Dropdown;
