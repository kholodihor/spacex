import {render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { links } from '../../../store/nav';
import Nav from './Nav';

describe('renders Nav section correctly', () => {

  test('renders links correctly', () => {
    render(<Nav links={links} />, {
      wrapper: MemoryRouter,
    });

    const length = links.length;
    const containerElement = screen.getByTestId('links-container');
    const starlinkElement = screen.getByText(/starlink/i);
    const linkElements = screen.getAllByTestId('links');

    expect(containerElement).toBeInTheDocument();
    expect(linkElements).toHaveLength(length);
    expect(linkElements[0]).toHaveTextContent(/falcon 9/i);
    expect(starlinkElement).toBeInTheDocument();
    expect(starlinkElement).toHaveAttribute('href','https://starlink-blond.vercel.app/');
  });
});
