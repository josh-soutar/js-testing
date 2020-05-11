import React, { useState } from "react"
import styled from "@xstyled/styled-components"

import AddToDo from "../../atoms/AddToDo"

const ToDoContainer = styled.div``

/*                                                                                                                                                                                               
                                                                                    tttt               hhhhhhh                                               kkkkkkkk                          
                                                                                 ttt:::t               h:::::h                                               k::::::k                          
                                                                                 t:::::t               h:::::h                                               k::::::k                          
                                                                                 t:::::t               h:::::h                                               k::::::k                          
rrrrr   rrrrrrrrr       eeeeeeeeeeee    aaaaaaaaaaaaa      ccccccccccccccccttttttt:::::ttttttt          h::::h hhhhh          ooooooooooo      ooooooooooo    k:::::k    kkkkkkk  ssssssssss   
r::::rrr:::::::::r    ee::::::::::::ee  a::::::::::::a   cc:::::::::::::::ct:::::::::::::::::t          h::::hh:::::hhh     oo:::::::::::oo  oo:::::::::::oo  k:::::k   k:::::k ss::::::::::s  
r:::::::::::::::::r  e::::::eeeee:::::eeaaaaaaaaa:::::a c:::::::::::::::::ct:::::::::::::::::t          h::::::::::::::hh  o:::::::::::::::oo:::::::::::::::o k:::::k  k:::::kss:::::::::::::s 
rr::::::rrrrr::::::re::::::e     e:::::e         a::::ac:::::::cccccc:::::ctttttt:::::::tttttt          h:::::::hhh::::::h o:::::ooooo:::::oo:::::ooooo:::::o k:::::k k:::::k s::::::ssss:::::s
 r:::::r     r:::::re:::::::eeeee::::::e  aaaaaaa:::::ac::::::c     ccccccc      t:::::t                h::::::h   h::::::ho::::o     o::::oo::::o     o::::o k::::::k:::::k   s:::::s  ssssss 
 r:::::r     rrrrrrre:::::::::::::::::e aa::::::::::::ac:::::c                   t:::::t                h:::::h     h:::::ho::::o     o::::oo::::o     o::::o k:::::::::::k      s::::::s      
 r:::::r            e::::::eeeeeeeeeee a::::aaaa::::::ac:::::c                   t:::::t                h:::::h     h:::::ho::::o     o::::oo::::o     o::::o k:::::::::::k         s::::::s   
 r:::::r            e:::::::e         a::::a    a:::::ac::::::c     ccccccc      t:::::t    tttttt      h:::::h     h:::::ho::::o     o::::oo::::o     o::::o k::::::k:::::k  ssssss   s:::::s 
 r:::::r            e::::::::e        a::::a    a:::::ac:::::::cccccc:::::c      t::::::tttt:::::t      h:::::h     h:::::ho:::::ooooo:::::oo:::::ooooo:::::ok::::::k k:::::k s:::::ssss::::::s
 r:::::r             e::::::::eeeeeeeea:::::aaaa::::::a c:::::::::::::::::c      tt::::::::::::::t      h:::::h     h:::::ho:::::::::::::::oo:::::::::::::::ok::::::k  k:::::ks::::::::::::::s 
 r:::::r              ee:::::::::::::e a::::::::::aa:::a cc:::::::::::::::c        tt:::::::::::tt      h:::::h     h:::::h oo:::::::::::oo  oo:::::::::::oo k::::::k   k:::::ks:::::::::::ss  
 rrrrrrr                eeeeeeeeeeeeee  aaaaaaaaaa  aaaa   cccccccccccccccc          ttttttttttt        hhhhhhh     hhhhhhh   ooooooooooo      ooooooooooo   kkkkkkkk    kkkkkkksssssssssss                                                                                                                                                                                            
*/

function ToDo() {
  const [todos, setTodos] = useState([
    { text: "Learn react" },
    { text: "make dat mooooooonay" },
  ])

  const addToDo = (e) => {
    console.log('adding to do',e.target.value)
  }

  return (
    <div>
      <ToDoContainer>This is the to do {JSON.stringify(todos)}</ToDoContainer>

      <AddToDo onClick={addToDo}/>
    </div>
  )
}

export default ToDo
