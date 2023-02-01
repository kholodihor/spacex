import { render, screen } from '@testing-library/react';
import { tabsection } from '../../../../store/falcon9';
import TabContent from './TabContent';

test('renders TabContent correctly', () => {
  render(<TabContent data={tabsection} toggleState={0} />);

  const length = tabsection.length;
  const divElements = screen.getAllByTestId('tabs-div');

  expect(divElements).toHaveLength(length);
  expect(divElements[0]).toHaveClass('active-content');
  expect(divElements[1]).not.toHaveClass('active-content');
});
