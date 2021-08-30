import React, { useState, useEffect, useContext } from "react";
import useForm from "../../Hooks/useForm";
import context from "../../store/context";

import classes from "./CheckOutForm.module.css";

const CheckOutForm = ({ submitOrder }) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const Ctx = useContext(context);

  const {
    blurHandler: firstNameBlur,
    changeHandler: firstNameChangeHandler,
    isValid: firstNameIsValid,
    valueIsTouched: firstNameIsTouched,
    enteredValue: enteredFirstName,
    resetHandler: resetFirstName,
  } = useForm((value) => {
    return value.trim() === "";
  });

  const {
    blurHandler: lastNameBlur,
    changeHandler: lastNameChangeHandler,
    isValid: lastNameIsValid,
    valueIsTouched: lastNameIsTouched,
    enteredValue: enteredLastName,
    resetHandler: resetLastName,
  } = useForm((value) => {
    return value.trim() === "";
  });
  const {
    blurHandler: emailBlur,
    changeHandler: emailChangeHandler,
    isValid: emailIsValid,
    valueIsTouched: emailIsTouched,
    enteredValue: enteredEmail,
    resetHandler: resetEmail,
  } = useForm((value) => {
    return !value.includes("@");
  });

  const {
    blurHandler: addressBlur,
    changeHandler: addressChangeHandler,
    isValid: addressIsValid,
    valueIsTouched: addressIsTouched,
    enteredValue: enteredAddress,
    resetHandler: resetAddress,
  } = useForm((value) => {
    return value.trim() === "";
  });

  const {
    blurHandler: stateBlur,
    changeHandler: stateChangeHandler,
    isValid: stateIsValid,
    valueIsTouched: stateIsTouched,
    enteredValue: enteredState,
    resetHandler: resetState,
  } = useForm((value) => {
    return value.trim() === "";
  });
  const {
    blurHandler: cityBlur,
    changeHandler: cityChangeHandler,
    isValid: cityIsValid,
    valueIsTouched: cityIsTouched,
    enteredValue: enteredCity,
    resetHandler: resetCity,
  } = useForm((value) => {
    return value.trim() === "";
  });

  const {
    blurHandler: zipBlur,
    changeHandler: zipChangeHandler,
    isValid: zipIsValid,
    valueIsTouched: zipIsTouched,
    enteredValue: enteredZip,
    resetHandler: resetZip,
  } = useForm((value) => {
    return value.length !== 5;
  });

  useEffect(() => {
    if (
      zipIsValid &&
      emailIsValid &&
      firstNameIsValid &&
      addressIsValid &&
      stateIsValid &&
      cityIsValid
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [
    zipIsValid,
    emailIsValid,
    lastNameIsValid,
    firstNameIsValid,
    addressIsValid,
    cityIsValid,
    stateIsValid,
  ]);

  const submitHandler = (e) => {
    e.preventDefault();
    const orderDetails = {
      firstname: enteredFirstName,
      lastname: enteredLastName,
      email: enteredEmail,
      zipCode: enteredZip,
      state: enteredState,
      city: enteredCity,
      address: enteredAddress,
      orders: Ctx.items,
      totalAmount: Ctx.totalAmount.toFixed(2),
    };
    Ctx.clearCart();
    submitOrder(orderDetails);
    setTimeout(() => {
      resetEmail();
      resetFirstName();
      resetLastName();
      resetZip();
      resetCity();
      resetState();
      resetAddress();
      setFormIsValid(false);
    }, 700);
  };

  const firstNameIsInvalid = !firstNameIsValid && firstNameIsTouched;
  const firstNameClass = firstNameIsInvalid
    ? `${classes.input} ${classes["input-error"]}`
    : classes.input;

  const lastNameIsInvalid = !lastNameIsValid && lastNameIsTouched;
  const lastNameClass = lastNameIsInvalid
    ? `${classes.input} ${classes["input-error"]}`
    : classes.input;

  const emailIsInvalid = !emailIsValid && emailIsTouched;
  const emailClass = emailIsInvalid
    ? `${classes.input} ${classes["input-error"]}`
    : classes.input;

  const addressIsInvalid = !addressIsValid && addressIsTouched;
  const addressClass = addressIsInvalid
    ? `${classes.input} ${classes["input-error"]}`
    : classes.input;

  const cityIsInvalid = !cityIsValid && cityIsTouched;
  const cityClass = cityIsInvalid
    ? `${classes.input} ${classes["input-error"]}`
    : classes.input;

  const stateIsInvalid = !stateIsValid && stateIsTouched;
  const stateClass = stateIsInvalid
    ? `${classes.input} ${classes["input-error"]}`
    : classes.input;

  const zipIsInvalid = !zipIsValid && zipIsTouched;
  const zipClass = zipIsInvalid
    ? `${classes.input} ${classes["input-error"]}`
    : classes.input;

  return (
    <React.Fragment>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes["form-item"]}>
          <div className={classes["form-control"]}>
            <label htmlFor="First Name">First Name</label>
            <input
              className={firstNameClass}
              value={enteredFirstName}
              type="text"
              onBlur={firstNameBlur}
              onChange={firstNameChangeHandler}
            />
            {firstNameIsInvalid && (
              <p className={classes.error}>This field is required</p>
            )}
          </div>

          <div className={classes["form-control"]}>
            <label htmlFor="Last Name">Last Name</label>
            <input
              className={lastNameClass}
              value={enteredLastName}
              type="text"
              onBlur={lastNameBlur}
              onChange={lastNameChangeHandler}
            />
            {lastNameIsInvalid && (
              <p className={classes.error}>This field is required</p>
            )}
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="Email">Email Address</label>
            <input
              type="email"
              value={enteredEmail}
              className={emailClass}
              onBlur={emailBlur}
              onChange={emailChangeHandler}
            />
            {emailIsInvalid && (
              <p className={classes.error}>
                Please enter a valid email address
              </p>
            )}
          </div>

          <div className={classes["form-control"]}>
            <label htmlFor="State">State</label>
            <input
              type="text"
              value={enteredState}
              className={stateClass}
              onBlur={stateBlur}
              onChange={stateChangeHandler}
            />
            {stateIsInvalid && (
              <p className={classes.error}>Please add your state</p>
            )}
          </div>

          <div className={classes["form-control"]}>
            <label htmlFor="City">City</label>
            <input
              type="text"
              value={enteredCity}
              className={cityClass}
              onBlur={cityBlur}
              onChange={cityChangeHandler}
            />
            {cityIsInvalid && (
              <p className={classes.error}>Please add a city</p>
            )}
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="Address">Shipping Address</label>
            <input
              type="text"
              value={enteredAddress}
              className={addressClass}
              onBlur={addressBlur}
              onChange={addressChangeHandler}
            />
            {addressIsInvalid && (
              <p className={classes.error}>This field is required</p>
            )}
          </div>

          <div className={classes["form-control"]}>
            <label htmlFor="Zip Code">Zip Code</label>
            <input
              type="text"
              value={enteredZip}
              className={zipClass}
              onBlur={zipBlur}
              onChange={zipChangeHandler}
            />
            {zipIsInvalid && (
              <p className={classes.error}>Zip code required (5 characters)</p>
            )}
          </div>
        </div>

        <button
          className={classes.button}
          type="submit"
          disabled={!formIsValid}
        >
          Send Order
        </button>
      </form>
    </React.Fragment>
  );
};

export default CheckOutForm;
