import React from 'react';

const Header = () => {
  return (
    <header>
      <img src="logo.png" alt="Logo" />
      <h1>George S</h1>
      <nav>
        <ul>
          <a href="#about">About me</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
          <a href="#resume">Resume</a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;