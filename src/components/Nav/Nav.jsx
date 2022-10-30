import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <ul className="Nav">
      <li>
        <NavLink to="/vehicles/falcon-9">falcon9</NavLink>
      </li>
      <li>
        <NavLink to="/vehicles/falcon-heavy">falcon heavy</NavLink>
      </li>
      <li>
        <NavLink to="/vehicles/dragon">dragon</NavLink>
      </li>
      <li>
        <NavLink to="/vehicles/starship">starship</NavLink>
      </li>
      <li>
        <NavLink to="/human-spaceflight">human spaceflight</NavLink>
      </li>
      <li>
        <NavLink to="/rideshare" title="you need to log in to visit this page">
          rideshare
        </NavLink>
      </li>
      <li>
        <span>
          <a href="https://starlink-blond.vercel.app/" rel="noreferrer" target="_blank" >starlink</a>
        </span>
      </li>
    </ul>
  );
};

export default Nav;
