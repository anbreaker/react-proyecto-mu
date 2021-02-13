import React from 'react';

export const UniqueCheckbox = ({ text }) => {
  return (
    <div className="form-group">
      <div className="custom-control custom-checkbox small">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customCheck"
        />
        <label className="custom-control-label" htmlFor="customCheck">
          {text}
        </label>
      </div>
    </div>
  );
};
