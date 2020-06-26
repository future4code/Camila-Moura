import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  Header,
  ContentContainer,
  HeaderFirstButton,
  HeaderSecondButton,
  Logout,
  Title,
  ApplicationTripBox,
  TripTitle,
  ApplicationTrips,
} from "./../../styles";

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/camila-mello";

function TripDetailsPage() {
  const [listTrips, setListTrips] = useState([]);
  let history = useHistory();

  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = async () => {
    try {
      const response = await axios.get(`${baseUrl}/trips`);
      setListTrips(response.data.trips);
    } catch (e) {
      alert("Falha ao carregar");
    }
  };

  const goToListTripsPage = () => {
    history.push("/trips/list");
  };

  const goToCreateTripPage = () => {
    history.push("/trips/create");
  };

  const logout = () => {
    window.localStorage.clear();
    history.push("/");
  };

  return (
    <div>
      <Header>
        <HeaderFirstButton onClick={goToListTripsPage}>
          Lista de viagens
        </HeaderFirstButton>
        <HeaderSecondButton onClick={goToCreateTripPage}>
          Criar viagem
        </HeaderSecondButton>
        <Logout onClick={logout}>Logout</Logout>
      </Header>
      <Title>Candidatos</Title>

      <ContentContainer>
        <ApplicationTrips>
          {listTrips.map((trip) => {
            return (
              <ApplicationTripBox>
                <TripTitle>{trip.name}</TripTitle>
              </ApplicationTripBox>
            );
          })}
        </ApplicationTrips>
      </ContentContainer>
    </div>
  );
}

export default TripDetailsPage;
