import React from "react";
import { ICart } from "../../common/types";
import { Container, Div } from "./styles";

const Cart: React.FC<ICart> = ({ items, totalValue }) => (
  <>
    <Container>
      <p>Número de itens: {items.length}</p>
      <span>
        Valor total: R${" "}
        {totalValue
          .toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
            maximumFractionDigits: 2,
          })
          .replace(/[^0123456789.,]/g, "")}
      </span>
    </Container>
    <Div />
  </>
);

export default Cart;
