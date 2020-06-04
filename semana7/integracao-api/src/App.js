import React from 'react';
import './App.css';
import styled from 'styled-components';
import SignUpPage from './components/SignUpPage.js';
import UsersListPage from './components/UsersListPage.js';

const ButtonChangePage = styled.button `
  position: absolute;
  top: 2vh;
  left: 2vw;
`

class App extends React.Component {
  state = {
    currentPage: 'signUp',
  }

  changePage = () => {
    if(this.state.currentPage === 'signUp') {
      this.setState({currentPage: 'usersList'});
    } else {
      this.setState({currentPage:'signUp'});
    }
  }
  
  render () {
      return (
        <div className='App'>
          {this.state.currentPage === 'signUp' ? <SignUpPage /> : <UsersListPage />}
          <ButtonChangePage onClick={this.changePage}>Troca de tela</ButtonChangePage>
        </div>
  );
  }
}

export default App;
