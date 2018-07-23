import React from 'react'

export default function DeleteButton(props) {
  return (
    <div className="deleteButton">
   <button onClick={ () => {props.deleteTracks(props.id)}}>DELETE TRACK</button>
  </div>
  )

}