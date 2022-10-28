import { ListContainer } from "./styles";
import { CoffeeItemList } from "../Coffee";
import { ListOfCoffess } from "./coffeeList";

interface list {
  addToCart: any;
}

function handleAddToCart(coffeeName: string, quantity: number) {
  ListOfCoffess.map((Coffee) => {
    if (Coffee.name == coffeeName) {
      alert("corno");
    }
  });
}

export function CoffeeList({ addToCart }: list) {
  return (
    <ListContainer>
      {ListOfCoffess.map((Coffee) => {
        return (
          <CoffeeItemList
            addToCart={handleAddToCart}
            key={Coffee.name}
            name={Coffee.name}
            description={Coffee.description}
            price={Coffee.value}
            iconSrc={Coffee.icon}
            tags={Coffee.tags}></CoffeeItemList>
        );
      })}
    </ListContainer>
  );
}
