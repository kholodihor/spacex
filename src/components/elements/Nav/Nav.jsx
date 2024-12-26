import React from 'react';
import { NavLink } from 'react-router-dom';
import { links } from '../../../store/nav';
import './Nav.scss';


const Nav = () => {
  return (
    <ul className="Nav" data-testid="links-container">
      {links.map((link, index) => (
        <li key={index} data-testid="links-li">
          <NavLink to={link.to} data-testid="links">{link.name}</NavLink>
        </li>
      ))}
      <li>
        <span>
          <a
            href="https://coldstarlink.netlify.app/"
            rel="noreferrer noopener"
            target="_blank"
          >
            starlink
          </a>
        </span>
      </li>
    </ul>
  );
};

export default Nav;
