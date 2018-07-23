import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import Tracks from './components/Tracks'
import Button from './components/Button'
import DeleteButton from './components/DeleteButton'

class App extends Component {
  constructor() {
    super()

    this.state = {
      tracks: [{
        artist: '',
        song: '',
        genre: '',
        rating: 0
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
    // console.log('AAA')
    const { artist, song, genre, rating } = this.state
    const newTrack = { artist, song, genre, rating }
    axios.post('/api/tracks', newTrack).then(results => {
      this.updateTracks(results.data)
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

  render() {
  // console.log(this.state.tracks)
  let tracksArray = []
  if (this.state.tracks.length > 0) {
    tracksArray = this.state.tracks.map (track => {
        return (
      <div className="master">
        {/* {console.log("track",track)} */}
        < Tracks track={ track } update={ this.updateTracks }/> 
        {/* <input onChange={this.handleRating}/> */}
        <DeleteButton deleteTracks={this.deleteTracks} id={track.id}/>
        {/* // <button onClick={ () => {this.deleteTracks(track.id)}}>DELETE TRACK</button> */}
      </div> 
      )
    })

  }
    return (
      
      <div>
    <h1 className="title"> Funkadelic </h1>
    <input type="text" placeholder={"Artist"} value={this.state.artist} onChange={this.handleArtist}></input>
    <input type="text" placeholder={"Song"} value={this.state.song} onChange={this.handleSong}></input>
    <input type="text" placeholder={"Genre"} value={this.state.genre} onChange={this.handleGenre}></input>
    
    
    <Button addTracks = {this.addTracks}/>
    {tracksArray}
    
      </div>
    );
  }
}

export default App;
