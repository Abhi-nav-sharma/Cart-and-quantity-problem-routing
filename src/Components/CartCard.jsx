import { useContext, useState } from "react";
import { cartContext } from "../Context/CartContextProvider";

export default function CartCard({ id, name, image, description, price }) {
  const [quantity, setQuantity] = useState(1);
  const [cart, handleCart] = useContext(cartContext);
  const handleAdd = () => {
    handleCart(Number(id), name, Number(price), Number(quantity));
    console.log(cart);
  };
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        width: "650px",
        margin: "20px auto",
        border: "1px solid black"
      }}
    >
      <div style={{ width: "200px", height: "200px" }}>
        <img src={image} alt="item.jpeg" />
      </div>
      <div style={{ flexBasis: "300px" }}>
        <h2>{name}</h2>
        <p>{description}</p>
        <h3>Price: Rs. {price}</h3>
      </div>
      <div>
        <div style={{ margin: "30px 0" }}>
          Quantity:
          <br />
          {quantity <= 1 ? (
            <button disabled onClick={() => setQuantity((prev) => prev - 1)}>
              -
            </button>
          ) : (
            <button onClick={() => setQuantity((prev) => prev - 1)}>-</button>
          )}
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <div>
          <button onClick={handleAdd}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
