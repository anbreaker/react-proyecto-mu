import React from 'react';

export const InputMail = props => {
  const { text, value, onChange, name } = props;
  return (
    <input
      {...props}
      className="form-control form-control-user"
      type="email"
      placeholder={text}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};
