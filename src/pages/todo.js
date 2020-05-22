import React, { useState } from "react"
import styled from "@xstyled/styled-components"
import Layout from "../components/layout"

import ToDo from "../components/molecules/ToDo"
import ToDoDetails from "../components/molecules/ToDoDetails"

export default function ToDoPage() {

    const ToDoContainer = styled.div`
    display: flex;
    position: relative;
    padding: 0 1;
    `

    let [todos, setToDos] = useState([
        { id: getUniqueID(), text: "Learn react" },
        { id: getUniqueID(), text: "make dat mooooooonay" },
      ])

    let [selectedToDo, setSelectedToDo] = useState({})

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

    function selectToDo(todo) {
        setSelectedToDo(todo)
    }

    return(    
    <Layout>
        <ToDoContainer>
            <ToDo todos={todos} selectToDo={selectToDo} removeToDo={removeToDo} addToDo={addToDo}/>
            <ToDoDetails selectedToDo={selectedToDo}/>            
        </ToDoContainer>
    </Layout>
    )
}