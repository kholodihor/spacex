import { render, screen } from '@testing-library/react';
import Loading from './Loading';

describe('Loading Component', () => {
  test('renders loading spinner', () => {
    render(<Loading />);
    const spinnerElement = screen.getByTestId('loading-spinner');
    expect(spinnerElement).toBeInTheDocument();
    expect(spinnerElement).toHaveClass('Loading__spinner');
  });

  test('renders loading text', () => {
    render(<Loading />);
    const loadingText = screen.getByText(/loading spacex/i);
    expect(loadingText).toBeInTheDocument();
  });

  test('renders with correct structure', () => {
    render(<Loading />);
    const loadingContainer = screen.getByTestId('loading-container');
    const spinner = screen.getByTestId('loading-spinner');
    const text = screen.getByText(/loading spacex/i);

    expect(loadingContainer).toHaveClass('Loading');
    expect(spinner).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
