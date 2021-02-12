import React from 'react';

export const InputPassword = props => {
  const { text } = props;
  return (
    <input
      type="password"
      name="password"
      className="form-control form-control-user"
      id="exampleInputPassword"
      placeholder={text}
    />
  );
};
