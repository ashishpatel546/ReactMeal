import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [isValidForm, setIsValidForm] =  useState(true)
  const amountInputRef = useRef();

  const submitHandler = (event)=>{
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value
    const enteredAmountNumber = +enteredAmount;
    if(enteredAmount.trim().length === 0 ||
        enteredAmountNumber <1 ||
        enteredAmount > 5
    ){
    setIsValidForm(false)
    return
    }
    props.onAddToCart(enteredAmountNumber)
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref= {amountInputRef}
        input={{
          type: "number",
          id: `amount_+${props.id}`,
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
      {!isValidForm && <p>Please enter a valid amount 1 to 5</p>}
    </form>
  );
};

export default MealItemForm;
