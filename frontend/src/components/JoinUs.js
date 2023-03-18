import React from 'react'
import Option from './Option'
import "../CSS/home.css"


export default function JoinUs(props) {
  return (
    <div id="joinDiv">
      <div id="join" style={{ backgroundColor: props.color }}>
        <h1 id="joinHead">Join Our Community</h1>
        <div id="options">
          <Option choice="work" />
          <Option choice="hire" />
        </div>
      </div>
    </div>
  )
}
