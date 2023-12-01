import React, { Fragment } from "react";

import styles from "./Header.module.css"
import mealsImg from "../../public/meals.jpg"
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>Makan Bang!</h1>
                <HeaderCartButton onClick = {props.onShowCart}></HeaderCartButton>
            </header>
            <div className={styles['main-image']}>
            <img src={"/meals.jpg"} alt="Makan Makan Makan Makan MakanQ" />
            </div>
        </Fragment>
    );
};

export default Header