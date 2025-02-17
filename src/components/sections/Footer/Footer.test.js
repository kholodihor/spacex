import { render, screen } from '@testing-library/react';
import { links } from './Footer';
import Footer from './Footer';

describe('Footer Component', () => {
  const renderFooter = () => render(<Footer />);

  test('renders copyright notice', () => {
    renderFooter();
    const currentYear = new Date().getFullYear();
    const copyright = screen.getByText(new RegExp(`SpaceX ${currentYear}`));
    expect(copyright).toBeInTheDocument();
  });

  test('renders all social media and policy links', () => {
    renderFooter();
    links.forEach(link => {
      const linkElement = screen.getByText(link);
      expect(linkElement).toBeInTheDocument();
    });
  });

  test('renders correct number of list items', () => {
    renderFooter();
    const listItems = screen.getAllByRole('listitem');
    // +1 for copyright item
    expect(listItems).toHaveLength(links.length + 1);
  });

  test('renders with correct structure', () => {
    renderFooter();
    const footer = screen.getByRole('list');
    expect(footer).toHaveClass('Footer');
  });

  test('renders links in correct order', () => {
    renderFooter();
    const listItems = screen.getAllByRole('listitem');
    
    // Skip first item (copyright)
    const linkTexts = listItems.slice(1).map(item => item.textContent);
    expect(linkTexts).toEqual(links);
  });
});
