import styled from "styled-components";
import nonna from "../assets/img/nonna.svg"

export default function Logo(){
    return(
        <LogoStyle>
            <TextStyle>
            <span className="red">Nonna</span><span className="green">Pizzeria</span>
            </TextStyle>
            <img src={nonna} alt=""></img>
        </LogoStyle>
    )
}

const LogoStyle = styled.h1`
font-family: "Saira Stencil One";
font-weight: 400;
font-size: 32px;
line-height: 50.37px;
color: #FFFFFF;
margin-bottom: 24px;
display: flex;
flex-direction: column;
align-items: center;
img{
    width:200px;
    height: 200px;
}
.red{
    color: #c04d46;
}
.green{
    color: #37674c;
}
`
const TextStyle = styled.div`
flex-direction:row;
`