import { useState } from "react";
import { Banner } from "../../components/Banner";
import { CoffeeList } from "../../components/CoffeeList";

export function Home() {
  const [cart, setCart] = useState([]);

  function addToCart(cofee: [], quantity: number) {
    alert("corno" + cofee + quantity);
  }
  return (
    <>
      <Banner></Banner>
      <CoffeeList addToCart={addToCart}></CoffeeList>
    </>
  );
}
