import React, { useEffect, useState } from "react";
import styles from "./AvailableMeals.module.css"
import Card from "../UI/Card";
import MealItem from "./MealItem";

const AvailableMeals = (props) => {

    const mealsList = props.meals.map((meals) => <MealItem id={meals._id.toString()} key={meals._id} name={meals.name} desc={meals.description} price={meals.price}></MealItem>);
    return(
        <section className={styles.meals}>
            <Card>
                {mealsList}
            </Card>
        </section>
    )
}

export default AvailableMeals