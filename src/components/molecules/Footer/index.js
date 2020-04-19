import React from "react"
import styled from "@xstyled/styled-components"
import { Link } from "gatsby"



const StyledFooter = styled.footer`
  background-color: grey;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
`

const Footer = () => {
  return (
    <StyledFooter>
      
      This is the footer

    </StyledFooter>
  )
}

export default Footer