import { render, screen } from '@testing-library/react';
import { tabsection } from '../../../../store/falcon9';
import TabNav from './TabNav';

test('renders TabNav correctly', () => {
  render(<TabNav data={tabsection} toggleState={0} />);

  const length = tabsection.length;
  const buttonElements = screen.getAllByRole('button');

  expect(buttonElements).toHaveLength(length);
  expect(buttonElements[0]).toHaveTextContent(/sea level/i);
  expect(buttonElements[0]).toHaveClass('active');
  expect(buttonElements[1]).not.toHaveClass('active');
});
