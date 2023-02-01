import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../elements/Nav/Nav';
import SideBar from '../SideBar/SideBar';
import logo from '../../../assets/logo.png';
import './Header.scss';

const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSideBar = () => {
    setSidebarActive(!sidebarActive);
  };

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <header className={`Header active ${show && 'hidden'}`}>
      <div className="Header__left">
        <div className="Header__left-logo">
          <Link to="/">
            <img src={logo} alt="logo"></img>
          </Link>
        </div>
        <div className="Header__left-nav">
          <Nav />
        </div>
      </div>
      <div className="Header__right">
        <ul>
          <li className="shop">
            <a
              target="_blank"
              href="https://spacex-shop.vercel.app/"
              rel="noreferrer"
            >
              shop
            </a>
          </li>
          <li>
            <div
              className="Header__right-openSideBar"
              onClick={() => toggleSideBar()}
              style={{ zIndex: '99999' }}
            >
              <i
                className={
                  sidebarActive ? 'fa-solid fa-times' : 'fa-solid fa-bars'
                }
                data-testid="icon"
              ></i>
            </div>
          </li>
        </ul>
      </div>
      {sidebarActive ? (
        <SideBar active={sidebarActive} setActive={setSidebarActive} />
      ) : null}
    </header>
  );
};

export default Header;
