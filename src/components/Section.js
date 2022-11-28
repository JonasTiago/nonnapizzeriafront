import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import BASE_URL from "../constant/Base_url";
import CardProduct from "./CardProduct";

export default function Section({ titulo }) {
  const [products, setProducts] = useState();
  

  useEffect(() => {
    const url = `${BASE_URL}?type=${titulo}`;
    axios
      .get(url)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((res) => console.log(res));
  }, [titulo]);

  return (
    <SectionStyle>
      <h2>{titulo}</h2>
      <div>
        {products?.map((product) => (
          <CardProduct product={product} key={product._id} />
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
