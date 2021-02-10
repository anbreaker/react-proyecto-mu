import {useState} from 'react';

export const useForm = (initialStateForm = {}) => {
  const [formValues, setFormValues] = useState(initialStateForm);

  const reset = () => {
    setFormValues(initialStateForm);
  };

  const handleInputChange = ({target}) => {
    const {name, type, value, checked} = target;

    setFormValues({
      ...formValues,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return [formValues, handleInputChange, reset];
};
