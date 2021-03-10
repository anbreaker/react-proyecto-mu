import React from 'react';
import clsx from 'clsx';

export const Button = ({ children, startIcon, variant, ...props }) => {
  const classes = {
    primary: 'btn-primary btn-user btn-block',
    success: 'btn-success btn-user btn-block',
    warning: 'btn-warning btn-user btn-block',
    google: 'btn btn-google btn-user btn-block',
    alert: 'btn-google btn-user btn-block alert-error mb-3',
  };

  return (
    <button
      {...props}
      className={clsx(
        'btn',
        variant === 'primary' && classes.primary,
        variant === 'success' && classes.success,
        variant === 'warning' && classes.warning,
        variant === 'google' && classes.google,
        variant === 'alert' && classes.alert
      )}
      {...props}
    >
      {startIcon ? <i className={startIcon}></i> : ''}
      {children}
    </button>
  );
};
