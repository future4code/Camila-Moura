import React from "react";
import { useProtectedPage } from "./../../useProtectedPage";
/* import { HomeContainer, HomeLogo, HomeButton } from "./../../styles";
import logo from "./../../labx_logo.png"; */

function TripDetailsPage() {
  useProtectedPage();
  return (
    <div>
      <p>Detalhes de viagem</p>
    </div>
  );
}

export default TripDetailsPage;
