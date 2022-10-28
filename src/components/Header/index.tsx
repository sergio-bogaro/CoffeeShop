import { HeaderContainer, IconsContainer } from "./styles";
import { MapPin, ShoppingCartSimple } from "phosphor-react";
import logoCofeeDelivery from "../../assets/Logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <a href="/">
        <img src={logoCofeeDelivery} alt="" />
      </a>
      <IconsContainer>
        <div>
          <MapPin size={20} weight="fill" color="#A7754D" />
          <label>Indaiatuba, SP</label>
        </div>
        <a href="/carrinho">
          <ShoppingCartSimple size={20} weight="fill" color="#9D5C63" />
        </a>
      </IconsContainer>
    </HeaderContainer>
  );
}
