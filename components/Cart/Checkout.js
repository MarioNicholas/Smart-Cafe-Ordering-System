import React, { useRef } from "react";

import styles from './Checkout.module.css'

const Checkout = props => {

    const tableNumberInputRef = useRef();

    const confirmHandler = event => {
        event.preventDefault();

        const enteredNumber = tableNumberInputRef.current.value;

        props.onSubmit(enteredNumber);
    }

    return (
        <form className={styles.form} onSubmit={confirmHandler}>
            <div className={`${styles.control}`}>
                <label htmlFor="name">Table Number</label>
                <input type="number" step="1" min="0" max="50" id="name" ref={tableNumberInputRef}></input>
            </div>
            <div className={styles.actions}>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button className={styles.submit} type="submit">Confirm</button>
            </div>
        </form>
    )
};

export default Checkout

