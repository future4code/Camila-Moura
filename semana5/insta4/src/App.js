import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import icon1 from './img/icon1.PNG';
import photo1 from './img/photo1.jpg';
import icon2 from './img/icon2.jpg';
import photo2 from './img/photo2.jpg';


class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'b_scatulla'}
          fotoUsuario={icon1}
          fotoPost={photo1}
        />

        <Post
          nomeUsuario={'joao.simoes'}
          fotoUsuario={icon2}
          fotoPost={photo2}
        />
      </div>
    );
  }
}

export default App;
