import React from "react";
import { IProduct } from "../../common/types";
import { Button, Container, Image } from "./styles";

const CardProduct: React.FC<IProduct> = ({
  id,
  title,
  value,
  category,
  imageUrl,
  addItemToCart,
}) => (
  <Container>
    <Image imageUrl={imageUrl} />
    <h2>{title}</h2>
    <h3>{category}</h3>
    <span>
      R${" "}
      {value
        .toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
          maximumFractionDigits: 2,
        })
        .replace(/[^0123456789.,]/g, "")}
    </span>
    <Button onClick={() => addItemToCart({ itemId: id, itemValue: value })}>
      Adicionar ao carrinho
    </Button>
  </Container>
);

export default CardProduct;
