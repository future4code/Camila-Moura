import React from "react";
import { useHistory } from "react-router-dom";

/* import { HomeContainer, HomeLogo, HomeButton } from "./../../styles";
import logo from "./../../labx_logo.png"; */

function LoginPage() {
  let history = useHistory();

  const goToListTripsPage = () => {
    history.push("/trips/list");
  };

  const goToCreateTripPage = () => {
    history.push("/trips/create");
  };

  const goToTripDetailsPage = () => {
    history.push("/trips/details");
  };

  return (
    <div>
      <p>Login</p>
      <button onClick={goToListTripsPage}>Ver lista de viagens</button>
      <button onClick={goToCreateTripPage}>Criar viagem</button>
      <button onClick={goToTripDetailsPage}>Ver detalhes de viagem</button>
    </div>
  );
}

export default LoginPage;
