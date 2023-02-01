import { render, screen } from '@testing-library/react';
import Landing from './Landing';

test('renders landing section correctly', () => {
  render(<Landing />);

  const headerElement = screen.getByText(/Landing on Mars/i);
  const buttonElement = screen.getByText(/watch simulation/i);
  const imageElement = screen.getByRole('img');
  const linkElement = screen.getByRole('link');

  expect(headerElement).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
});
