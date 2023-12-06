import React, {useContext} from "react";

import styles from "./MealItem.module.css"
import MealItemForm from "./MealItemForm";
import CartContext from "@/store/cart-context";

const MealItem = props => {
    const cartCtx = useContext(CartContext)

    const price = `Rp${props.price.toFixed(0)}`;

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    };

    return (
        <li className={styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={styles.description}>{props.desc}</div>
                <div className={styles.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id = {props.id} onAddToCart = {addToCartHandler}></MealItemForm>
            </div>
        </li>
    )
};

export default MealItem;