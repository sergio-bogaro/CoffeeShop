import { CoffeeListItem, PriceContainer, QuantityContainer, TagsList } from "./styles";

import { useState } from "react";
import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";

interface Coffee {
  addToCart: any;
  name: string;
  description: string;
  price: number;
  iconSrc: string;
  tags: string[];
}

export function CoffeeItemList({ name, description, price, iconSrc, tags, addToCart }: Coffee) {
  const [quantity, setQuantity] = useState(1);

  const formatedValue = FormatCoffeePrice(price);

  function HandleItemQuantity(sum: boolean) {
    if (sum) {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1);
    }
  }

  function FormatCoffeePrice(priceToFormat: number) {
    const priceToString = priceToFormat.toString();
    const value = priceToString.split(".");

    if (value[1]) {
      return value[1].length === 1 ? priceToString + "0" : priceToString;
    } else {
      return priceToString + ".00";
    }
  }

  return (
    <CoffeeListItem>
      <img src={iconSrc} />
      <TagsList>
        {tags.map((tag) => {
          return <span className="Tag">{tag}</span>;
        })}
      </TagsList>

      <h3 className="CoffeeName">{name}</h3>
      <p className="Description">{description}</p>

      <PriceContainer>
        <div>
          <span className="MoneySymbol">R$</span>
          <span className="Price">{formatedValue}</span>
        </div>

        <div className="ChooseQuantity">
          <QuantityContainer>
            <button onClick={() => HandleItemQuantity(false)} disabled={quantity <= 0}>
              <Minus color="#62452D" />
            </button>
            <span className="Quantity">{quantity}</span>
            <button onClick={() => HandleItemQuantity(true)}>
              <Plus color="#62452D" />
            </button>
          </QuantityContainer>

          <button className="AddToCart" onClick={addToCart(name, quantity)}>
            <ShoppingCartSimple weight="fill" color="white" size={18} />
          </button>
        </div>
      </PriceContainer>
    </CoffeeListItem>
  );
}
