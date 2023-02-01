import { render, screen } from '@testing-library/react';
import cards from '../../../store/rideshare/cards';
import Advantages from './Advantages';

test('renders advantages section', () => {
  render(<Advantages cards={cards} />);

  const cardElements = screen.getAllByTestId('card');
  const iconElements = screen.getAllByTestId('icon');
  const spanElements = screen.getAllByTestId('span');

  expect(cardElements).toHaveLength(3);
  expect(cardElements[1]).toBeInTheDocument();
  expect(iconElements[1]).toBeInTheDocument();
  expect(iconElements[1]).toHaveClass(cards[1].icon);
  expect(spanElements[1]).toBeInTheDocument();
  expect(spanElements[1]).toHaveTextContent(/SCHEDULE CERTAINTY/i);
});
