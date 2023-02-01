import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('renders Header correctly', () => {
  test('renders links', () => {
    render(<Header sidebarActive={false} />, {
      wrapper: MemoryRouter,
    });

    const logoElement = screen.getByAltText('logo');
    const iconElement = screen.getByTestId('icon');
    const sidebarElement = screen.queryByTestId('sidebar');

    expect(logoElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
    expect(sidebarElement).toBeNull();
  });
});
