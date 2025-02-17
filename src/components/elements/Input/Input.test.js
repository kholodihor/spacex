import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';

describe('Input Component', () => {
  const defaultProps = {
    label: 'Username',
    placeholder: 'Enter username',
    type: 'text',
    value: '',
    onChange: jest.fn()
  };

  test('renders input with label', () => {
    render(<Input {...defaultProps} />);
    const inputElement = screen.getByLabelText(defaultProps.label);
    expect(inputElement).toBeInTheDocument();
    expect(screen.getByText(defaultProps.label)).toBeInTheDocument();
  });

  test('renders input with placeholder', () => {
    render(<Input {...defaultProps} />);
    const inputElement = screen.getByPlaceholderText(defaultProps.placeholder);
    expect(inputElement).toBeInTheDocument();
  });

  test('handles user input correctly', async () => {
    const onChange = jest.fn();
    render(<Input {...defaultProps} onChange={onChange} />);
    
    const inputElement = screen.getByRole('textbox');
    await userEvent.type(inputElement, 'test-user');
    
    expect(onChange).toHaveBeenCalledTimes(9); // 'test-user' is 9 characters
    expect(inputElement).toBeInTheDocument();
  });

  test('renders different input types', () => {
    const types = ['text', 'email', 'password', 'number'];
    
    types.forEach(type => {
      render(<Input {...defaultProps} type={type} />);
      const input = screen.getByLabelText(defaultProps.label);
      expect(input).toHaveAttribute('type', type);
      cleanup();
    });
  });

  test('associates label with input using htmlFor', () => {
    render(<Input {...defaultProps} />);
    const label = screen.getByText(defaultProps.label);
    const input = screen.getByLabelText(defaultProps.label);
    
    expect(label).toHaveAttribute('for', input.id);
    expect(input).toHaveAttribute('id', input.id);
  });

  test('handles empty props gracefully', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text'); // default type
  });
});
