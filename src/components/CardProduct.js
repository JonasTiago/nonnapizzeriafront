import { useState } from "react";
import styled from "styled-components";
import BigCard from "./BigCard";

export default function CardProduct({product}) {
  const [highlight, setHighlight] = useState(false)

  return (
    <MiniCardStyle onClick={() => setHighlight(!highlight)}>
      <div >
        <h3>{product.product}</h3>
        <p>
          {product.description}
        </p>
        <span>R$ {product.price}</span>
      </div>
      <img
        src="https://media-cdn.tripadvisor.com/media/photo-s/16/5a/ea/95/marguerita.jpg"
        alt="pizza marguerita"
      />
      {highlight && <BigCard product={product}/>}
    </MiniCardStyle>
  );
}

const MiniCardStyle = styled.div`
background-color:#fefefe;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 10px 20px 10px 0;
  width: 48%;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 3px #00000056;
  align-items: center;

  &&:hover {
    box-shadow: 0 0 5px #667302;
  }

  > div {
    >h3 {
      font-size: 1.8rem;
      margin-bottom: 20px;
    }
    >p {
      font-size: 1.125rem;
      margin-bottom: 50px;
      margin-right: 5px;
    }
    >span {
      font-size: 1.325rem;
    }
  }

  >img {
    width: 35%;
    align-self: flex-end;
  }
`;
