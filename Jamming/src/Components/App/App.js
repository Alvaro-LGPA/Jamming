
import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
//import TrackList from '../TrackList/TrackList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);

    this.state = {
      searchResults: [
        {
          name: 'name1',
          artist: 'artist1',
          album: 'album1',
          id: 'id1'
        },
        {
          name: 'name2',
          artist: 'artist2',
          album: 'album2',
          id: 'id2'
        },
        {
          name: 'name3',
          artist: 'artist3',
          album: 'album3',
          id: 'id3'
        }
      ],

      playlistName: 'MyAwesomePlaylist',

      playlistTracks: [{
        name: 'playlistName1',
        artist: 'artistName1',
        album: 'albumName1',
        id: '4'
      },
      {
        name: 'playlistName2',
        artist: 'artistName2',
        album: 'albumName2',
        id: '5'
      },
      {
        name: 'playlistNam3',
        artist: 'artistNam3',
        album: 'albumNam3',
        id: '6'
      },
      ]
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

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack} />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
            />
          </div>
        </div>
      </div>
    )
  }

}


export default App;
