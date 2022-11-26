import styled from "styled-components";
import CardProduct from "./CardProduct";

export default function Section({ pizzas }) {
  console.log(pizzas);
  return (
    <SectionStyle>
      <h2>Pizzas</h2>
      <div>{pizzas.map(product => <CardProduct product={product}/>)}
      </div>
    </SectionStyle>
  );
}

const SectionStyle = styled.section`
  margin: 2rem auto;
  h2 {
    font-size: 2rem;
    margin-bottom: 5px;
  }
  > div {
    display: flex;
    flex-wrap: wrap;
  }
`;
