import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    listOfPlaylists: [],
    playlistName: "",
    playlistID: [],
    playlistTracks: [],
  }

  createPlaylist = event => {
    const newPlaylist = event.target.value;
    this.setState({ playlistName: newPlaylist });
  }

  handleCreatePlaylist = () => {
    const body = {
      name: this.state.playlistName 
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', 
    body, {
      headers: {
        Authorization: 'camila-moura-mello'
      }
    }).then((response) => {
      console.log(response.data)
      alert(`Playlist ${this.state.playlistName} created successfully!`)
      this.setState ({ playlistName: "" })
    }).catch((error) => {
      alert(`Failed to create playlist`)
      console.log(error.response.data)
    })
  }

  getAllPlaylists = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
      headers: {
        Authorization: 'camila-moura-mello'
      }
    }).then ((response) => {
      this.setState({listOfPlaylists: response.data.result.list})

      const playlistID = this.state.listOfPlaylists.map(playlist => (
        playlist.id
      ))

      this.setState({ playlistID: playlistID })
    }).catch((error) => {
      console.log(error)
    })
  }

  getPlaylistTracks = (playlistId) => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`, {
      headers: {
        Authorization: 'camila-moura-mello'
      }
    }).then ((response) => {
      this.setState({playlistTracks: response.data.result.tracks})
      console.log(this.state.playlistTracks)
    }).catch((error) => {
      console.log(error)
    })
  }

  render () {
    return (
      <div className="App">
        <div>
          <form>
            <label htmlFor="playlistName">Create a playlist!</label>
            <input
              placeholder="Type playlist name here"
              type="text"
              value={this.state.playlistName}
              onChange={this.createPlaylist}
            />
            <button onClick={this.handleCreatePlaylist}>Create playlist</button>
          </form>
          <button onClick={this.getAllPlaylists}>See all playlists</button>
        </div>
        
        <div>
          {this.state.listOfPlaylists.map(playlist => (
            <div> 
              <li key={playlist}>{playlist.name}</li> 
              <button onClick={() => this.getPlaylistTracks(playlist.id)}>Details</button>
            </div>
          ))}

          {this.state.playlistTracks.map(track => (
            <li key={track}>{track.name}</li>
          ))}
        </div>
      </div>
  );
  }
}

export default App;
