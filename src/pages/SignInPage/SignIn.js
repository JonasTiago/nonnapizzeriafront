import styled from "styled-components";
import Logo from "../../components/Logo";
import Input from "../../components/Input";
import Button1 from "../../components/Button1";
import BottomText from "../../components/BottomText";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";  
import UserContext from "../../contexts/userContext";

export default function SignInPage(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setUserInfo, userInfo } = useContext(UserContext);

  useEffect(() => {
    const localData = userInfo;
    if (Object.keys(localData).length !== 0) {
      navigate("/extrato");
    } 
  });

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    const promise1 = axios.post(
      "http://localhost:5000/sign-in",
      {
        email: email,
        password: password,
      }
    );

    promise1.then((answer) => {
      setUserInfo(answer.data);
      navigate("/produtos");  
    });

    promise1.catch((error) => {
      alert(error.response.data.message);
      setIsLoading(false);
    });
  }

    return (
        <SignInPageStyle>
          <Logo />
          <form onSubmit={handleSubmit}>
            <Input
              type={"email"}
              placeholder={"E-mail"}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
            <Input
              type={"password"}
              placeholder={"Senha"}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
            <Button1 text={"Entrar"}/>
          </form>
          <Link to="/cadastro">
            <BottomText text={"Primeira vez? Cadastre-se!"}/>
          </Link>
        </SignInPageStyle>
      );
}


const SignInPageStyle = styled.div`
height: 100vh;
background-color: #e8994f;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
a{
    text-decoration: none;
}
`;