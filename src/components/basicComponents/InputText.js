import React from 'react';

export const InputText = props => {
  const { text } = props;

  return (
    <input
      type="text"
      name="text"
      className="form-control form-control-user"
      placeholder={text}
    />
  );
};
