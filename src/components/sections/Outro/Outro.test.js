import { render, screen } from '@testing-library/react';
import Outro from './Outro';

test('renders outro section correctly', () => {
  render(<Outro />);

  const buttonElement = screen.getByText(/download users guide/i);
  const linkElement = screen.getByRole('link');

  expect(buttonElement).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
});
