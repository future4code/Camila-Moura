import React from 'react';
import styled from 'styled-components';
import {DadosGerais} from './components/dadosGerais.js';
import {EnsinoSuperior} from './components/comEnsinoSuperior.js';
import {SemEnsinoSuperior} from './components/semEnsinoSuperior.js';
import {Agradecimento} from './components/agradecimento.js'
import './App.css';

const Botao = styled.button `
    position: absolute;
    left: 40%;
    top: 45%;
`

export class App extends React.Component {
  state = {
    etapa: 1,
  }

  renderizaTela = () => {
    switch (this.state.etapa) {
      case 1:
        return <DadosGerais />;
      case 2:
        return <EnsinoSuperior />;
      case 3:
        return <SemEnsinoSuperior />;
      case 4:
        return <Agradecimento />;
    }
  };

  proximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 })
  }
  
  render () {
    return (
      <div>
        {this.renderizaTela()}
        {this.state.etapa < 4 && <Botao onClick={this.proximaEtapa}>Próxima etapa</Botao>}
      </div>
    )
  }
}

export default App