import React, { useState } from "react";

export const cartContext = React.createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const handleCart = (id, name, price, quantity) => {
    //   let flag = true;
    //   for (let k of cart) {
    //     if (Number(Object.keys(k)[0]) === id) {
    //       k[id] += quantity;
    //       flag = false;
    //     }
    //   }
    //   if (flag) {
    //     const payload = {};
    //     payload[id] = quantity;
    //     setCart([...cart, payload]);
    //   }
    // };
    const payload = {
      id,
      name,
      price,
      quantity
    };
    let flag = true;
    for (let k of cart) {
      if (k.id === id) {
        k[id] += quantity;
        flag = false;
      }
    }
    if (flag) {
      setCart([...cart, payload]);
    }
  };
  const value = [cart, handleCart];
  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
}
