import React from 'react';

export const InputMail = props => {
  const { text, value, onChange, name } = props;
  return (
    <input
      type="email"
      name={name}
      className="form-control form-control-user"
      aria-describedby="emailHelp"
      placeholder={text}
      value={value}
      onChange={onChange}
    />
  );
};
