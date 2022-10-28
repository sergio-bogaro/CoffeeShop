import { CreditCard, CurrencyDollarSimple, MapPinLine, Money } from "phosphor-react";
import {
  AdressContainer,
  OrderContainer,
  PaymentContainer,
  PaymentMethodContainer,
} from "./styles";

export function Cart() {
  return (
    <>
      <PaymentContainer>
        <div>
          <AdressContainer className="card">
            <h2>
              <MapPinLine /> Endereço De Entrega
            </h2>
            <p>Informe o endereço onde deseja receber seu pedido</p>

            <form action="">
              <input placeholder="CEP" className="smallInput" />
              <input placeholder="Rua" />
              <div className="InputContainer">
                <input placeholder="Numero" className="smallInput" />
                <input placeholder="Complemento" className="bigInput" />
              </div>
              <div className="InputContainer">
                <input placeholder="Bairro" className="smallInput" />
                <input placeholder="Cidade" className="bigInput" />
              </div>
            </form>
          </AdressContainer>

          <PaymentMethodContainer className="card">
            <h2>
              <CurrencyDollarSimple /> Pagamento
            </h2>
            <p>O Pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
          </PaymentMethodContainer>
        </div>
        <OrderContainer className="card">Pedido</OrderContainer>
      </PaymentContainer>
    </>
  );
}
