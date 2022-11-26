import styled from "styled-components";
import CardProduct from "./CardProduct";

export default function Section() {
  return (
    <SectionStyle>
      <h2>Promoção</h2>
      <div>
        <CardProduct />
        <CardProduct />
        <CardProduct />
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
