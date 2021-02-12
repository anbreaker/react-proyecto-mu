import React from 'react';
import clsx from 'clsx';

const Button = ({ children, startIcon, variant, ...props }) => {
  const classes = {
    primary: 'btn-primary btn-user btn-block',
    google: 'btn-google btn-user btn-block',
  };
  return (
    <button
      className={clsx(
        'btn',
        variant === 'primary' && classes.primary,
        variant === 'google' && classes.google
      )}
      {...props}
    >
      {startIcon ? <i className={startIcon}></i> : ''}
      {children}
    </button>
  );
};

export default Button;
