import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IProduct } from "../../common/types";
import { getProduct } from "../../services/products";
import {
  Container,
  Content,
  H1,
  Image,
  Paragraph,
  Span,
  TextContainer,
} from "./styles";

const Home: React.FC = () => {
  const [product, setProduct] = useState<IProduct>();

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    getProduct(id).then((response) => {
      setProduct(response.data);
    });
  }, []);

  return (
    <Container>
      <Content>
        <Image imageUrl={product?.imageUrl} />
        <TextContainer>
          <H1>{product?.title}</H1>
          <Paragraph>
            <Span className="bold">
              Descrição:
              <br />
            </Span>{" "}
            {product?.description}
          </Paragraph>
          <Paragraph>
            <Span className="bold">Categoria:</Span> {product?.category}
          </Paragraph>
          <Paragraph>
            <Span className="bold">Valor:</Span> R${" "}
            {product?.value
              .toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
                maximumFractionDigits: 2,
              })
              .replace(/[^0123456789.,]/g, "")}
          </Paragraph>
        </TextContainer>
        <Link to="/">Voltar</Link>
      </Content>
    </Container>
  );
};

export default Home;
