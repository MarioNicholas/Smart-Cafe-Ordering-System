import React, {useRef, useState} from "react";

import styles from "./MealItemForm.module.css"
import Input from "./Input";

const MealItemForm = props => {
    const [amountIsValid, setAmountIsValid] = useState(true)
    const amountRef = useRef();

    const submitHandler = event => {
        event.preventDefault();

        const enteredAmount = amountRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if(enteredAmount.trim().length===0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false)
            return;
        }

        props.onAddToCart(enteredAmountNumber)
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input ref = {amountRef} label="Amount" input={{
                id : "ammount_" + props.id,
                type : "number",
                min : '1',
                max : '5',
                step : '1',
                defaultValue :'1'
            }}></Input>
            <button>+ Buy</button>
            {!amountIsValid && <p>Please Enter a valid amount (1 - 5)</p>}
        </form>
    );
};

export default MealItemForm