import React, {useState, useRef} from 'react' 

import classes from './CheckOutForm.module.css'


const CheckOutForm = ()=> {
  const [isValid, setIsValid] = useState({
    name:null,
    email:null,
    address:null,
    zipCode:null
  })
   const nameRef=useRef()
   const emailRef = useRef()
   const addressRef = useRef()
   const zipRef = useRef()

  const submitHandler = (e)=> {
     e.preventDefault();
    setIsValid({
      name:nameRef.current.value.length !== '',
      email:emailRef.current.value.includes('@'),
      address:addressRef.current.value.length !== '',
      zipCode: zipRef.current.value.length === 5
    })

    console.log(
      nameRef.current.value,
      emailRef.current.value,
      addressRef.current.value,
      zipRef.current.value
    );
    console.log("Hello");
  }

      return (
        <React.Fragment>
          <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes["form-item"]}>
              <div className={classes["form-control"]}>
                <label htmlFor="Name">Full Name</label>
                <input type="text" ref={nameRef} />
                {isValid.name && (
                  <p className={classes.error}>Please enter your Full name</p>
                )}
              </div>

              <div className={classes["form-control"]}>
                <label htmlFor="Email">Email Address</label>
                <input type="email" ref={emailRef} />
                {isValid.name && (
                  <p className={classes.error}>
                    Please enter a valid email address
                  </p>
                )}
              </div>

              <div className={classes["form-control"]}>
                <label htmlFor="Adress">Billing Address</label>
                <input type="text" ref={addressRef} />
                {isValid.name && (
                  <p className={classes.error}>Please enter your address</p>
                )}
              </div>

              <div className={classes["form-control"]}>
                <label htmlFor="Zip Code">Zip Code</label>
                <input type="text" ref={zipRef} />
                {isValid.name && (
                  <p className={classes.error}>Please enter a valid zip code</p>
                )}
              </div>
            </div>

            <button className={classes.button} type="submit">
              Send Order
            </button>
          </form>
        </React.Fragment>
      );
}

export default CheckOutForm