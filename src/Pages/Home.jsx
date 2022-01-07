import CartCard from "../Components/CartCard";
import { items } from "../data.json";
export default function Home() {
  return (
    <div>
      {items.map((item) => {
        return (
          <CartCard
            key={item.id}
            id={item.id}
            name={item.product_name}
            image={item.image_url}
            description={item.description}
            price={item.price}
          />
        );
      })}
    </div>
  );
}
