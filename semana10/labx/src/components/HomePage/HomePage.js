import React from "react";
import { useHistory } from "react-router-dom";
import { HomeContainer, HomeLogo, HomeButton } from "./../../styles";
import logo from "./../../labx_logo.png";

function HomePage() {
  let history = useHistory();

  const goToApplicationForm = () => {
    history.push("/application-form");
  };

  const goToLoginPage = () => {
    history.push("/login");
  };
  return (
    <HomeContainer>
      <HomeLogo src={logo} alt={"Logo LabX"} />
      <div>
        <HomeButton onClick={goToApplicationForm}>
          Viagens disponíveis
        </HomeButton>
        <HomeButton onClick={goToLoginPage}>Fazer login</HomeButton>
      </div>
    </HomeContainer>
  );
}

export default HomePage;
