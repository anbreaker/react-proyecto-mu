import { useState } from 'react';

/**
 * @description Custon hook change state for input in to form
 * @param {*} initialStateForm
 * @returns [formValues, handleInputChange, setFormValues, reset] !! Array
 */
export const useForm = (initialStateForm = {}) => {
  const [formValues, setFormValues] = useState(initialStateForm);

  const reset = () => {
    setFormValues(initialStateForm);
  };

  const handleInputChange = ({ target }) => {
    const { name, type, value, checked } = target;

    setFormValues({
      ...formValues,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const setFieldValue = (key, value) => {
    console.log(key, value);
    console.log({ ...formValues, [key]: value });
    setFormValues({ ...formValues, [key]: value });
  };

  return [formValues, handleInputChange, setFormValues, reset, setFieldValue];
};
