import React from 'react'

export default function DeleteButton(props) {
  return (
    <div className="deleteButton">
   <button onClick={ () => {props.deleteTracks(props.id)}} className="actualDelete"><strong>DELETE TRACK</strong></button>
  </div>
  )

}