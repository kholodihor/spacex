import { render, screen } from '@testing-library/react';
import Intro from './Intro';

const title = 'falcon9';
const subtitle = 'First Orbital Class Rocket capable of reflight';
const background = '../../assets/falcon9/background.webp';

test('renders intro section correctly', () => {
  render(<Intro title={title} subtitle={subtitle} background={background} />);

  const titleElement = screen.getByText(/falcon9/i);
  const subtitleElement = screen.getByRole('heading', { level: 3 });
  const buttonElement = screen.queryByRole('button');

  expect(titleElement).toBeInTheDocument();
  expect(subtitleElement).toHaveTextContent(/First Orbital Class Rocket capable of reflight/i)
  expect(buttonElement).not.toBeInTheDocument();
});
