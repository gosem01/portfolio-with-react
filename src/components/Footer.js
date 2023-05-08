import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
// import { faSlackLogo } from '@fortawesome/free-regular-svg-icons'
import { faSlack } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer>
      <p>&copy; My Portfolio 2023</p>
      <FontAwesomeIcon icon={faEnvelope} id='footerMailIcon' className='footerIcon'/>
      <FontAwesomeIcon icon={faSlack} className='footerIcon'/>
      <FontAwesomeIcon icon={faGithub} className='footerIcon'/>
    </footer>
  );
};

export default Footer;