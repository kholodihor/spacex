import { render, screen } from '@testing-library/react';
import Title from './Title';

test.only('renders home section', () => {
  render(<Title title="Starlink Mission" subtitle="recent launch" />);

  const titleElement = screen.getByRole('heading', { level: 1 });
  const subtitleElement = screen.getByTestId('subtitle');

  expect(titleElement).toBeInTheDocument();
  expect(titleElement).toHaveTextContent(/Starlink Mission/i);
  expect(subtitleElement).toBeInTheDocument();
  expect(subtitleElement).toHaveTextContent(/recent launch/i);
});
