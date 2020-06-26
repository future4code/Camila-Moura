import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';

const Container = styled.div `
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  position: absolute;
  display:flex; 
  flex-direction: column;
  align-items: center;
  left: 20vw;
  height: 80vh;
  top: 5vh;
  width: 60vw;
`
const GriffyndorButton = styled.button`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 10px;
  margin: 10px; 
  width: 150px; 
  border: 2px solid #cf0a0a;
  border-radius: 10px;
  cursor: pointer;
`

const RavenclawButton = styled.button`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 10px;
  margin: 10px; 
  width: 150px; 
  border: 2px solid #160991;
  border-radius: 10px;
  cursor: pointer;
`

const HufflepuffButton = styled.button`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 10px;
  margin: 10px; 
  width: 150px; 
  border: 2px solid #e8c709;
  border-radius: 10px;
  cursor: pointer;
`
const SlytherinButton = styled.button`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 10px;
  margin: 10px; 
  width: 150px; 
  border: 2px solid #0b7d46;
  border-radius: 10px;
  cursor: pointer;
`

class App extends React.Component {
  state = {
    characters: [],
    charactersByHouse: [],
  }
  
  componentDidMount = () => {
    axios
      .get("https://www.potterapi.com/v1/characters?key=$2a$10$A3Fn2bDEJaxuLUgj4yLjQ.RcKtdHcGJudyISPot8WHB3d7in1Gaia")
      .then(response => {
        this.setState({characters: response.data})
      })
      . catch(err => {
        console.log(err);
      })
  }

  getGriffyndorCharacters = () => {
    let gryffindorCharacters = this.state.characters.filter(character => {
      return character.house === 'Gryffindor'
    })

    this.setState({charactersByHouse: gryffindorCharacters})
  }

  getRavenclawCharacters = () => {
    let ravenclawCharacters = this.state.characters.filter(character => {
      return character.house === 'Ravenclaw'
    })

    this.setState({charactersByHouse: ravenclawCharacters})
  }

  getHufflepuffCharacters = () => {
    let HufflepuffCharacters = this.state.characters.filter(character => {
      return character.house === 'Hufflepuff'
    })

    this.setState({charactersByHouse: HufflepuffCharacters})
  }

  getSlytherinCharacters = () => {
    let SlytherinCharacters = this.state.characters.filter(character => {
      return character.house === 'Slytherin'
    })

    this.setState({charactersByHouse: SlytherinCharacters})
  }

  render () {    
      return (
        <Container>
          <div>
            <GriffyndorButton onClick={this.getGriffyndorCharacters}>Griffyndor</GriffyndorButton>
            <RavenclawButton onClick={this.getRavenclawCharacters}>Ravenclaw</RavenclawButton>
            <HufflepuffButton onClick={this.getHufflepuffCharacters}>Hufflepuff</HufflepuffButton>
            <SlytherinButton onClick={this.getSlytherinCharacters}>Slytherin</SlytherinButton>
          </div>

          <div>
            <p>Choose an option to see the list of characters that belong to each house!</p>
            <ul>
              {this.state.charactersByHouse.map(character => (
                <li key={character}>{character.name}</li>
              ))}
            </ul>
        </div>
        </Container>
  );
  }
}

export default App;
