import React, { useState, useEffect } from "react";
import axios from "axios";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import MatchesScreen from "../MatchesScreen/matchesScreen";
import {
  Icon,
  Profile,
  ProfileImage,
  ProfileName,
  ProfileBio,
  LikeButton,
  DislikeButton,
} from "../../styles.js";
import GroupIcon from "@material-ui/icons/Group";
import Like from "@material-ui/icons/Favorite";
import Dislike from "@material-ui/icons/Clear";

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

function InitialScreen() {
  const [personInfo, setPersonInfo] = useState({
    age: 0,
    name: "",
    photo: "",
    bio: "",
  });

  const [chooseScreen, setChooseScreen] = useState(0);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/camila-moura-mello/person"
      )
      .then((response) => {
        setPersonInfo(response.data.profile);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUserLike = () => {
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/camila-moura-mello/choose-person",
        {
          id: personInfo.id,
          choice: true,
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    getProfile();
  };

  const handleUserDislike = () => {
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/camila-moura-mello/choose-person",
        {
          id: personInfo.id,
          choice: false,
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    getProfile();
  };

  const handleScreenChange = () => {
    setChooseScreen(1);
  };

  let changeScreen = chooseScreen;

  if (chooseScreen !== 0) {
    console.log(chooseScreen);
    return <MatchesScreen backToInitialScreen={changeScreen} />;
  }

  return (
    <div>
      <MuiThemeProvider theme={MyTheme}>
        <Icon onClick={handleScreenChange}>
          <GroupIcon color="primary" />
        </Icon>
        <Profile>
          <ProfileImage src={personInfo.photo} alt={"Imagem de perfil"} />
          <span>
            <ProfileName>
              {personInfo.name}, {personInfo.age}
            </ProfileName>
          </span>
          <ProfileBio>{personInfo.bio}</ProfileBio>
        </Profile>

        <LikeButton onClick={handleUserLike}>
          <Like color="secondary" />
        </LikeButton>

        <DislikeButton onClick={handleUserDislike}>
          <Dislike color="primary" />
        </DislikeButton>
      </MuiThemeProvider>
    </div>
  );
}

export default InitialScreen;
