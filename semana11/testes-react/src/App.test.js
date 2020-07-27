import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("Ao colocar algo no input e postar, deve aparecer o post na tela", async () => {
  //preparação
  const { getByPlaceholderText, getByText, getByTestId } = render(<App />);

  const inputPost = getByPlaceholderText(/Novo Post/i);
  const botaoAdicionar = getByText(/Adicionar/i);

  //execução
  fireEvent.change(inputPost, { target: { value: "Olá" } });
  fireEvent.click(botaoAdicionar);

  //verificação
  let post = getByTestId(/inputUsuario/i);
  await wait(() => {
    expect(post).toHaveTextContent("Olá");
  });
});

test("Ao clicar em curtir, botão deve mudar para descurtir e vice-versa", async () => {
  //preparação
  const { getByPlaceholderText, getByText } = render(<App />);

  const inputPost = getByPlaceholderText(/Novo Post/i);
  const botaoAdicionar = getByText(/Adicionar/i);

  //execução
  fireEvent.change(inputPost, { target: { value: "Olá" } });
  fireEvent.click(botaoAdicionar);

  let botaoCurtir = getByText("Curtir");
  fireEvent.click(botaoCurtir);

  //verificação
  await wait(() => {
    expect(botaoCurtir).toHaveTextContent("Descurtir");
  });

  fireEvent.click(botaoCurtir);
  await wait(() => {
    expect(botaoCurtir).toHaveTextContent("Curtir");
  });
});

test("Ao clicar em apagar, post deve desaparecer da tela", async () => {
  //preparação
  const { getByPlaceholderText, getByText, queryByText } = render(<App />);

  const inputPost = getByPlaceholderText(/Novo Post/i);
  const botaoAdicionar = getByText(/Adicionar/i);

  //execução
  fireEvent.change(inputPost, { target: { value: "Olá" } });
  fireEvent.click(botaoAdicionar);

  let botaoApagar = getByText("Apagar");

  fireEvent.click(botaoApagar);

  //verificação
  await wait(() => {
    expect(queryByText("Olá")).not.toBeInTheDocument();
  });
});

test("Ao postar algo, input deve voltar ao placeholder 'Novo post'", async () => {
  //preparação
  const { getByPlaceholderText, getByText } = render(<App />);

  const inputPost = getByPlaceholderText(/Novo Post/i);
  const botaoAdicionar = getByText(/Adicionar/i);

  //execução
  fireEvent.change(inputPost, { target: { value: "Olá" } });
  fireEvent.click(botaoAdicionar);

  //verificação
  await wait(() => {
    expect(inputPost).toHaveTextContent("");
  });
});

test("Quando não tiver posts, o texto 'Nenhum post' deve aparecer", async () => {
  //preparação
  const { getByText } = render(<App />);

  const mensagem = getByText(/Nenhum post/i);

  //execução

  //verificação
  await wait(() => {
    expect(mensagem).toHaveTextContent("Nenhum post");
  });
});

test("Quando houverem posts, o texto com a quantidade de posts deve aparecer", async () => {
  const { getByPlaceholderText, getByText } = render(<App />);

  const inputPost = getByPlaceholderText(/Novo Post/i);
  const botaoAdicionar = getByText(/Adicionar/i);

  //execução
  fireEvent.change(inputPost, { target: { value: "Olá" } });
  fireEvent.click(botaoAdicionar);

  fireEvent.change(inputPost, { target: { value: "Oie" } });
  fireEvent.click(botaoAdicionar);

  //verificação
  let mensagem = getByText(/Quantidade de posts:/i);

  await wait(() => {
    expect(mensagem).toHaveTextContent("Quantidade de posts: 2");
  });
});

test("Ao tentar postar mensagem vazia, mensagem de erro deve aparecer", async () => {
  const { getByPlaceholderText, getByText } = render(<App />);

  const inputPost = getByPlaceholderText(/Novo Post/i);
  const botaoAdicionar = getByText(/Adicionar/i);

  //execução
  fireEvent.change(inputPost, { target: { value: "" } });
  fireEvent.click(botaoAdicionar);

  //verificação
  let mensagem = getByText(/Não é possível criar um post vazio/i);

  await wait(() => {
    expect(mensagem).toHaveTextContent("Não é possível criar um post vazio");
  });
});
