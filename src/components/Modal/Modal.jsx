import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';

const Modal = ({ active, setActive, videoSrc }) => {
  return (
    <>
      {active ? (
        <div
          className={active ? 'Modal Modal__active' : 'Modal'}
          onClick={() => setActive(false)}
        >
          <div className="Modal__content" onClick={(e) => e.stopPropagation()}>
            <div className="Modal__content-video">
              <iframe
                className="Modal__content-video--embed"
                title="falcon 9 launch"
                src={videoSrc}
                frameBorder="0"
              ></iframe>
            </div>
            <div className="Modal__close" onClick={() => setActive(false)}>
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

Modal.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func,
  videoSrc: PropTypes.string,
};

Modal.defaultProps = {
  active: false,
  setActive: () => {},
  videoSrc: '',
};

export default Modal;
