import { render, screen } from '@testing-library/react';
import Inspace from './Inspace';

test('renders inspace section correctly', () => {
  render(<Inspace />);

  const headerElement = screen.getByText(/taking humans to space/i);
  const buttonElement = screen.getByText(/learn more/i);
  const imageElement = screen.getByRole('img');

  expect(headerElement).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});
