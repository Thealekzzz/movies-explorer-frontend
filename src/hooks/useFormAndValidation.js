import { useState, useCallback } from 'react';
import { WRONG_EMAIL } from '../consts/errors';

function isEmailValid(email) {
  return /\S+@\S+\.\S\S+/.test(email);
}

export function useFormAndValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [types, setTypes] = useState({});
  const [areInputsVisited, setAreInputsVisited] = useState({});
  const [isValid, setIsValid] = useState(false);

  const isFormValid = (e, values) => {
    const basicValidation = e.target.closest('form').checkValidity();

    return basicValidation && Object
      .entries(types)
      .filter(([, type]) => type === 'email')
      .every(([name]) => {
        const fieldValue = values[name];

        return isEmailValid(fieldValue);
      })
  };

  const handleChange = (e) => {
    const { name, type, value } = e.target
    const newValues = { ...values, [name]: value };

    setValues(newValues);
    setTypes({ ...types, [name]: type });

    if (type === 'email') {
      setErrors({
        ...errors, [name]: areInputsVisited[name]
          ? (isEmailValid(value) ? "" : WRONG_EMAIL)
          : ""
      });
    } else {
      setErrors({
        ...errors, [name]: areInputsVisited[name]
          ? e.target.validationMessage
          : ""
      });
    }

    setIsValid(isFormValid(e, newValues));
  };

  const handleBlur = (e) => {
    const { name, type, value } = e.target;
    setAreInputsVisited({ ...areInputsVisited, [name]: true });
    
    if (type === 'email') {
      setErrors({...errors, [name]: isEmailValid(value) ? "" : WRONG_EMAIL});

    } else {
      setErrors({...errors, [name]: e.target.validationMessage});
    }
  };

  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
  }, [setValues, setErrors, setIsValid]);

  return { values, handleChange, handleBlur, errors, isValid, resetForm, setValues, setIsValid };
}

