import React from 'react';
import clsx from 'clsx';

export const InputText = ({
  text,
  value,
  onChange,
  name,
  addClasses,
  ...props
}) => {
  return (
    <input
      {...props}
      aria-describedby="enterText"
      className={clsx('form-control', 'form-control-user', addClasses)}
      type="text"
      name={name}
      placeholder={text}
      value={value || ''}
      onChange={onChange}
    />
  );
};
