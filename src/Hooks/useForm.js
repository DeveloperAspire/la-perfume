import { useState} from "react";

const useForm = ( handlerFn ) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [valueIsTouched, setValueIsTouched] = useState(false);
  const [isValid, setIsValid] = useState(false);
  

  const blurHandler = ()=> {
     const valid = handlerFn(enteredValue)
     if(valid){
           setValueIsTouched(true)
           setIsValid(false)
     }
  }
  const changeHandler = (e)=> {
        setEnteredValue(e.target.value)
        setIsValid(true)
        setValueIsTouched(false)
  }
  const resetHandler = ()=> {
        setEnteredValue("")
        setValueIsTouched(false)
  }

  

  return {blurHandler, changeHandler, isValid, valueIsTouched, enteredValue, resetHandler};
};

export default useForm;
