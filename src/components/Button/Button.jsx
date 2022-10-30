import React from 'react';
import './Button.scss'

const Button = (props) => {
  return (
    <button className="Button" style={props.style} disabled={props.disabled}>
      <span> {props.title}</span>
    </button>
  );
};

export default Button;
