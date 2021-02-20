import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setRememberCheckAction,
  removeRememberCheckAction,
} from '../../store/actions/remember';
import { getRemember } from '../../store/selectors';

export const UniqueCheckbox = ({ text }) => {
  const dispatch = useDispatch();
  const { check } = useSelector(getRemember);

  const handleremember = () => {
    if (check) dispatch(removeRememberCheckAction());
    else dispatch(setRememberCheckAction());
  };

  return (
    <div className="form-group">
      <div className="custom-control custom-checkbox small">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customCheck"
          onClick={handleremember}
        />
        <label className="custom-control-label" htmlFor="customCheck">
          {text}
        </label>
      </div>
    </div>
  );
};
