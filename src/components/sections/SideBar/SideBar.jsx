import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { links, mobileLinks } from '../../../data/sidebar-links';
import './SideBar.scss';

const SideBar = ({ active, setActive }) => {
  return (
    <div className={active ? 'SideBar SideBar__active' : 'SideBar'} data-testid="links-container">
      <ul className="SideBar__menu" >
        {links.map((link, index) => {
          return (
            <li className="SideBar__menu-item" key={index} data-testid="links-li">
              {link}
            </li>
          );
        })}
      </ul>
      <ul className="SideBar__mobilemenu">
        {mobileLinks.map((link, index) => {
          return (
            <li
              className="SideBar__menu-item"
              key={index}
              data-aos="fade-right"
              onClick={() => setActive(false)}
              data-testid="mobileLinks-li"
            >
              <Link to={link.to}>{link.name}</Link>
            </li>
          );
        })}
        <li className="SideBar__menu-item">
          <a
            href="https://starlink-blond.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            starlink
          </a>
        </li>
      </ul>
    </div>
  );
};

SideBar.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func,
};

SideBar.defaultProps = {
  active: false,
  setActive: () => { },
};

export default SideBar;
