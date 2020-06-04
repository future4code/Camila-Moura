import React from 'react';
import styled from 'styled-components';
import './App.css';
import Post from './components/Post/Post';
import icon1 from './img/icon1.PNG';
import photo1 from './img/photo1.jpg';
import icon2 from './img/icon2.jpg';
import photo2 from './img/photo2.jpg';

const FormNovoPost = styled.input`
  display: block;
  border: 1px double black;
  margin-bottom: 3px;
  margin-top: 3px;
  width: 300px;
`
const Botao = styled.button`
  margin-bottom: 5px;
`

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },

      {
        nomeUsuario: 'b_scatulla',
        fotoUsuario: icon1,
        fotoPost: photo1
      },

      {
        nomeUsuario: 'joao.simoes',
        fotoUsuario: icon2,
        fotoPost: photo2
      }
    ],

    valorInputNome: "",
    valorInputIcon: "",
    valorInputPost: ""
  } 

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNome, 
      fotoUsuario: this.state.valorInputIcon,
      fotoPost: this.state.valorInputPost
    }

    const novosPosts = [...this.state.posts, novoPost]

    this.setState({posts: novosPosts})
  }

  onChangeInputNome = event => {
    this.setState({valorInputNome: event.target.value})
  }

  onChangeInputIcon = event => {
    this.setState({valorInputIcon: event.target.value})
  }

  onChangeInputPost = event => {
    this.setState({valorInputPost: event.target.value})
  }
  
  render() {
    const listaPosts = this.state.posts.map(post => {
      return (
      <div>
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      </div>
      );
    });

    return (
      <div className={'app-container'}>
        <div>
        <FormNovoPost
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNome}
            placeholder={"Username"}
        />
        <FormNovoPost
            value={this.state.valorInputIcon}
            onChange={this.onChangeInputIcon}
            placeholder={"Foto do usuário"}
          />
        <FormNovoPost
            value={this.state.valorInputPost}
            onChange={this.onChangeInputPost}
            placeholder={"Post"}
          />
        <Botao onClick={this.adicionaPost}>Postar foto!</Botao>
        </div>

       <div>{listaPosts}</div>
      </div>
    );
  }
}

export default App;
