import { useContext, useEffect, useState } from "react";
import CartDetails from "../Components/CartDetails";
import { cartContext } from "../Context/CartContextProvider";
export default function ShowCart() {
  const [cart] = useContext(cartContext);
  let total = 0;
  for (let k of cart) {
    total += k.price * k.quantity;
  }
  console.log(total);
  return (
    <div>
      <h1>Cart</h1>
      {cart.map((item) => {
        return (
          <CartDetails
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
          />
        );
      })}
      <h2>Final Price: Rs.{total}</h2>
    </div>
  );
}
