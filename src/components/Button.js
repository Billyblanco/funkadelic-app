import React from 'react'


export default function Button(props) {
   return (
     <div className="addTrackButton">
    <button onClick={props.addTracks }>ADD A TRACK!</button>
  </div>
   )

}