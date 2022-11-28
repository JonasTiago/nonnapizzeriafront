import styled from "styled-components";
import Logo from "../../components/Logo";
import Input from "../../components/Input";
import Button1 from "../../components/Button1";
import BottomText from "../../components/BottomText";
import { Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function SignUpPage(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true)

    const promise1 = axios.post(
      "http://localhost:5000/sign-up",
      {
        name: name,
        email: email,
        password: password
      }
    );

    promise1.then(() =>
      navigate("/", {
      })
    );

    promise1.catch((error) => {
    alert(error.response.data.message)
    setIsLoading(false)
    })
    
  }


    return (
        <SignUpPageStyle>
          <Logo />
          <form onSubmit={handleSubmit}>
            <Input
              type={"text"}
              placeholder={"Nome"}
              onChange={(e) => setName(e.target.value)} disabled={isLoading}
            />
           <Input
              type={"email"}
              placeholder={"E-mail"}
              onChange={(e) => setEmail(e.target.value)} disabled={isLoading}
            />
            <Input
              type={"password"}
              placeholder={"Senha"}
              onChange={(e) => setPassword(e.target.value)} disabled={isLoading}
            />
            <Input
              type={"password"}
              placeholder={"Confirme a senha"}
              onChange={(e) => setConfirmedPassword(e.target.value)} disabled={isLoading}
            />
            <Button1 text={"Cadastrar"} disabled={isLoading} isConfirmed={password.length === 0 || password !== confirmedPassword}/>
          </form>
          <Link to="/">
            <BottomText text={"Já tem uma conta? Entre agora!"}/>
          </Link>
        </SignUpPageStyle>
      );
}



const SignUpPageStyle = styled.div`
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