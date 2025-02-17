import { render, screen } from '@testing-library/react';
import { parallaxslide } from '../../../data/falcon9';
import ParallaxSlide from './ParallaxSlide';

describe('ParallaxSlide', () => {
  const mockData = [
    {
      img: 'test-image.jpg',
      text: 'Test Text',
      subtitle: 'Test Subtitle',
      title: 'Test Title',
      info: [
        { characteristic: 'Height', value: '100m' },
        { characteristic: 'Weight', value: '500kg' }
      ]
    }
  ];

  it('renders all slide components correctly', () => {
    render(<ParallaxSlide data={mockData} />);
    
    // Check main container
    expect(screen.getByTestId('parallax-slide')).toBeInTheDocument();
    expect(screen.getByTestId('parallax-container')).toBeInTheDocument();
    
    // Check slide content
    const slide = screen.getByTestId('slide-0');
    expect(slide).toBeInTheDocument();
    expect(slide).toHaveAttribute('aria-label', 'Slide 1: Test Title');
    
    // Check text content
    expect(screen.getByText('Test Text')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders specifications correctly', () => {
    render(<ParallaxSlide data={mockData} />);
    
    const specs = screen.getAllByTestId('slide-specification');
    expect(specs).toHaveLength(mockData[0].info.length);
    
    // Check each specification
    expect(screen.getByText('Height')).toBeInTheDocument();
    expect(screen.getByText('100m')).toBeInTheDocument();
    expect(screen.getByText('Weight')).toBeInTheDocument();
    expect(screen.getByText('500kg')).toBeInTheDocument();
  });

  it('renders with real data from parallaxslide', () => {
    render(<ParallaxSlide data={parallaxslide} />);
    
    // Check that all slides are rendered
    parallaxslide.forEach((_, index) => {
      expect(screen.getByTestId(`slide-${index}`)).toBeInTheDocument();
    });

    // Check specifications count
    const specs = screen.getAllByTestId('slide-specification');
    const totalSpecs = parallaxslide.reduce((sum, slide) => sum + slide.info.length, 0);
    expect(specs).toHaveLength(totalSpecs);
  });
});
