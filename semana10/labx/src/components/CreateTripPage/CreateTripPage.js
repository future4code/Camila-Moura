import React from "react";
import { useProtectedPage } from "./../../useProtectedPage";
/* import { HomeContainer, HomeLogo, HomeButton } from "./../../styles";
import logo from "./../../labx_logo.png"; */

function CreateTripPage() {
  useProtectedPage();

  return (
    <div>
      <p>Criar viagem</p>
    </div>
  );
}

export default CreateTripPage;
