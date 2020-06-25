import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useProtectedPage } from "./../../useProtectedPage";
import { useForm } from "./../../useForm";
import {
  Header,
  Title,
  ContentContainer,
  HeaderFirstButton,
  HeaderSecondButton,
  Logout,
  CreateTripContainer,
  CreateTripForm,
  CreateTripInput,
  FormDiv,
  PlanetSelect,
  DescriptionInput,
  CreateTripButton,
} from "./../../styles";

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/camila-mello";

function CreateTripPage() {
  let history = useHistory();
  useProtectedPage();

  const goToListTripsPage = () => {
    history.push("/trips/list");
  };

  const goToTripDetailsPage = () => {
    history.push("/trips/details");
  };

  const { form, onChange, resetForm } = useForm({
    name: "",
    date: "",
    durationInDays: "",
    planet: "",
    description: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token");

    const axiosConfig = {
      headers: {
        auth: token,
      },
    };

    console.log(form);

    try {
      const response = await axios.post(`${baseUrl}/trips`, form, axiosConfig);
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
        <HeaderFirstButton onClick={goToListTripsPage}>
          Lista de viagens
        </HeaderFirstButton>
        <HeaderSecondButton onClick={goToTripDetailsPage}>
          Ver detalhes
        </HeaderSecondButton>
        <Logout>Logout</Logout>
      </Header>
      <Title>Criar nova viagem</Title>
      <ContentContainer>
        <CreateTripContainer>
          <CreateTripForm onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome</label>
            <CreateTripInput
              name="name"
              value={form.name}
              onChange={handleInputChange}
              type="text"
              id="nome"
            />

            <label htmlFor="data">Data</label>
            <CreateTripInput
              name="date"
              value={form.date}
              onChange={handleInputChange}
              type="date"
              id="data"
            />

            <label htmlFor="duracao">Duração em dias</label>
            <CreateTripInput
              name="durationInDays"
              value={form.durationInDays}
              onChange={handleInputChange}
              type="number"
              id="duracao"
            />

            <FormDiv>
              <label htmlFor="planeta">Planeta</label>
              <PlanetSelect
                name="planet"
                value={form.planet}
                onChange={handleInputChange}
              >
                <option />
                <option>Mercúrio</option>
                <option>Vênus</option>
                <option>Marte</option>
                <option>Saturno</option>
                <option>Júpiter</option>
                <option>Urano</option>
                <option>Netuno</option>
                <option>Plutão</option>
              </PlanetSelect>

              <label htmlFor="descricao">Descrição</label>
              <DescriptionInput
                name="description"
                value={form.description}
                onChange={handleInputChange}
                type="text"
                id="descricao"
              />

              <CreateTripButton>Criar viagem</CreateTripButton>
            </FormDiv>
          </CreateTripForm>
        </CreateTripContainer>
      </ContentContainer>
    </div>
  );
}

export default CreateTripPage;
