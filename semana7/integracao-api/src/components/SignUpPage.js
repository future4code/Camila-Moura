import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div `
  width: 30vw;
  height: 25vh;
  border: 1px solid black;
  position: absolute;
  left: 35vw;
  top: 37.5vh;
  padding: 10px;
`

const Input = styled.input`
  display: block;
  margin: auto;
`

const LabelInput = styled.label `
  line-height: 34px;
`

const ButtonSave = styled.button `
  margin-top: 15px; 
`

class SignUpPage extends React.Component {
    state = {
        name: '',
        email: '',
    }

    onChangeInputName = event => {
        this.setState({name: event.target.value})
    };
    
    onChangeInputEmail = event => {
        this.setState({email: event.target.value})
    };

    saveUserData = () => {
      const axiosConfig = {
        headers: {
          Authorization: "camila-moura-mello"
        }
      };  
      
      const body = {
          name: this.state.name,
          email: this.state.email
        };
    
        axios
          .post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
          body,
          axiosConfig
          )
          .then(response => {
            alert("Usuário criado com sucesso")
            this.setState({ name: ""});
            this.setState({ email: ""});
          })
          .catch(e => {
            alert("Falha ao criar usuário")
          })
     }

    render () {
        return (
        <div>
            <Container>
                <form>
                  <LabelInput htmlFor="name">Nome: </LabelInput>
                  <Input 
                    id="name"
                    value={this.state.name}
                    onChange={this.onChangeInputName}
                  />

                  <LabelInput htmlFor="email">Email: </LabelInput>
                  <Input 
                    id="email"
                    value={this.state.email}
                    onChange={this.onChangeInputEmail}
                  />

                  <ButtonSave onClick={this.saveUserData}>Salvar</ButtonSave>
                </form>
            </Container>

        </div>
        )
    }
}

export default SignUpPage