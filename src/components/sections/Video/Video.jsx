import React, { useState } from 'react';
import Modal from '../../elements/Modal/Modal';
import Title from '../../elements/Title/Title';
import './Video.scss';

const Video = ({ webpSrc, jpgSrc, videoSrc, title }) => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <section className="Video">
      <div className="Video__title">
        <Title title={title} subtitle={'video'} />
      </div>

      <div className="Video__box">
        <picture data-testid="picture">
          <source srcSet={webpSrc} alt="falcon9 launch" type="image/webp" />
          <img className="video__image" src={jpgSrc} alt="falcon9 launch" />
        </picture>
        <button
          className="Video__link"
          onClick={() => setModalActive(true)}
          data-testid="button"
        >
          <i className="fa-solid fa-play"></i>
        </button>
      </div>
      {modalActive ?(
        <Modal
          videoSrc={videoSrc}
          className="Modal"
          active={modalActive}
          setActive={setModalActive}
          data-testid="modal"
        />
      ) : null}
    </section>
  );
};

export default Video;
