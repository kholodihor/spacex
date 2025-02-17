import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header Component', () => {
  const renderHeader = () => {
    return render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  };

  beforeEach(() => {
    // Mock window scroll events
    Object.defineProperty(window, 'scrollY', {
      value: 0,
      writable: true
    });
  });

  test('renders header with logo and navigation', () => {
    renderHeader();
    
    expect(screen.getByRole('banner')).toHaveClass('Header', 'active');
    expect(screen.getByRole('img', { name: /logo/i })).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  test('renders shop and account links', () => {
    renderHeader();
    
    const links = screen.getAllByRole('link');
    expect(links.some(link => link.textContent.toLowerCase().includes('shop'))).toBeTruthy();
    expect(links.some(link => link.textContent.toLowerCase().includes('account'))).toBeTruthy();
  });

  test('toggles sidebar when menu icon is clicked', async () => {
    renderHeader();
    
    const menuButton = screen.getByTestId('icon');
    await userEvent.click(menuButton);
    
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    
    await userEvent.click(menuButton);
    expect(screen.queryByTestId('sidebar')).not.toBeInTheDocument();
  });

  test('hides header on scroll down and shows on scroll up', () => {
    renderHeader();
    const header = screen.getByRole('banner');
    
    // Simulate scroll down
    act(() => {
      window.scrollY = 100;
      window.dispatchEvent(new Event('scroll'));
    });
    expect(header).not.toHaveClass('hidden');

    // Simulate scroll up
    act(() => {
      window.scrollY = 50;
      window.dispatchEvent(new Event('scroll'));
    });
    expect(header).toHaveClass('hidden');
  });

  test('renders header with correct structure', () => {
    renderHeader();
    
    expect(screen.getByTestId('header-left')).toBeInTheDocument();
    expect(screen.getByTestId('header-right')).toBeInTheDocument();
    expect(screen.getByTestId('header-logo')).toBeInTheDocument();
    expect(screen.getByTestId('header-nav')).toBeInTheDocument();
  });
});

