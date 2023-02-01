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
  return (
    <ul className="Footer">
      <li>
        <span data-testid="copy">SpaceX &copy; 2022</span>
      </li>
      {links.map((link, index) => (
        <li data-testid="li">
          <span>{link}</span>
        </li>
      ))}
    </ul>
  );
}

export default Footer;
