import React from "react"
import styled from "@xstyled/styled-components"
import { Link } from "gatsby"

const StyledListItem = styled.li`
  display: inline-block;
  margin-right: 1rem;
`

const StyledHeader = styled.header`
  margin-bottom: 1.5rem;
`

const StyledUL = styled.ul`
  list-style: none;
  float: right;
`

const ListLink = props => (
  <StyledListItem>
    <Link to={props.to}>{props.children}</Link>
  </StyledListItem>
)

const Header = () => {
  return (
    <StyledHeader>
      
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>MySweetSite</h3>
      </Link>

      <StyledUL>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </StyledUL>

    </StyledHeader>
  )
}

export default Header
