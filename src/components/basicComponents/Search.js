import React from 'react';
import { useSelector } from 'react-redux';

import { InputText } from './InputText';
import { useForm } from '../../hooks/useForm';
import { Button } from './Button';
import { getMsgError } from '../../store/selectors';

export const Search = ({ ...props }) => {
  const { handlerOnFocus, text } = props;

  const { loading } = useSelector(getMsgError);

  const [formValues, handleInputChange] = useForm({
    search: '',
  });

  const { search } = formValues;

  return (
    <>
      <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
        <div className="input-group">
          <InputText
            text={text}
            name="search"
            value={search}
            onFocus={handlerOnFocus}
            onChange={handleInputChange}
          />

          <div className="input-group-append">
            <Button
              type="submit"
              variant="primary"
              startIcon="fas fa-search fa-sm"
              disabled={loading}
            />
          </div>
        </div>
      </form>
    </>
  );
};
