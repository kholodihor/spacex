import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  test('renders button with default state', () => {
    render(<Button />);
    const buttonElement = screen.getByRole('button');
    const buttonText = screen.getByText('');
    
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('Button');
    expect(buttonElement).not.toBeDisabled();
    expect(buttonText).toBeInTheDocument();
  });
  
  test('renders button with custom title', () => {
    const title = 'Custom Button';
    render(<Button title={title} />);
    
    const buttonElement = screen.getByRole('button');
    const buttonText = screen.getByText(title);
    
    expect(buttonElement).toHaveTextContent(title);
    expect(buttonText).toBeInTheDocument();
  });

  test('applies custom styles correctly', () => {
    const customStyle = { 
      backgroundColor: 'blue',
      color: 'white',
      padding: '10px'
    };
    render(<Button style={customStyle} />);
    
    const buttonElement = screen.getByRole('button');
    Object.entries(customStyle).forEach(([property, value]) => {
      expect(buttonElement).toHaveStyle({ [property]: value });
    });
  });

  test('handles disabled state correctly', () => {
    const title = 'Disabled Button';
    render(<Button disabled={true} title={title} />);
    
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeDisabled();
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  test('renders with multiple props combined', () => {
    const props = {
      title: 'Test Button',
      style: { margin: '10px' },
      disabled: true
    };
    render(<Button {...props} />);
    
    const buttonElement = screen.getByRole('button');
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(buttonElement).toHaveStyle(props.style);
    expect(buttonElement).toBeDisabled();
  });
});
