import { render, screen } from '@testing-library/react';
import { tabsection } from '../../../../data/falcon9';
import TabContent from './TabContent';

describe('TabContent', () => {
  const mockData = [
    {
      tab: 'Tab 1',
      text: 'Content 1',
      info: [
        { characteristic: 'Feature 1', value: 'Value 1' },
        { characteristic: 'Feature 2', value: 'Value 2' }
      ]
    },
    {
      tab: 'Tab 2',
      text: 'Content 2',
      info: [
        { characteristic: 'Feature 3', value: 'Value 3' }
      ]
    }
  ];

  it('renders all content sections correctly', () => {
    render(<TabContent data={mockData} toggleState={0} />);
    const contentSections = screen.getAllByTestId('tabs-div');

    expect(contentSections).toHaveLength(mockData.length);
    expect(contentSections[0]).toHaveClass('active-content');
    expect(contentSections[1]).not.toHaveClass('active-content');
  });

  it('displays correct content based on toggleState', () => {
    render(<TabContent data={mockData} toggleState={1} />);
    const contentSections = screen.getAllByTestId('tabs-div');

    expect(contentSections[0]).not.toHaveClass('active-content');
    expect(contentSections[1]).toHaveClass('active-content');
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });

  it('renders list items correctly', () => {
    render(<TabContent data={mockData} toggleState={0} />);
    const listItems = screen.getAllByTestId('tabs-li');

    expect(listItems).toHaveLength(2);
    expect(screen.getByText('Feature 1')).toBeInTheDocument();
    expect(screen.getByText('Value 1')).toBeInTheDocument();
    expect(screen.getByText('Feature 2')).toBeInTheDocument();
    expect(screen.getByText('Value 2')).toBeInTheDocument();
  });

  it('renders with real tabsection data', () => {
    render(<TabContent data={tabsection} toggleState={0} />);
    const contentSections = screen.getAllByTestId('tabs-div');

    expect(contentSections).toHaveLength(tabsection.length);
    expect(contentSections[0]).toHaveClass('active-content');
    expect(contentSections[1]).not.toHaveClass('active-content');

    // Verify some content from the real data
    const listItems = screen.getAllByTestId('tabs-li');
    expect(listItems.length).toBeGreaterThan(0);
  });

  it('handles empty data gracefully', () => {
    render(<TabContent data={[]} />);
    const contentSections = screen.queryAllByTestId('tabs-div');
    expect(contentSections).toHaveLength(0);
  });

  it('handles missing info array gracefully', () => {
    const dataWithoutInfo = [{ tab: 'Tab', text: 'Content' }];
    render(<TabContent data={dataWithoutInfo} toggleState={0} />);
    
    const contentSections = screen.getAllByTestId('tabs-div');
    expect(contentSections).toHaveLength(1);
    expect(screen.getByText('Content')).toBeInTheDocument();
    expect(screen.queryAllByTestId('tabs-li')).toHaveLength(0);
  });
});
