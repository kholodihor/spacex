import { render, screen } from '@testing-library/react';
import sections from '../data/homepage.js';
import HomePage from './HomePage';

describe('HomePage test', () => {
  test('renders  sections correctly', () => {
    render(<HomePage sections={sections} />);

    const sectionElements = screen.getAllByTestId('section');
    const buttonElements = screen.getAllByRole('button');

    expect(sectionElements).toHaveLength(sections.length);
    expect(buttonElements).toHaveLength(sections.length);
    expect(sectionElements[0]).toHaveTextContent(/starlink mission/i);
  });
});
