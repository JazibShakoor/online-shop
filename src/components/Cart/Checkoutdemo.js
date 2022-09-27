import useInput from "../../store/CustomHook/UserInput/useInput";
import classes from "./Checkout.module.css";

const isNotEmpty = (value) => value.trim() !== "";

const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: enteredNameHasError,
    valueChangeHandler: enteredNameChangeHandler,
    inputBlurHandler: enteredNameBlurHandler,
  } = useInput(isNotEmpty);
  const {
    value: enteredStreetValue,
    isValid: enteredStreetIsValid,
    hasError: enteredStreetValueHasError,
    valueChangeHandler: enteredStreetChangeHandler,
    inputBlurHandler: enteredStreetValueBlurHandler,
  } = useInput(isNotEmpty);
  const {
    value: enteredCityValue,
    isValid: enteredCityIsValid,
    hasError: enteredCityValueHasError,
    valueChangeHandler: enteredCityChangeHandler,
    inputBlurHandler: enteredCityBlurHandler,
  } = useInput(isNotEmpty);
  const {
    value: enteredContactNumberValue,
    isValid: enteredContactNumberIsValid,
    hasError: enteredContactNumberValueHasError,
    valueChangeHandler: enteredContactNumberChangeHandler,
    inputBlurHandler: enteredContactNumberBlurHandler,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredStreetIsValid &&
    enteredCityIsValid &&
    enteredContactNumberIsValid
  ) {
    formIsValid = true;
  }

  const confirmHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreetValue,
      city: enteredCityValue,
      contactNumber: enteredContactNumberValue,
    });
  };

  const nameControlClasses = `${classes.control} 
  ${!enteredNameHasError ? "" : classes.invalid}`;
  const streetControlClasses = `${classes.control} 
  ${!enteredStreetValueHasError ? "" : classes.invalid}`;
  const contactNumberControlClasses = `${classes.control} 
  ${!enteredContactNumberIsValid ? "" : classes.invalid}`;
  const cityControlClasses = `${classes.control} 
  ${!enteredCityValueHasError ? "" : classes.invalid}`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={enteredNameChangeHandler}
          onBlur={enteredNameBlurHandler}
        />
        {enteredNameHasError && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          value={enteredStreetValue}
          onChange={enteredStreetChangeHandler}
          onBlur={enteredStreetValueBlurHandler}
        />
        {enteredStreetValueHasError && <p>Please enter a valid street!</p>}
      </div>
      <div className={contactNumberControlClasses}>
        <label htmlFor="contactNumber">Contact Number</label>
        <input
          type="text"
          id="contactNumber"
          value={enteredContactNumberValue}
          onChange={enteredContactNumberChangeHandler}
          onBlur={enteredContactNumberBlurHandler}
        />
        {enteredContactNumberValueHasError && (
          <p>Please enter a valid contactNumber!</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={enteredCityValue}
          onChange={enteredCityChangeHandler}
          onBlur={enteredCityBlurHandler}
        />
        {enteredCityValueHasError && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default BasicForm;
