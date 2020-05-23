import React from "react"

import styled, { css } from "@xstyled/styled-components"


const FadeOnHover = css`
&:hover {
  cursor: pointer;
  background-color: backgroundHover;
}
`
const StyledUL = styled.ul`
  list-style: none;        
`

const StyledLI = styled.li`
display: flex;
align-items: center;
justify-content: space-between;
border: 1px solid black;
border-width: 0px 1px 1px 1px;
height: 50px;    
`

const LiText = styled.div`
flex-grow: 1;
height: 100%;
display: flex;
align-items: center;
padding-left: 1;
border-right: 1px solid black;
${FadeOnHover}
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`

const RemoveLiButton = styled.button`
font-weight: 900;
min-width: 50px;
height: 100%;
border: 0;
${FadeOnHover}
`

export default function ToDoList({ todos, removeToDo, selectToDo }) {

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
