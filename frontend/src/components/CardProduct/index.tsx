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
  removeItemFromCart,
  itemInCart,
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
    <Button
      className="add"
      onClick={() => addItemToCart({ itemId: id, itemValue: value })}
      disabled={itemInCart}
    >
      Adicionar ao carrinho
    </Button>

    <Button
      disabled={!itemInCart}
      className="remove"
      onClick={() => removeItemFromCart(id)}
    >
      Remover do carrinho
    </Button>
  </Container>
);

export default CardProduct;
