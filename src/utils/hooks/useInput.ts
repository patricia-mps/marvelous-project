import { useState } from 'react';

const useInput = (validateValue: (arg: string) => any, defaultValue: string = '') => {
  const [enteredValue, setEnteredValue] = useState<string>(defaultValue);
  const [isTouched, setIsTouched] = useState<boolean>(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event: any): void => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event: any): void => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
