
import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

import Spotify from '../../util/Spotify';

//import TrackList from '../TrackList/TrackList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);

    this.state = {
      searchResults: [],

      playlistName: 'MyAwesomePlaylist',

      playlistTracks: []
    }
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;

    if (tracks.some(element => element.id === track.id)) {
      return;
    } else {
      tracks.push(track)
      this.setState({ playlistTracks: tracks })
    };

  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(element => element.id !== track.id);

    this.setState({ playlistTracks: tracks });
  }

  updatePlaylistName(newName) {
    this.setState({ playlistName: newName })
  }

  savePlaylist(playlistName, tracksURIs) {
    playlistName = this.state.playlistName;
    tracksURIs = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, tracksURIs).then(() => {
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      })
    } )
    }
   
  

  search(term){
     Spotify.search(term).then(searchResults => { // returns a promise that then is named searchResults to be used to setState
      
     this.setState({searchResults: searchResults})
    })
  
 
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack} />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    )
  }

}


export default App;
