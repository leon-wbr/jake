import React from 'react';

import './Sidebar.scss';

import portrait from 'assets/images/portrait.png';
import socialVimeo from 'assets/svg/Social_Vimeo.svg';
import socialInstagram from 'assets/svg/Social_Instagram.svg';
import socialLinkedIn from 'assets/svg/Social_LinkedIn.svg';
import socialEmail from 'assets/svg/Social_Email.svg';

const Sidebar = () => (
  <aside className="Sidebar">
    <div className="Sidebar__Profile">
      <h1>Jake Wesley-Worrall</h1>
      <h2>Motion Designer / Birmingham</h2>
      <img src={portrait} />
    </div>
    <div className="Sidebar__Social">
      <a href="#">
        <img src={socialVimeo} alt="Vimeo" />
      </a>
      <a href="#">
        <img src={socialInstagram} alt="Instagram" />
      </a>
      <a href="#">
        <img src={socialLinkedIn} alt="LinkedIn" />
      </a>
      <a href="#">
        <img src={socialEmail} alt="Email" />
      </a>
    </div>
  </aside>
);

export default Sidebar;
