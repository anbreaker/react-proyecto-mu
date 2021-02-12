import React from 'react';

export const InputMail = props => {
  const { text } = props;
  return (
    <input
      type="email"
      name="email"
      className="form-control form-control-user"
      aria-describedby="emailHelp"
      placeholder={text}
    />
  );
};
