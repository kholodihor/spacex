import { render, screen } from '@testing-library/react';
import tabsection from '../store/rideshare/tabsection';
import Rideshare from './Rideshare';

describe('Rideshare page test', () => {
  test('renders page correctly', () => {
    render(<Rideshare data={tabsection} />);

    const tabsElements = screen.getAllByTestId('tabs');
    const introTitle = screen.getByText(/smallsat rideshare program/i);

    expect(introTitle).toBeInTheDocument();
    expect(tabsElements).toHaveLength(tabsection.length);
    expect(tabsElements[0]).toHaveTextContent(/payload configurations/i);
  });
});