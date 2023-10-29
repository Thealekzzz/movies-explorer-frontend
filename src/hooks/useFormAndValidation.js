import { useState, useCallback } from 'react';
import { wrongEmail } from '../consts/errors';

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

export function useFormAndValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [areInputsVisited, setAreInputsVisited] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, type, value } = e.target
    setValues({ ...values, [name]: value });

    if (type === 'email') {
      setErrors({
        ...errors, [name]: areInputsVisited[name]
          ? (isValidEmail(value) ? "" : wrongEmail)
          : ""
      });
      setIsValid(isValidEmail(value));

    } else {
      setErrors({
        ...errors, [name]: areInputsVisited[name]
          ? e.target.validationMessage
          : ""
      });
      setIsValid(e.target.closest('form').checkValidity());

    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setAreInputsVisited({ ...areInputsVisited, [name]: true });
    setErrors({ ...errors, [name]: e.target.validationMessage });
  };

  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
  }, [setValues, setErrors, setIsValid]);

  return { values, handleChange, handleBlur, errors, isValid, resetForm, setValues, setIsValid };
}

