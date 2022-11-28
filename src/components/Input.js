import styled from "styled-components";

export default function Input({
  type,
  placeholder,
  value,
  onChange,
  disabled,
  step
}) {
  return (
    <InputStyle
      type={type}
      placeholder={`${placeholder}`}
      value={value}
      onChange={onChange}
      disabled={disabled}
      step={step}
    ></InputStyle>
  );
}

const InputStyle = styled.input`
  width: 326px;
  height: 58px;
  border-radius: 5px;
  font-family: "Saira Stencil One";
  font-weight: 400;
  font-size: 20px;
  line-height: 23.48px;
  display: block;
  margin-bottom: 13px;
  padding-left: 15px;
  box-sizing: border-box;
  ::placeholder {
    color: #000000;
    opacity: 1;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    
    -webkit-appearance: none;
    margin: 0; 
  }

  &[type="number"] {
    -moz-appearance: textfield; 
  }
  &:disabled {
    filter: brightness(0.8);
  }
`;
