import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import Tracks from './components/Tracks'



class App extends Component {
  constructor() {
    super()

    this.state = {
      tracks: [{
        artist: '',
      }]
    }
  }

  componentDidMount () {
    axios.get("/api/tracks").then(results => {
      this.setState({
        tracks: results.data
      })
    })
  }
  addTracks = () => {
    console.log('AAA')
    const { artist, song, genre, rating } = this.state
    const newTrack = { artist, song, genre, rating }
    axios.post('/api/tracks', newTrack).then(results => {
      this.updateTracks(results.data)
    })
  }
  

  handleArtist = (e) => {
    this.setState({
      artist: e.target.value
    })
  }
  
  handleSong = (e) => {
    this.setState({
      song: e.target.value
    })
  }
  
  handleGenre = (e) => {
    this.setState({
      genre: e.target.value
    })
  }

  handleRating = (e) => {
    this.setState({
    rating: e.target.value
    })
  }

  updateTracks = (tracks) => {
    this.setState({ tracks })
  }

 deleteTracks = (id) => {
   axios.delete(`/api/tracks/${id}`).then(results => {
     this.setState({ 
       tracks: results.data
     })
   })
 }
  

  render() {
  console.log(this.state.tracks)
  let tracksArray = []
  if (this.state.tracks.length > 0) {
    tracksArray = this.state.tracks.map (track => {
      console.log(track)
     
  
        // <input onChange={this.handleRating}/>
        // <button onClick={ () => {this.deleteTracks(track.id)}}>DELETE TRACK</button>
        // <br/>
    
          {/* </div> */}
      return (
        < Tracks track={ track } update={ this.updateTracks }/> 
      )
    })

  }
    return (
      
      <div>
    <h1> Funkadelic </h1>
    <input type="text" placeholder={"Artist"} value={this.state.artist} onChange={this.handleArtist}></input>
    <input type="text" placeholder={"Song"} value={this.state.song} onChange={this.handleSong}></input>
    <input type="text" placeholder={"Genre"} value={this.state.genre} onChange={this.handleGenre}></input>
    
    
    <button onClick={this.addTracks }>ADD A TRACK!</button>
    {tracksArray}
    
      </div>
    );
  }
}

export default App;
