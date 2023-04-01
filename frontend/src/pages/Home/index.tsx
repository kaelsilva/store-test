import React, { useEffect, useState } from "react";
import { IProduct } from "../../common/types";
import CardProduct from "../../components/CardProduct";
import { getProducts } from "../../services/products";
import { Container, ProductsContainer, Select } from "./styles";

const Home: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedOrderBy, setSelectedOrderBy] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  const orderByOptions = [
    "Nenhum",
    "Nome",
    "Valor crescente",
    "Valor decrescente",
  ];

  function handleChangeCategory(
    event: React.ChangeEvent<HTMLSelectElement>
  ): void {
    setSelectedCategory(event.target.value);
  }

  function handleChangeOrderBy(
    event: React.ChangeEvent<HTMLSelectElement>
  ): void {
    setSelectedOrderBy(event.target.value);
  }

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
      setFilteredProducts(response);
      setCategories([...new Set(response.map((product) => product.category))]);
    });
  }, []);

  useEffect(() => {
    if (selectedCategory && selectedCategory !== "Nenhum filtro") {
      const newFilteredProducts = selectedCategory
        ? products.filter((product) => product.category === selectedCategory)
        : products;

      setFilteredProducts(newFilteredProducts);
    }

    setSelectedOrderBy("");
  }, [selectedCategory]);

  useEffect(() => {
    switch (selectedOrderBy) {
      case "Nenhum":
        setFilteredProducts(products);
        setSelectedCategory("");
        break;
      case "Nome":
        setFilteredProducts((prevFilteredProducts) =>
          [...prevFilteredProducts].sort((a, b) =>
            a.title.localeCompare(b.title)
          )
        );
        break;
      case "Valor crescente":
        setFilteredProducts((prevFilteredProducts) =>
          [...prevFilteredProducts].sort((a, b) => a.value - b.value)
        );
        break;
      case "Valor decrescente":
        setFilteredProducts((prevFilteredProducts) =>
          [...prevFilteredProducts].sort((a, b) => b.value - a.value)
        );
        break;
      default:
        setFilteredProducts(products);
        break;
    }
  }, [selectedOrderBy]);

  return (
    <Container>
      <h1>Home</h1>

      <Select onChange={handleChangeCategory} value={selectedCategory}>
        <option value="" disabled hidden>
          Filtre por categoria
        </option>
        <option value="">Nenhum filtro</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </Select>

      <Select onChange={handleChangeOrderBy} value={selectedOrderBy}>
        <option value="" disabled hidden>
          Ordernar por...
        </option>
        {orderByOptions.map((option) => (
          <option key={option} value={option}>
            {option}
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
