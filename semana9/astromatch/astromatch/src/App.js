import React from "react";
import "./App.css";
import InitialScreen from "./components/InitialScreen/initialScreen.js";
import ClearMatches from "./components/ClearMatches/clearMatches";
import { MainContainer, ContentContainer, Logo } from "./styles.js";
import logo from "./astromatch.PNG";

function App() {
  return (
    <MainContainer>
      <ContentContainer>
        <header>
          <Logo src={logo} alt={"Logo Astromatch"} />
        </header>
        <InitialScreen />
      </ContentContainer>
      <ClearMatches />
    </MainContainer>
  );
}

export default App;
