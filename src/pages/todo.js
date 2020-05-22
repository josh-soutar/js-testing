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

    let [todo, setToDo] = useState({})

    function selectToDo(todo) {
        setToDo(todo)
    }

    return(    
    <Layout>
        <ToDoContainer>
            <ToDo selectToDo={selectToDo}/>
            <ToDoDetails selectedToDo={todo}/>            
        </ToDoContainer>
    </Layout>
    )
}