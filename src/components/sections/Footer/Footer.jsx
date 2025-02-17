import React from 'react';
import './Footer.scss';

export const links = [
  'Twitter',
  'Youtube',
  'Instagram',
  'Flickr',
  'LinkedIn',
  'privacy policy',
  'suppliers',
];

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <ul className="Footer">
        <li>
          <span>SpaceX {currentYear}</span>
        </li>
        {links.map((link, index) => (
          <li key={index}>
            <span>{link}</span>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
