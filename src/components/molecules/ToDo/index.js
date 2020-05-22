import React, { useState } from "react"
import styled from "@xstyled/styled-components"

import AddToDo from "../../atoms/AddToDo"
import ToDoList from "../ToDoList"

function ToDo({ selectToDo }) {
  const ToDoContainer = styled.div`
    flex-basis: 300px;    
    border: 1px solid black;
    padding: 10px;
  `

  let [todos, setToDos] = useState([
    { id: getUniqueID(), text: "Learn react" },
    { id: getUniqueID(), text: "make dat mooooooonay" },
  ])

  function addToDo(thisToDo) {
    thisToDo.id = getUniqueID()
    setToDos([...todos, thisToDo])
  }

  function getUniqueID() {
    return Math.ceil(Math.random() * 100000000)
  }

  function removeToDo(thisToDo) {
    setToDos(todos.filter(todo => todo.id !== thisToDo.id))
  }

  return (
    <ToDoContainer>
      <AddToDo onClick={addToDo} />
      <ToDoList todos={todos} removeToDo={removeToDo} selectToDo={selectToDo}></ToDoList>
    </ToDoContainer>
  )
}

export default ToDo
