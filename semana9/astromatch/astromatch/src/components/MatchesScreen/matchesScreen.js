import React, { useState, useEffect } from "react";
import InitialScreen from "../InitialScreen/initialScreen";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { MatchesList, BackButton, MatchIcon, MatchInfo } from "../../styles.js";
import axios from "axios";
import Back from "@material-ui/icons/Reply";

const MyTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF6358",
    },
    secondary: {
      main: "#179C4E",
    },
  },
});

function MatchesScreen(props) {
  const [match, setMatch] = useState([]);
  const [chooseScreen, setChooseScreen] = useState(props.backToInitialScreen);

  useEffect(() => {
    getMatches();
  }, []);

  const getMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/camila-moura-mello/matches"
      )
      .then((response) => {
        setMatch(response.data.matches);
        console.log(response.data.matches);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleScreenChange = () => {
    setChooseScreen(0);
  };

  if (chooseScreen === 0) {
    return <InitialScreen />;
  }

  return (
    <MuiThemeProvider theme={MyTheme}>
      <MatchesList>
        {match.map((match) => {
          return (
            <MatchInfo>
              <MatchIcon src={match.photo} alt={"Foto"} />
              <span>{match.name}</span>
            </MatchInfo>
          );
        })}
      </MatchesList>

      <BackButton onClick={handleScreenChange}>
        <Back color="primary" />
      </BackButton>
    </MuiThemeProvider>
  );
}

export default MatchesScreen;
