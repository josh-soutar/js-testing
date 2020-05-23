import React, { useState } from "react"
import styled from "@xstyled/styled-components"
import Layout from "../components/layout"

import ToDo from "../components/molecules/ToDo"
import ToDoDetails from "../components/molecules/ToDoDetails"

const ToDoContainer = styled.div`
    display: flex;
    width: 100%;
    `

export default function ToDoPage() {    

    let [todos, setToDos] = useState([
        { id: getUniqueID(), text: "Learn react" },
        { id: getUniqueID(), text: "make dat mooooooonay" },
        { id: getUniqueID(), text: "check out some babes" },
        { id: getUniqueID(), text: "have a bubble bath" },
        { id: getUniqueID(), text: "play video games" },
        { id: getUniqueID(), text: "think about red dead redemption" },
        { id: getUniqueID(), text: "brush my virtual horse" },
        { id: getUniqueID(), text: "contemplate the futility of life" },
        { id: getUniqueID(), text: "patrol the streets" },
        { id: getUniqueID(), text: "think about doing some exercise for a few hours" },
        { id: getUniqueID(), text: "decide that I don't want to do any exercise" },
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