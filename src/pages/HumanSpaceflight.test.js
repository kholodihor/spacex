import { render, screen } from '@testing-library/react';
import planets from '../store/planets';
import HumanSpaceflight from './HumanSpaceflight';

describe('HumanSpaceflight page test', () => {
  test('renders page correctly', () => {
    render(<HumanSpaceflight planets={planets} />);

    const planetElements = screen.getAllByTestId('planet');
    const introTitle = screen.getByText(/human spaceflight/i);

    expect(introTitle).toBeInTheDocument();
    expect(planetElements).toHaveLength(planets.length);
    expect(planetElements[0]).toHaveTextContent(/earth orbit/i);
    expect(screen.getByTestId('outro')).toBeInTheDocument();
  });
});
