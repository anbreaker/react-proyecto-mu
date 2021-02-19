import React from 'react';

export const InputText = props => {
  const { text, value, onChange, name } = props;

  return (
    <input
      {...props}
      aria-describedby="enterText"
      type="text"
      name={name}
      className="form-control form-control-user"
      placeholder={text}
      value={value}
      onChange={onChange}
    />
  );
};
