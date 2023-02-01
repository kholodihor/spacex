import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Video from './Video';

const jpgSrc = 'https://img.youtube.com/vi/78ATfCaBn6E/maxresdefault.jpg';
const webpSrc =
  'https://img.youtube.com/vi_webp/78ATfCaBn6E/maxresdefault.webp';
const videoSrc = 'https://www.youtube.com/embed/78ATfCaBn6E';
const title = 'spacex launch';

describe('video section test', () => {
  test('renders video section correctly', () => {
    render(
      <Video
        title={title}
        webpSrc={webpSrc}
        jpgSrc={jpgSrc}
        videoSrc={videoSrc}
      />
    );

    const headerElement = screen.getByText(/spacex launch/i);
    const buttonElement = screen.getByTestId('button');
    const modalElement = screen.queryByTestId('modal');
    const pictureElement = screen.queryByTestId('picture');

    expect(headerElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
    expect(pictureElement).toBeInTheDocument();
    expect(modalElement).toBeNull();
  });
});
