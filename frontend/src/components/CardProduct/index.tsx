import React from "react";
import { IProduct } from "../../common/types";
import { Container, Image } from "./styles";

const CardProduct: React.FC<IProduct> = ({
  title,
  value,
  category,
  imageUrl,
}) => (
  <Container>
    <Image imageUrl={imageUrl} />
    <h2>{title}</h2>
    <h3>{category}</h3>
    <span>
      R$ {value
        .toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
          maximumFractionDigits: 2,
        })
        .replace(/[^0123456789.,]/g, "")}
    </span>
  </Container>
);

export default CardProduct;
