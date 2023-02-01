import { render, screen } from '@testing-library/react';
import Performance from './Performance';

test('renders performance section correctly', () => {
  render(<Performance />);

  const headerElement = screen.getByText(/Unmatched Performance/i);
  const videoElement = screen.getByTestId('video');

  expect(headerElement).toBeInTheDocument();
  expect(videoElement).toBeInTheDocument();
});
