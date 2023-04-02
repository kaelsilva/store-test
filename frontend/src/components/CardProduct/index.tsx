import React from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../../common/types";
import { Button, Container, H2, H3, Image, Span } from "./styles";

const CardProduct: React.FC<IProduct> = ({
  id,
  title,
  value,
  category,
  imageUrl,
  addItemToCart,
  removeItemFromCart,
  itemInCart,
}) => (
  <Container>
    <Image imageUrl={imageUrl} />
    <H2>{title}</H2>
    <H3>{category}</H3>
    <Span>
      R${" "}
      {value
        .toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
          maximumFractionDigits: 2,
        })
        .replace(/[^0123456789.,]/g, "")}
    </Span>
    <Button
      className="add"
      onClick={() => addItemToCart!({ itemId: id, itemValue: value })}
      disabled={itemInCart || false}
    >
      Adicionar ao carrinho
    </Button>

    <Button
      disabled={!itemInCart}
      className="remove"
      onClick={() => removeItemFromCart!(id)}
    >
      Remover do carrinho
    </Button>

    <Link to={`/product/${id}`}>Ver detalhes</Link>
  </Container>
);

export default CardProduct;
