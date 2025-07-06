import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header({ title }) {
  return (
    <header className="section-title">
      <h1>
        <FontAwesomeIcon icon={faRocket} style={{ marginRight: '8px' }} />
        {title}
      </h1>
    </header>
  );
}

export default Header;
