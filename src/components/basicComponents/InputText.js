import React from 'react';

export const InputText = props => {
  const { text, value, onChange, name } = props;

  return (
    <input
      {...props}
      aria-describedby="enterText"
      className="form-control form-control-user"
      type="text"
      name={name}
      placeholder={text}
      value={value || ''}
      onChange={onChange}
    />
  );
};
