import { render, screen } from '@testing-library/react';
import { tabsection } from '../../../store/falcon9';
import Tabs from './Tabs';

test('renders Tabs correctly', () => {
  render(
    <Tabs
      data={tabsection}
      title={'merlin'}
      subtitle={'engines'}
      toggleState={0}
    />
  );

  const titleElements = screen.getAllByText(/merlin/i);
  const imgElements = screen.getAllByRole('img');

  expect(titleElements[0]).toBeInTheDocument();
  expect(imgElements[0]).toHaveClass('active-image');
  expect(imgElements[1]).not.toHaveClass('active-image');
});
