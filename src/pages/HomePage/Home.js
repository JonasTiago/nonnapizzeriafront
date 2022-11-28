import { useContext } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Section from "../../components/Section";
import ShoppingCart from "../../components/ShoppingCart";
import { CartContext } from "../../contexts/CartContext";

export default function Home() {
  const { setOpenCart } = useContext(CartContext);

  return (
    <>
      <Header />
      <HomeStyle onClick={() => setOpenCart(false)}>
        <Section titulo="Pizzas" />
        <Section titulo="Sobremesas" />
        <Section titulo="Bebidas" />
      </HomeStyle>
      <ShoppingCart />
    </>
  );
}

const HomeStyle = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 4.8rem;
`;
