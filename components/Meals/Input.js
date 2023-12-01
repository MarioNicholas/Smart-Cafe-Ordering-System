import React from "react";

import styles from "./Input.module.css"

const Input =React.forwardRef( (props,ref) => {
    return (
        <div className={styles.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref = {ref} {...props.input}></input>
        </div>
    )
});

export default Input;
//{...props.input} memberikan semua props yang ada sesuai dengan parent nya
//Ketika pada <Input> mempunyai type = "text", maka dalam <input> ada type="text" juga