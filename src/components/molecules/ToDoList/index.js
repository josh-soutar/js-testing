import React from "react"

import styled from "@xstyled/styled-components"

export default function ToDoList({ todos, removeToDo, selectToDo }) {

  

  const StyledUL = styled.ul`
    list-style: none;        
  `

  const StyledLI = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  border-width: ${props => props.first ? "0px 1px 1px 1px" : "0px 1px 1px 1px"};
  padding: 20px 15px;
`

const LiText = styled.div`
`

const RemoveLiButton = styled.button`
padding: 1;
font-weight: 900;
&:hover {
  background-color: backgroundHover;
  cursor: pointer;
} 
`

  let toDoItem = todos.map((thisToDo, index) => (    
    <StyledLI key={thisToDo.id} first={index+1 === 1}>
      <LiText onClick={() => selectToDo(thisToDo)}>{index+1}. {thisToDo.text}</LiText>
      <RemoveLiButton onClick={() => removeToDo(thisToDo)}>X</RemoveLiButton>
    </StyledLI>
  ))

  return (
  <StyledUL>{toDoItem}</StyledUL>
  )

}
