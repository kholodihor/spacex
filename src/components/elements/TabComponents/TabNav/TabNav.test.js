import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { tabsection } from '../../../../store/falcon9';
import TabNav from './TabNav';

describe('TabNav', () => {
  const mockData = [
    { tab: 'Tab 1', text: 'Content 1' },
    { tab: 'Tab 2', text: 'Content 2' }
  ];

  it('renders all tabs correctly', () => {
    render(<TabNav data={mockData} toggleState={0} />);
    const buttons = screen.getAllByRole('button');

    expect(buttons).toHaveLength(mockData.length);
    expect(buttons[0]).toHaveTextContent('Tab 1');
    expect(buttons[1]).toHaveTextContent('Tab 2');
  });

  it('applies correct active class based on toggleState', () => {
    render(<TabNav data={mockData} toggleState={1} />);
    const buttons = screen.getAllByRole('button');

    expect(buttons[0]).not.toHaveClass('active');
    expect(buttons[1]).toHaveClass('active');
  });

  it('calls toggleTab with correct index when clicked', async () => {
    const mockToggleTab = jest.fn();
    render(
      <TabNav 
        data={mockData} 
        toggleState={0} 
        toggleTab={mockToggleTab}
      />
    );

    const buttons = screen.getAllByRole('button');
    await userEvent.click(buttons[1]);

    expect(mockToggleTab).toHaveBeenCalledTimes(1);
    expect(mockToggleTab).toHaveBeenCalledWith(1);
  });

  it('renders with real tabsection data', () => {
    render(<TabNav data={tabsection} toggleState={0} />);
    const buttons = screen.getAllByRole('button');

    expect(buttons).toHaveLength(tabsection.length);
    expect(buttons[0]).toHaveTextContent(/sea level/i);
    expect(buttons[0]).toHaveClass('active');
    expect(buttons[1]).not.toHaveClass('active');
  });

  it('handles empty data gracefully', () => {
    render(<TabNav data={[]} />);
    const buttons = screen.queryAllByRole('button');
    expect(buttons).toHaveLength(0);
  });
});
