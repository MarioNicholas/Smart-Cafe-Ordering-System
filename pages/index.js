import React, { Fragment, useEffect, useState } from "react";

import Meals from "@/components/Meals/Meals";
import Cart from "@/components/Cart/Cart";
import CartProvider from "@/store/CartProvider";
import Header from "@/components/Layout/Header";

function App() {
  const [CartShown, setCartShown] = useState(false);
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/meals")
      .then((response) => response.json())
      .then((data) => {
        setMeals(data.meals);
        setLoading(false);
      });
  }, []);

  const showCartHandler = () => {
    setCartShown(true);
  };

  const hideCartHandler = () => {
    setCartShown(false);
  };

  return (
    <Fragment>
        <CartProvider>
          {CartShown && <Cart onClose={hideCartHandler}></Cart>}
          <Header onShowCart={showCartHandler}></Header>
          {loading && <p>Loading...</p>}
          {!loading &&<main>
            <Meals meals={meals}></Meals>
          </main>}
        </CartProvider>
    </Fragment>
  );
}

export default App;
