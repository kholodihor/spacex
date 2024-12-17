import React from 'react';
import './Loading.scss';

const Loading = () => {
  return (
    <div className="Loading">
      <div className="Loading__spinner"></div>
      <p>Loading SpaceX...</p>
    </div>
  );
};

export default Loading;
