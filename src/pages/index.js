import React from "react"
import Layout from "../components/layout"
import styled from "@xstyled/styled-components"
import { Link } from "gatsby"

const StyledListItem = styled.li`
  width: 30vw;
  height: 75px;
  border: 1px solid black;
  background-color: white;
  margin-bottom: 10px;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledUL = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 10px;
`

const HomepageBlock = props => (
  <StyledListItem>
    <Link to={props.to}>{props.children}</Link>
  </StyledListItem>
)

export default () => {
  return (
    <Layout>
      <StyledUL>

        <HomepageBlock to="/">Home</HomepageBlock>
        <HomepageBlock to="/about/">About</HomepageBlock>
        <HomepageBlock to="/intersection_effects">Intersetion</HomepageBlock>
        <HomepageBlock to="/scroller/">Scroller</HomepageBlock>
        <HomepageBlock to="/todo/">To Do</HomepageBlock>
        <HomepageBlock to="/testing/">Test page</HomepageBlock>
      </StyledUL>


      <div>
        Think like a sales person. Make this pretty and mobile compatible. Get it to a point where it could be demoed to chris hann.

        Look at the jobvite postings in the solution innovation cost center (3300). Look at the job requirements and build react demos that show what they're looking for.
      </div>
    </Layout>
  )
}
