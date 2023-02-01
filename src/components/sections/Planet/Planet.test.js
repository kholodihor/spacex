import { render, screen } from '@testing-library/react';
import Planet from './Planet';

const title = 'mars & beyond';
const text = 'THE ROAD TO MAKING HUMANITY MULTIPLANETARY';
const planet = '../../assets/explore/mars.png';

test('renders planet section correctly', () => {
  render(<Planet planet={planet} text={text} title={title} />);

  const headerElement = screen.getByText(/mars & beyond/i);
  const textElement = screen.getByTestId('planet-text');
  const imageElement = screen.getByRole('img');
  const buttonElement = screen.getByRole('button');

  expect(headerElement).toBeInTheDocument();
  expect(textElement).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
  expect(textElement).toHaveTextContent(/THE ROAD TO MAKING HUMANITY MULTIPLANETARY/i);
});
