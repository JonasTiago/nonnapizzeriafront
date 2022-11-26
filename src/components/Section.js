import { useEffect, useState } from "react";
import styled from "styled-components";
import { pizzas } from "../constant/productos";
import CardProduct from "./CardProduct";

export default function Section({ titulo }) {
  const [products, setProducts] = useState();

  useEffect(() => {
    setProducts(pizzas);
  }, []);

  return (
    <SectionStyle>
      <h2>{titulo}</h2>
      <div>
        {products?.map((product) => (
          <CardProduct product={product} key={product.id} />
        ))}
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
