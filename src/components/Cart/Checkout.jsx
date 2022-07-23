import useInput from "../../hooks/use-input"

import classes from './Checkout.module.css';

const Checkout = (props) => {

  const {
    value: nameInput,
    valid: nameIsValid,
    invalid: nameIsInvalid,
    onChange: nameChange,
    onBlur: nameBlur,
    onReset: nameReset} = useInput((value) => value.trim().length >= 3);
  const {
    value: streetInput,
    valid: streetIsValid,
    invalid: streetIsInvalid,
    onChange: streetChange,
    onBlur: streetBlur,
    onReset: streetReset} = useInput((value) => value.trim().length >= 3);
  const {
    value: postalInput,
    valid: postalIsValid,
    invalid: postalIsInvalid,
    onChange: postalChange,
    onBlur: postalBlur,
    onReset: postalReset} = useInput((value) => value.trim().length === 6 && !isNaN(value));
  const {
    value: cityInput,
    valid: cityIsValid,
    invalid: cityIsInvalid,
    onChange: cityChange,
    onBlur: cityBlur,
    onReset: cityReset} = useInput((value) => value.trim().length >= 3);

  let formIsValid = false;

  if(nameIsValid && streetIsValid && postalIsValid && cityIsValid) {
    formIsValid = true;
  }

  const confirmHandler = (event) => {
    event.preventDefault();

    if(!formIsValid) {
      return;
    }

    props.onConfirm({
      name: nameInput,
      street: streetInput,
      postal: postalInput,
      city: cityInput
    });

    nameReset();
    streetReset();
    postalReset();
    cityReset();  
  };

  const nameClass = nameIsInvalid ? `${classes.control} ${classes.invalid}` : classes.control;
  const streetClass = streetIsInvalid ? `${classes.control} ${classes.invalid}` : classes.control;
  const postalClass = postalIsInvalid ? `${classes.control} ${classes.invalid}` : classes.control;
  const cityClass = cityIsInvalid ? `${classes.control} ${classes.invalid}` : classes.control;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameClass}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={nameInput} onChange={nameChange} onBlur={nameBlur} />
        {nameIsInvalid && <p className={classes['error-text']}>Name must be 3 characters long.</p>}
      </div>
      <div className={streetClass}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' value={streetInput} onChange={streetChange} onBlur={streetBlur} />
        {streetIsInvalid && <p className={classes['error-text']}>Street address must be 3 characters long.</p>}
      </div>
      <div className={postalClass}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' value={postalInput} onChange={postalChange} onBlur={postalBlur} />
        {postalIsInvalid && <p className={classes['error-text']}>Postal ZIP must be 6 numerical digit.</p>}
      </div>
      <div className={cityClass}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' value={cityInput} onChange={cityChange} onBlur={cityBlur} />
        {cityIsInvalid && <p className={classes['error-text']}>City must be 3 characters long.</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onClose}>
          Cancel
        </button>
        <button disabled={!formIsValid} className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;