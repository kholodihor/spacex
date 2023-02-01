import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('button', () => {
  test('renders button correctly', () => {
    render(<Button />);

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toBeInTheDocument();
  });
  
  test('renders button with props', () => {
    render(<Button title="rewatch" style={{ color: 'red' }} disabled={true} />);

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toHaveTextContent(/rewatch/i);
    expect(buttonElement).toHaveStyle({ color: 'red' });
    expect(buttonElement).toBeDisabled();
  });
});
