import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import axios from "axios";

describe("Renderização inicial", () => {
  test("Input existe na tela", () => {
    const { getByPlaceholderText } = render(<App />);

    const input = getByPlaceholderText("Insira tarefa");

    // Verifica se o input está no document
    expect(input).toBeInTheDocument();
  });

  test("Botao existe na tela", () => {
    const { getByText } = render(<App />);

    expect(getByText(/Criar tarefa/)).toBeInTheDocument();
  });

  test("Renderiza dados corretamente", async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
          day: "quinta",
          text: "Caminhar",
          id: "opKfhCeWzmaLObhSoOFa",
        },
      ],
    });
    const { getByPlaceholderText, findByText, getByText } = render(<App />);

    const input = getByPlaceholderText("Insira tarefa");
    expect(input).toBeInTheDocument();

    expect(getByText(/Criar tarefa/)).toBeInTheDocument();

    expect(axios.get).toHaveBeenCalled();

    const tarefa = await findByText("Caminhar");
    expect(tarefa).toBeInTheDocument();
  });
});

describe("Criar uma tarefa", () => {
  test("Cria a tarefa na segunda feira com sucesso", () => {
    axios.post = jest.fn().mockResolvedValue();

    const {
      getByPlaceholderText,
      getByText,
      getByLabelText,
      queryByText,
    } = render(<App />);

    const input = getByPlaceholderText("Insira tarefa");

    fireEvent.change(input, {
      target: {
        value: "Natação",
      },
    });

    expect(input).toHaveValue("Natação");

    const select = getByLabelText(/Dia/i);

    userEvent.selectOptions(select, queryByText(/Segunda-Feira/).value);

    const button = getByText(/Criar tarefa/);
    fireEvent.click(button);

    expect(axios.post).toHaveBeenCalledWith(
      "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-camila",
      {
        text: "Natação",
        day: "segunda",
      }
    );
    wait(() => expect(getByText(/Natação/)).toBeInTheDocument());
    wait(() => expect(input).toHaveValue(""));
  });
});
