import React, { useState } from "react"
import styled from "@xstyled/styled-components"


export default function AddToDo({ onClick }) {
  const [toDo, setToDoText] = useState({text: ""})


  function handleSubmit(event) {
    event.preventDefault();
    onClick(toDo)
    setToDoText({text: ""}) //reset value
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Add to do<br></br>
        <input type="text" placeholder="add to do" value={toDo.text} onChange={e => setToDoText({ 'text': e.target.value })} />
      </label>
      <input type="submit" value="Submit" disabled={toDo.text == ""} />      
    </form>
  )
}
