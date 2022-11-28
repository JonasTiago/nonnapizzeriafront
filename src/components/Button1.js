import styled from "styled-components";
import loading from "../assets/img/loading.svg"

export default function Button1({ text, disabled, isConfirmed, isFilled }) {
  if(isConfirmed || isFilled){
    return <Button1Style disabled={true}>{text}</Button1Style>;
  }
  
  return <Button1Style disabled={disabled}>{disabled ? <img src={loading} alt=""/> : `${text}`}</Button1Style>;
}

const Button1Style = styled.button`
  width: 326px;
  height: 46px;
  border: none;
  border-radius: 5px;
  background-color:  #37674c;
  font-family: "Saira Stencil One";
  font-weight: 700;
  font-size: 20px;
  line-height: 23.48px;
  color: white;
  margin-bottom: 36px;
  cursor: pointer;
  &:disabled{
    cursor: default;
  }
  img{
    width: 45px;
    height: 45px;

  }
`;