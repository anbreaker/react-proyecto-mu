import React from 'react';
import clsx from 'clsx';

export const Button = ({ children, startIcon, variant, ...props }) => {
  const classes = {
    primary: 'btn-primary btn-user btn-block',
    google: 'btn-google btn-user btn-block',
    facebook: 'btn-facebook btn-user btn-block',
    alert: 'btn-google btn-user btn-block alert-error mb-3',
  };
  return (
    <button
      {...props}
      className={clsx(
        'btn',
        variant === 'primary' && classes.primary,
        variant === 'alert' && classes.alert
      )}
      {...props}
    >
      {startIcon ? <i className={startIcon}></i> : ''}
      {children}
    </button>
  );
};
