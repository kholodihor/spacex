import React from 'react';
import './Loading.scss';

const Loading = () => {
  return (
    <div className="Loading" data-testid="loading-container">
      <div className="Loading__spinner" data-testid="loading-spinner"></div>
      <p>Loading SpaceX...</p>
    </div>
  );
};

export default Loading;
