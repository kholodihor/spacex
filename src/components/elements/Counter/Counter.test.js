import { render, screen } from '@testing-library/react';
import { counter } from '../../../store/falcon9';
import Counter from './Counter';

describe('Counter  test', () => {
  test('Counter renders', () => {
    render(<Counter isVisible={true} data={counter} />);

    const liElements = screen.getAllByRole('listitem');
    const counterPage = screen.queryByTestId('counter-page');

    expect(liElements).toHaveLength(3);
    expect(liElements[0]).toHaveTextContent(/total launches/i);
    expect(counterPage).toHaveClass('Counter');
  });
});
