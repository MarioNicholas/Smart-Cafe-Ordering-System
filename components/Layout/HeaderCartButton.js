import React, {useContext, useEffect, useState} from "react";

import styles from "./HeaderCartButton.module.css"
import CartIcon from "../Cart/CartIcon";
import CartContext from "@/store/cart-context";

//fungsi reduce untuk mengambil jumlahnya, butuh 2 parameter, 1 fungsi 1 nya starting value

const HeaderCartButton = props => {
    const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const totalItem = cartCtx.items.reduce((curNumber, item)=>{
        return curNumber + item.amount;
    }, 0);

    const btnClasses = `${styles.button} ${buttonIsHighlighted ? styles.bump : ''}`
    const { items } = cartCtx;

    useEffect(() => {
        if (cartCtx.items.length === 0) {
            return;
        }
        setButtonIsHighlighted(true);

        const timer =setTimeout(() => {
            setButtonIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    },[cartCtx.items.length, items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon></CartIcon>
            </span>
            <span>Pesananmu</span>
            <span className={styles.badge}>
                {totalItem}
            </span>
        </button>
    )
};

export default HeaderCartButton