import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useProtectedPage } from "./../../useProtectedPage";
import {
  Header,
  ContentContainer,
  Title,
  TripsList,
  TripBox,
  TripTitle,
  HeaderFirstButton,
  HeaderSecondButton,
  Logout,
} from "./../../styles";

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/camila-mello";

function ListTripsPage() {
  const [listTrips, setListTrips] = useState([]);
  let history = useHistory();
  useProtectedPage();

  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = async () => {
    try {
      const response = await axios.get(`${baseUrl}/trips`);
      setListTrips(response.data.trips);
      console.log(response.data.trips);
    } catch (e) {
      alert("Falha ao carregar");
    }
  };

  const goToCreateTripPage = () => {
    history.push("/trips/create");
  };

  const goToTripDetailsPage = () => {
    history.push("/trips/details");
  };

  const logout = () => {
    window.localStorage.clear();
    history.push("/");
  };

  return (
    <div>
      <Header>
        <HeaderFirstButton onClick={goToCreateTripPage}>
          Criar viagem
        </HeaderFirstButton>
        <HeaderSecondButton onClick={goToTripDetailsPage}>
          Ver detalhes
        </HeaderSecondButton>
        <Logout onClick={logout}>Logout</Logout>
      </Header>
      <Title>Lista de Viagens</Title>

      <ContentContainer>
        <TripsList>
          {listTrips.map((trip) => {
            return (
              <TripBox>
                <TripTitle>{trip.name}</TripTitle>
                <p>Planeta: {trip.planet}</p>
                <span>
                  Data: {trip.date} | Duração: {trip.durationInDays} dias
                </span>
                <p>{trip.description}</p>
              </TripBox>
            );
          })}
        </TripsList>
      </ContentContainer>
    </div>
  );
}

export default ListTripsPage;
