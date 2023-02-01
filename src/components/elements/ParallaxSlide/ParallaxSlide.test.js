import { render, screen } from '@testing-library/react';
import { parallaxslide } from '../../../store/falcon9';
import ParallaxSlide from './ParallaxSlide';

test('renders parallaxSlide section correctly', () => {
  render(<ParallaxSlide data={parallaxslide} />);

  const length = parallaxslide[1].info.length;
  const headerElement = screen.getByText(/Overview/i);
  const liElements = screen.getAllByTestId('li');

  expect(headerElement).toBeInTheDocument();
  expect(liElements).toHaveLength(length);
});
