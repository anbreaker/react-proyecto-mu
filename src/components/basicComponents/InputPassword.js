import React from 'react';

export const InputPassword = props => {
  const { text, value, onChange, name } = props;
  return (
    <input
      {...props}
      type="password"
      name={name}
      className="form-control form-control-user"
      placeholder={text}
      value={value}
      onChange={onChange}
    />
  );
};
