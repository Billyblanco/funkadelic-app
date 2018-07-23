import React from 'react'


export default function Button(props) {
   return (
     <div className="addTrackButton">
    <button onClick={props.addTracks } className="actualButton"><strong>ADD A TRACK!</strong></button>
  </div>
   )

}