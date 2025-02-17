import { render, screen } from '@testing-library/react';
import { counter } from '../../../data/falcon9';
import Counter from './Counter';

describe('Counter Component', () => {
  const mockData = [
    { end: 100, title: 'Total Launches' },
    { end: 50, title: 'Landing Success' },
    { end: 25, title: 'Reflown Missions' }
  ];

  test('renders counter section with correct class', () => {
    render(<Counter data={mockData} />);
    const counterSection = screen.getByTestId('counter-page');
    expect(counterSection).toHaveClass('Counter');
  });

  test('renders all counter items', () => {
    render(<Counter data={mockData} />);
    const counterItems = screen.getAllByRole('listitem');
    expect(counterItems).toHaveLength(mockData.length);
  });

  test('renders counter titles correctly', () => {
    render(<Counter data={mockData} />);
    mockData.forEach(item => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  test('renders with VisibilitySensor', () => {
    render(<Counter data={mockData} />);
    const visibilitySensor = screen.getByTestId('visibility-sensor');
    expect(visibilitySensor).toBeInTheDocument();
  });

  test('renders counter list inside VisibilitySensor', () => {
    render(<Counter data={mockData} />);
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(mockData.length);
  });

  test('handles empty data array', () => {
    render(<Counter data={[]} />);
    const listItems = screen.queryAllByRole('listitem');
    expect(listItems).toHaveLength(0);
  });
});
