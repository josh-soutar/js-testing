import React from "react"
import styled from "@xstyled/styled-components"

export default function ToDoDetails({ selectedToDo }) {

    const ToDoDetailsContainer = styled.div`
    flex-grow: 1;
    display: grid;
    border: 1px solid black;
    border-width: 1 1 1 0;
    height: 500px;
    padding: 1;
    `


    return (
        <ToDoDetailsContainer>
            received todo is: {JSON.stringify(selectedToDo)}
        </ToDoDetailsContainer>
    )

}