import { render, screen, fireEvent } from '@testing-library/react';
import Input from './Input';

const placeholder = 'Your Name';

describe('input', () => {

  test('renders input correctly', () => {
    render(<Input placeholder={placeholder} />);

    const inputElement = screen.getByPlaceholderText(/your name/i);

    expect(inputElement).toBeInTheDocument();
  });

  test('input change works', () => {
    render(<Input />);

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Cold' },
    });
    
    expect(screen.getByRole('textbox')).toHaveValue('Cold');
  });
});
