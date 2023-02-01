import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { links, mobileLinks } from '../../../store/sidebar-links';
import SideBar from './SideBar';

describe('renders SideBar section correctly', () => {
  
  test('renders links', () => {
    render(<SideBar links={links} mobileLinks={mobileLinks} active={true} />, {
      wrapper: MemoryRouter,
    });

    const length = links.length;
    const containerElement = screen.getByTestId('links-container');
    const liElements = screen.getAllByTestId('links-li');

    expect(containerElement).toBeInTheDocument();
    expect(containerElement).toHaveClass('SideBar__active');
    expect(liElements).toHaveLength(length);
    expect(liElements[0]).toHaveTextContent(/mission/i);
  });

  test('renders mobilelinks', () => {
    render(<SideBar links={links} mobileLinks={mobileLinks} active={true} />, {
      wrapper: MemoryRouter,
    });

    const length = mobileLinks.length;
    const liElements = screen.getAllByTestId('mobileLinks-li');

    expect(liElements).toHaveLength(length);
    expect(liElements[0]).toHaveTextContent(/falcon 9/i);
  });

});
