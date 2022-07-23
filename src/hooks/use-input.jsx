import { useState } from "react"

const useInput = (validateHandler) => {

    const [inputValue, setInputValue] = useState('');
    const [inputIsTouched, setInputIsTouched] = useState(false);

    const inputIsValid = validateHandler(inputValue);
    const inputIsInvalid = inputIsTouched && !inputIsValid;

    const inputChangeHandler = (event) => {
        setInputValue(event.target.value);
    }

    const inputBlurHandler = () => {
        setInputIsTouched(true)
    }

    const inputReset = () => {
        setInputIsTouched(false);
        setInputValue('');
    }

  return {
    value: inputValue,
    valid: inputIsValid,
    invalid: inputIsInvalid,
    onChange: inputChangeHandler,
    onBlur: inputBlurHandler,
    onReset: inputReset
  }
}

export default useInput