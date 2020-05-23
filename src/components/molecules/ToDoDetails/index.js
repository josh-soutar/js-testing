import React from "react"
import styled from "@xstyled/styled-components"

const ToDoDetailsContainer = styled.div`
flex-grow: 1;
display: grid;
border: 1px solid black;
border-width: 1 1 1 0;
padding: 1;
`


export default function ToDoDetails({ selectedToDo }) {


    const nothingSelected = selectedToDo == {} ? 'wtf' : 'idk'


    return (
        <ToDoDetailsContainer>

            received todo is: {JSON.stringify(selectedToDo)}
            <br></br>
            nothing selected: {nothingSelected}
        </ToDoDetailsContainer>
    )

}