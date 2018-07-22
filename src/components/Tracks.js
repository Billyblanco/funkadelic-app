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
  let { id } = this.props.track
  const newRating = { 
    rating: this.state.rating
  }
  axios.put(`/api/tracks/${id}`, newRating).then(results => {
    this.props.update(results.data)
  }) 
  
}

  render(props) {
    const { track } = this.props
    // console.log(this.props.track.artist)
    return (
    <div>
       
         <h4>Artist: {track.artist}</h4>
        <p>Song: {track.song}</p>
        <p>Genre: {track.genre}</p>
        <input value={this.state.rating} onChange={this.handleChangeRating}/>
      <button onClick={ () => {this.updateRating()}}></button>

  </div>

    );
  }
}
export default Tracks