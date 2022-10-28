import { BannerContainer, TextContainer } from "./styles";
import BannerImage from "../../assets/Imagem.svg";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function Banner() {
  return (
    <BannerContainer>
      <TextContainer>
        <h2>Encontre o café perfeito para qualquer hora do dia</h2>
        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

        <div>
          <div>
            <span>
              <ShoppingCart color="white" size={16} weight="fill" />
            </span>

            <label>Compra Simples e segura</label>
          </div>
          <div>
            <span>
              <Timer color="white" size={16} weight="fill" />
            </span>
            <label>Entrega rápida e rastreada</label>
          </div>
          <div>
            <span>
              <Package color="white" size={16} weight="fill" />
            </span>
            <label>Embalagem mantém o café intacto</label>
          </div>
          <div>
            <span>
              <Coffee color="white" size={16} weight="fill" />
            </span>
            <label>O café chega fresquinho até você</label>
          </div>
        </div>
      </TextContainer>
      <img src={BannerImage} alt="" />
    </BannerContainer>
  );
}
