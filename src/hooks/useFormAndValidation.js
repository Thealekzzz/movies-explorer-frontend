import {useState, useCallback} from 'react';

export function useFormAndValidation() {
  const [ values, setValues ] = useState({});
  const [ errors, setErrors ] = useState({});
  const [ areInputsVisited, setAreInputsVisited] = useState({});
  const [ isValid, setIsValid ] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target
    setValues({...values, [name]: value });
    setErrors({...errors, [name]: areInputsVisited[name] ? e.target.validationMessage : ""});
    setIsValid(e.target.closest('form').checkValidity());
  };

  const handleBlur = (e) => {
    const {name} = e.target;
    setAreInputsVisited({...areInputsVisited, [name]: true});
    setErrors({...errors, [name]: e.target.validationMessage});
  };

  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
  }, [setValues, setErrors, setIsValid]);

  return { values, handleChange, handleBlur, errors, isValid, resetForm, setValues, setIsValid };
}

