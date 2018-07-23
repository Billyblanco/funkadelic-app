import React, { Component } from 'react'
import axios from 'axios'

class Tracks extends Component {
  constructor (props) {
    super(props)

    this.state = {
      rating: props.track.rating
    }
  }

handleChangeRating = (e) => {
  this.setState({
    rating: e.target.value
  })
}

updateRating = () => {
  const { id } = this.props.track
  const newRating = { 
    "rating": this.state.rating
  }
  axios.put(`/api/tracks/${id}`, newRating).then(results => {
    this.props.update(results.data)
  }) 
  
}

  render(props) {
    const { track } = this.props
    // console.log(this.props.track.artist)
    return (
    <div className="songList">
       
         <h4 className="artist">{track.artist}</h4>
         <hr></hr>
        <div className="songTitle"><p><strong>"{track.song}"</strong></p></div>
        <p>Genre: {track.genre}</p>
        <div className="rating">
        <p> Rating: {track.rating}/5 </p>
        </div>
        <input value={this.state.rating} onChange={this.handleChangeRating} className="inputNumber"/>
       <div className="updateButton">
      <button onClick={ () => {this.updateRating()}} className="rating"> CHANGE RATING </button>
        </div>
  </div>

    );
  }
}
export default Tracks