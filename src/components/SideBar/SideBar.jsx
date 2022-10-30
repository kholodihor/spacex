import React from 'react';
import { Link } from 'react-router-dom';
import { links, mobileLinks } from '../../store/sidebar-links';
import PropTypes from 'prop-types';
import './SideBar.scss';

const SideBar = ({ active, setActive }) => {
  return (
    <div className={active ? 'SideBar SideBar__active' : 'SideBar'}>
      <ul className="SideBar__menu">
        {links.map((link, index) => {
          return (
            <li className="SideBar__menu-item" key={index}>
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
  setActive: () => {},
};

export default SideBar;
