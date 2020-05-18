import React from "react"

import styled from "@xstyled/styled-components"

export default function ToDoList({ todos }) {
  const StyledUL = styled.ul`
    list-style: none;    
    background-color: lightgrey;
  `

  const StyledLI = styled.li`
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    padding: 20px;
  `

  const liText = styled.div`
    color: blue;
  `

  const removeLiButton = styled.button`color: green;`

  

  let styledToDo = todos.map((thisToDo, index) => (
    <StyledLI key={index}>
      <liText>{thisToDo.text}</liText>
      <removeLiButton >X</removeLiButton>
    </StyledLI>
  ))

  return <StyledUL>{styledToDo}</StyledUL>
}
