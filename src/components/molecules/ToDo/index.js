import React from "react"
import styled from "@xstyled/styled-components"

import AddToDo from "../../atoms/AddToDo"
import ToDoList from "../ToDoList"

function ToDo({ todos, selectToDo, removeToDo, addToDo }) {
  const ToDoContainer = styled.div`
    flex-basis: 300px;    
    border: 1px solid black;
    padding: 10px;
  `

  return (
    <ToDoContainer>
      <AddToDo onClick={addToDo} />
      <ToDoList todos={todos} removeToDo={removeToDo} selectToDo={selectToDo}></ToDoList>
    </ToDoContainer>
  )
}

export default ToDo
