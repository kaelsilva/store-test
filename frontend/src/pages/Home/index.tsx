import React, { useEffect, useState } from "react";
import { IProduct, ICart, ICartItem } from "../../common/types";
import CardProduct from "../../components/CardProduct";
import CartComponent from "../../components/Cart";
import { getProducts } from "../../services/products";
import {
  Container,
  Content,
  FiltersContainer,
  H1,
  Input,
  ProductsContainer,
  Select,
} from "./styles";

const Home: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedOrderBy, setSelectedOrderBy] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [cart, setCart] = useState<ICart>({ items: [], totalValue: 0 });
  const [search, setSearch] = useState<string>("");

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

  function handleChangeSearch(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    setSearch(event.target.value);
  }

  function addItemToCart({ itemId, itemValue }: ICartItem): void {
    const newCartItems = [...cart.items, { itemId, itemValue }].filter(
      (obj: ICartItem, index: number, self: ICartItem[]) =>
        index === self.findIndex((item) => item.itemId === obj.itemId)
    );

    setCart((prevCart) => ({
      ...prevCart,
      items: newCartItems,
    }));
  }

  function removeItemFromCart(itemId: string): void {
    setCart((prevCart) => ({
      ...prevCart,
      items: [...prevCart.items.filter((item) => item.itemId !== itemId)],
    }));
  }

  useEffect(() => {
    getProducts().then((response) => {
      const responseData = response.data;
      setProducts(responseData);
      setFilteredProducts(responseData);
      setCategories([
        ...new Set(responseData.map((product) => product.category)),
      ]);
    });
  }, []);

  useEffect(() => {
    if (!selectedCategory) {
      setSelectedOrderBy("");
    }

    if (selectedCategory) {
      const newFilteredProducts = selectedCategory
        ? products.filter((product) => product.category === selectedCategory)
        : products;

      return setFilteredProducts(newFilteredProducts);
    }
  }, [selectedCategory, search]);

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
  }, [selectedOrderBy, search]);

  useEffect(() => {
    setSelectedOrderBy("");
    setSelectedCategory("");

    const newfilteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredProducts(newfilteredProducts);
  }, [search]);

  useEffect(() => {
    const newTotalValue = cart.items.reduce(
      (total, currentItem) => total + currentItem.itemValue,
      0
    );

    setCart((prevCart) => ({ ...prevCart, totalValue: newTotalValue }));
  }, [cart.items]);

  return (
    <Container>
      <Content>
        <H1>Loja</H1>

        <FiltersContainer>
          <Input
            type="text"
            placeholder="Filtre por nome do produto"
            value={search}
            onChange={handleChangeSearch}
          />

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
        </FiltersContainer>
        <ProductsContainer>
          {filteredProducts.map((product) => (
            <CardProduct
              key={product.id}
              id={product.id}
              title={product.title}
              value={product.value}
              category={product.category}
              imageUrl={product.imageUrl}
              addItemToCart={addItemToCart}
              removeItemFromCart={removeItemFromCart}
              itemInCart={
                !!cart.items.find((item) => item.itemId === product.id)
              }
            />
          ))}
        </ProductsContainer>
      </Content>
      <CartComponent items={cart.items} totalValue={cart.totalValue} />
    </Container>
  );
};

export default Home;
