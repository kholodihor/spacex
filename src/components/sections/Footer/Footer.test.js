import { render, screen } from '@testing-library/react';
import { links } from './Footer';
import Footer from './Footer';

test('renders footer', () => {
  render(<Footer />);

  const length = links.length;
  const liElements = screen.getAllByTestId('li');
  const copyElement = screen.getByTestId('copy');

  expect(copyElement).toBeInTheDocument();
  expect(liElements).toHaveLength(length);
});
