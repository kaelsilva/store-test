import React, { useEffect, useState } from "react";
import { IProduct } from "../../common/types";
import CardProduct from "../../components/CardProduct";
import { getProducts } from "../../services/products";
import { Container, ProductsContainer, Select } from "./styles";

const Home: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>): void {
    setSelectedCategory(event.target.value);
  }

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
      setFilteredProducts(response);
      setCategories([...new Set(response.map((product) => product.category))]);
    });
  }, []);

  useEffect(() => {
    const newFilteredProducts = selectedCategory ? products.filter(
      (product) => product.category === selectedCategory
    ) : products;

    setFilteredProducts(newFilteredProducts);
  }, [selectedCategory]);

  return (
    <Container>
      <h1>Home</h1>

      <Select onChange={handleChange}>
        <option value="" disabled selected hidden>
          Filtre por categoria
        </option>
        <option value="">
          Nenhum filtro
        </option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </Select>

      <ProductsContainer>
        {filteredProducts.map((product) => (
          <CardProduct
            key={product.id}
            title={product.title}
            value={product.value}
            category={product.category}
            imageUrl={product.imageUrl}
          />
        ))}
      </ProductsContainer>
    </Container>
  );
};

export default Home;
