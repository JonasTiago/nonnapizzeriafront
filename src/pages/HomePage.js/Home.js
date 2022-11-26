import styled from "styled-components";
import Header from "../../components/Header";
import Section from "../../components/Section";

export default function Home() {

  const pizzas = [
    {
      id: 1,
      product: "Pizza de Calabresa",
      description: "calabresa, musarela e molho de tomate!",
      price: "20,00",
    },
    {
      id: 2,
      product: "Pizza de Musarela",
      description: "calabresa, musarela e molho de tomate!",
      price: "15,00",
    },
    {
      id: 3,
      product: "Pizza de mista",
      description: "calabresa, musarela e molho de tomate!",
      price: "15,00",
    },
    {
      id: 4,
      product: "Pizza de frango",
      description: "calabresa, musarela e molho de tomate!",
      price: "20,00",
    },
    {
      id: 5,
      product: "Pizza de Milho",
      description: "calabresa, musarela e molho de tomate!",
      price: "30,00",
    },
  ];

  return (
    <HomeStyle>
      <Header />
      <Section pizzas={pizzas} />
      <Section pizzas={pizzas} />
    </HomeStyle>
  );
}

const HomeStyle = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 4.8rem;
`;
