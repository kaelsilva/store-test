import React, { useEffect, useState } from "react";
import { IProduct, ICart, ICartItem } from "../../common/types";
import CardProduct from "../../components/CardProduct";
import CartComponent from "../../components/Cart";
import { getProducts } from "../../services/products";
import { Container, ProductsContainer, Select } from "./styles";

const Home: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedOrderBy, setSelectedOrderBy] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [cart, setCart] = useState<ICart>({ items: [], totalValue: 0 });

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

  useEffect(() => {
    const newTotalValue = cart.items.reduce(
      (total, currentItem) => total + currentItem.itemValue,
      0
    );

    setCart((prevCart) => ({ ...prevCart, totalValue: newTotalValue }));
  }, [cart.items]);

  return (
    <>
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
      </Container>
      <CartComponent items={cart.items} totalValue={cart.totalValue} />
    </>
  );
};

export default Home;
