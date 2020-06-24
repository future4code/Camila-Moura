import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Header,
  HeaderFirstButton,
  HeaderSecondButton,
  LoginContainer,
  LoginForm,
  LoginInput,
  LoginButton,
} from "./../../styles";
import axios from "axios";

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/camila-mello";

function LoginPage() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    const body = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(`${baseUrl}/login`, body);
      localStorage.setItem("token", response.data.token);
      history.push("/trips/list");
    } catch (e) {
      alert("Falha no login");
    }
  };

  const goToHomePage = () => {
    history.push("/");
  };

  const goToApplicationPage = () => {
    history.push("/application-form");
  };

  return (
    <div>
      <Header>
        <HeaderFirstButton onClick={goToHomePage}>Home</HeaderFirstButton>
        <HeaderSecondButton onClick={goToApplicationPage}>
          Viagens
        </HeaderSecondButton>
      </Header>
      <LoginContainer>
        <h2>Fazer login</h2>

        <LoginForm>
          <label htmlFor="email">E-mail</label>
          <LoginInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
          />

          <label htmlFor="senha">Senha</label>
          <LoginInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="senha"
          />
          <LoginButton onClick={handleLogin}>Login</LoginButton>
        </LoginForm>
      </LoginContainer>
    </div>
  );
}

export default LoginPage;
