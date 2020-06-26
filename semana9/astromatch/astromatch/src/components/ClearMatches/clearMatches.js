import React from "react";
import axios from "axios";
import { ClearButton } from "../../styles.js";

function ClearMatches() {
  const clearMatches = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/camila-moura-mello/clear"
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <ClearButton onClick={clearMatches}>Limpar matches</ClearButton>;
}

export default ClearMatches;
