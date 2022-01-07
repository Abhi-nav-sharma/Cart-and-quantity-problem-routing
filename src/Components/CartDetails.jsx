export default function CartDetails({ name, quantity, price }) {
  console.log(name, quantity, price);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ flexBasis: "200px", border: "1px solid black" }}>
        Item: {name}
      </div>
      <div style={{ flexBasis: "200px", border: "1px solid black" }}>
        Quantity: {quantity}
      </div>
      <div style={{ flexBasis: "200px", border: "1px solid black" }}>
        Price: {price}
      </div>
      <div style={{ flexBasis: "200px", border: "1px solid black" }}>
        Final Price: {quantity * price}
      </div>
    </div>
  );
}
