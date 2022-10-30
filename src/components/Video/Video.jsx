import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import Title from '../Title/Title';
import PropTypes from 'prop-types';
import './Video.scss';

const Video = ({ webpSrc, jpgSrc, videoSrc, title }) => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <section className="Video">
      <div className="Video__title">
        <Title title={title} subtitle={'video'} />
      </div>

      <div className="Video__box">
        <picture>
          <source srcSet={webpSrc} alt="falcon9 launch" type="image/webp" />
          <img className="video__image" src={jpgSrc} alt="falcon9 launch" />
        </picture>
        <button className="Video__link" onClick={() => setModalActive(true)}>
          <i className="fa-solid fa-play"></i>
        </button>
      </div>
      <Modal
        videoSrc={videoSrc}
        className="Modal"
        active={modalActive}
        setActive={setModalActive}
      />
    </section>
  );
};

Video.propTypes = {
  title: PropTypes.string,
  webpSrc: PropTypes.string,
  jpgSrc: PropTypes.string,
  videoSrc: PropTypes.string,
};

Video.defaultProps = {
  title: '',
  webpSrc: '',
  jpgSrc: '',
  videoSrc: '',
};

export default Video;
