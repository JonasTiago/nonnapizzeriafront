import { useContext } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Section from "../../components/Section";
import { CartContext } from "../../contexts/CartContext";

export default function Home() {
  const { setOpenCart } = useContext(CartContext);

  console.log("teste");
  return (
    <>
      <Header />
      <HomeStyle onClick={() => setOpenCart(false)}>
        <Section titulo="Pizzas" />
        <Section titulo="Sobremesa" />
        <Section titulo="Bebidas" />
      </HomeStyle>
    </>
  );
}

const HomeStyle = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 4.8rem;
`;
