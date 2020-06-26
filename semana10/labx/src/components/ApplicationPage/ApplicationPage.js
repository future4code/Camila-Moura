import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useForm } from "./../../useForm";
import { paises } from "./paises";
import {
  Header,
  ContentContainer,
  Title,
  ApplicationTripBox,
  TripTitle,
  HeaderFirstButton,
  ApplicationTrips,
  ApplicationFormContainer,
  ApplicationForm,
  ApplicationFormInput,
  Select,
  CreateTripButton,
} from "./../../styles";

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/camila-mello";

function ApplicationPage() {
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

  const goToHomePage = () => {
    history.push("/");
  };

  const { form, onChange, resetForm } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
    trip: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${baseUrl}/trips/${form.trip}/apply`,
        form
      );
      console.log(response);
    } catch (e) {
      console.log(e);
    }

    resetForm();
    console.log(form);
  };

  return (
    <div>
      <Header>
        <HeaderFirstButton onClick={goToHomePage}>Home</HeaderFirstButton>
      </Header>
      <Title>Viagens disponíveis</Title>

      <ContentContainer>
        <ApplicationTrips>
          {listTrips.map((trip) => {
            return (
              <ApplicationTripBox>
                <TripTitle>{trip.name}</TripTitle>
                <p>Planeta: {trip.planet}</p>
                <span>
                  Data: {trip.date} | Duração: {trip.durationInDays} dias
                </span>
                <p>{trip.description}</p>
              </ApplicationTripBox>
            );
          })}
        </ApplicationTrips>
        <ApplicationFormContainer>
          <ApplicationForm onSubmit={handleSubmit}>
            <label htmlFor="name">Nome</label>
            <ApplicationFormInput
              required
              name="name"
              value={form.name}
              pattern="[A-Za-z ]{5,}"
              onChange={handleInputChange}
              type="text"
              id="name"
            />

            <label htmlFor="age">Idade</label>
            <ApplicationFormInput
              required
              name="age"
              value={form.age}
              onChange={handleInputChange}
              type="number"
              id="age"
            />

            <label htmlFor="applicationText">
              O que te motiva a ir na viagem?
            </label>
            <ApplicationFormInput
              required
              name="applicationText"
              value={form.applicationText}
              onChange={handleInputChange}
              type="text"
              id="applicationText"
            />

            <label htmlFor="profession">Profissão</label>
            <ApplicationFormInput
              required
              name="profession"
              value={form.profession}
              pattern="[A-Za-z ]{5,}"
              onChange={handleInputChange}
              type="text"
              id="profession"
            />

            <label htmlFor="trip">Viagem</label>
            <Select
              required
              name="trip"
              value={form.trip}
              onChange={handleInputChange}
            >
              {listTrips.map((trip) => {
                return (
                  <option value={trip.id}>
                    {trip.name} - {trip.planet}
                  </option>
                );
              })}
            </Select>

            <label htmlFor="country">País</label>
            <Select
              required
              name="country"
              value={form.country}
              onChange={handleInputChange}
            >
              {paises.map((item) => {
                return <option>{item.Pais}</option>;
              })}
            </Select>
            <CreateTripButton>Enviar candidatura</CreateTripButton>
          </ApplicationForm>
        </ApplicationFormContainer>
      </ContentContainer>
    </div>
  );
}

export default ApplicationPage;
