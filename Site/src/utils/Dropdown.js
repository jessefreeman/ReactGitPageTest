import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Transition from '../utils/Transition.js';

function Dropdown({
  children,
  title
}) {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <li
      className="relative"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
      onFocus={() => setDropdownOpen(true)}
      onBlur={() => setDropdownOpen(false)}
    >
      <a
        className="text-palette-15 hover:text-palette-14 px-4 py-2 flex items-center transition duration-150 ease-in-out"
        href="#0"
        aria-haspopup="true"
        aria-expanded={dropdownOpen}
        onClick={(e) => e.preventDefault()}
      >
        {title}
      </a>
      <Transition
        show={dropdownOpen}
        tag="ul"
        className="origin-top-right absolute top-full right-1 w-40 bg-palette-5 py-2 ml-4 rounded-sm"
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        {children}
      </Transition>
    </li>
  );
}

export default Dropdown;

Dropdown.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired
  ]),
  title: PropTypes.string.isRequired,
};
