import React from 'react'

function View(props) {
  return (
    <div>
        {props.info.map(i => <h1>{i}</h1>)}
        <button onClick={props.view}>Edit</button>
    </div>
  )
}

export default View