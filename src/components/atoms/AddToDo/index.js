import React from "react"

function AddToDo({ onClick }) {
  return (
    <>
      <input type="text" placeholder="add to do" />
      <input type="button" value="Add" onClick={onClick} />
    </>
  )
}

export default AddToDo
