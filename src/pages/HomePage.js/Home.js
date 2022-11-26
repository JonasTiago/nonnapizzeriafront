import styled from "styled-components";
import Header from "../../components/Header";
import Section from "../../components/Section";

export default function Home() {
  return (
    <HomeStyle>
      <Header />
      <Section />
      <Section />
      <Section />
    </HomeStyle>
  );
}

const HomeStyle = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 4.8rem;
`;
