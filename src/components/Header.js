import React from 'react';
import Navigation from './Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header>
      {/* <img src="logo.png" alt="Logo" /> */}
      <FontAwesomeIcon icon={faUserAstronaut} id='headericon'/>
      <h1>George S</h1>
      <Navigation />
    </header>
  );
};

export default Header;