import React, { useState } from "react"
import styled, { css } from "@xstyled/styled-components"


export default function AddToDo({ onClick }) {
  const [toDo, setToDoText] = useState({text: ""})

  const sharedStyle = css`
  padding: 1;
  font-size: 3;
  `

  const StyledForm = styled.div`
  display: flex;

  `

  const StyledTextInput = styled.input`
  flex-grow: 1;
  border: 1px solid black;
  border-width: 1 1 1 1;
  ${sharedStyle}
  `

  const StyledButtonInput = styled.input`
  width: 75px;
  border: 1px solid black;
  border-width: 1 1 1 0;
  ${sharedStyle}
  &:hover {
    cursor: ${props => props.disabled ? "default" : "pointer"};
    background-color: ${props => props.disabled ? "inherit" : "green"};
  }
  `


  function handleSubmit(event) {
    event.preventDefault();
    onClick(toDo)
    setToDoText({text: ""}) //reset value
  }

  return (
    <StyledForm  as="form" onSubmit={handleSubmit}>
      <StyledTextInput type="text" placeholder="add to do" value={toDo.text} onChange={e => setToDoText({ 'text': e.target.value })} />
      <StyledButtonInput type="submit" value="Submit" disabled={toDo.text === ""} />      
    </StyledForm>
  )
}
