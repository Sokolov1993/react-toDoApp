import React from 'react';
import ButtonStyles from './Button.module.scss';

const Button = ({ children, onClick, type, isDisabled }) => {
  return (
    <button
      onClick={onClick}
      className={ButtonStyles.button}
      type={type}
      disabled={!isDisabled && true}
    >
      {children}
    </button>
  );
};

export default Button;
