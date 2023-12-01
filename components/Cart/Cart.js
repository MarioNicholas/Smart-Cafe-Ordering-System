import React, { useContext, useState } from "react";

import styles from "./Cart.module.css"
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import CartContext from "@/store/cart-context";
import Modal from "../UI/Modal";

const Cart = props => {
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const cartCtx = useContext(CartContext)
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItem = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id)
    };

    const cartItemAddHandler = item => {
        cartCtx.addItem(item)
    };

    const orderHandler = () => {
        setIsCheckout(true);
    }

    const submitOrderHandler =async (tableNum) => {
        setIsSubmitting(true);
        await fetch('/api/meals', {
            method: 'POST',
            body: JSON.stringify({
                tableNumber: tableNum,
                items : cartCtx.items,
                totalAmount: totalAmount,
            }),
            headers: {
                "Content-Type": "application/json",
            }
        });
        setIsSubmitting(false);
        setSubmitted(true);
        cartCtx.clearCart();
    };

    const modalAction = (
        <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onClose}>Close</button>
                {hasItem &&<button className={styles['button']} onClick={orderHandler}>Order</button>}
        </div>
    );

    

    const CartItems = <ul className={styles["cart-items"]}>{cartCtx.items.map((item) => 
    <CartItem 
        key= {item.id} 
        name={item.name} 
        price = {item.price} 
        amount = {item.amount} 
        onRemove={cartItemRemoveHandler.bind(null,item.id)} 
        onAdd={cartItemAddHandler.bind(null,item)}>
    </CartItem>)}</ul>

    const modalContent = (
        <React.Fragment>
            {CartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout ? <Checkout onCancel = {props.onClose} onSubmit = {submitOrderHandler}></Checkout> : null}
            {!isCheckout ? modalAction : null}
        </React.Fragment>
    )

    const isSubmittingContent = <p>Sending order data...</p>
    const submittedContent = (
        <React.Fragment>
            <p>Order Submitted</p>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onClose}>Close</button>
        </div>
        </React.Fragment>);


    return(
        <Modal onClose={props.onClose}>
            {!isSubmitting && !submitted && modalContent}
            {isSubmitting && isSubmittingContent}
            {submitted && !isSubmitting && submittedContent}
        </Modal>
    );
};

//fungsi .bind digunakan untuk mempassing fungsi dengan parameter pada component turunannya secara langsung
export default Cart