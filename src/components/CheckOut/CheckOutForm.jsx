import React, { useState, useEffect, useContext } from "react";
import useForm from "../../Hooks/useForm";
import context from "../../store/context";

import classes from "./CheckOutForm.module.css";

const CheckOutForm = ({ submitOrder }) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const Ctx = useContext(context);

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
    blurHandler: nameBlur,
    changeHandler: nameChangeHandler,
    isValid: nameIsValid,
    valueIsTouched: nameIsTouched,
    enteredValue: enteredName,
    resetHandler: resetName,
  } = useForm((value) => {
    return value.trim() === "";
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
    if (zipIsValid && emailIsValid && nameIsValid && addressIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [zipIsValid, emailIsValid, nameIsValid, addressIsValid]);

  const submitHandler = (e) => {
    e.preventDefault();
    const orderDetails = {
      name: enteredName,
      email: enteredEmail,
      zipCode: enteredZip,
      address: enteredAddress,
      orders: Ctx.items,
      totalAmount:Ctx.totalAmount
    };
    Ctx.clearCart()
    submitOrder(orderDetails);
    setTimeout(() => {
      resetEmail();
      resetName();
      resetZip();
      resetAddress();
      setFormIsValid(false)
    }, 700);
  };

  const nameIsInvalid = !nameIsValid && nameIsTouched;
  const nameClass = nameIsInvalid
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

  const zipIsInvalid = !zipIsValid && zipIsTouched;
  const zipClass = zipIsInvalid
    ? `${classes.input} ${classes["input-error"]}`
    : classes.input;

  return (
    <React.Fragment>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes["form-item"]}>
          <div className={classes["form-control"]}>
            <label htmlFor="Name">Full Name</label>
            <input
              className={nameClass}
              value={enteredName}
              type="text"
              onBlur={nameBlur}
              onChange={nameChangeHandler}
            />
            {nameIsInvalid && (
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
            <label htmlFor="Adress">Billing Address</label>
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
