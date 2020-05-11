import React from "react"
import styled from "@xstyled/styled-components"
import { Link } from "gatsby"

const StyledListItem = styled.li`
  display: inline-block;
  margin-right: 1rem;
`

const StyledHeader = styled.header`
  margin-bottom: 1.5rem;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledUL = styled.ul`
  list-style: none;
`


const StyledHeaderLogo = styled.div`
  width: 50px;
  height: 50px;
  margin: 20px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml,%0A%3Csvg id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 408 466.9' width='2185' height='2500'%3E%3Cstyle%3E.st0%7Bfill:url(%23SVGID_1_)%7D.st1%7Bfill:url(%23SVGID_2_)%7D.st2%7Bfill:url(%23SVGID_3_)%7D.st3%7Bfill:url(%23SVGID_4_)%7D%3C/style%3E%3ClinearGradient id='SVGID_1_' gradientUnits='userSpaceOnUse' y1='112.094' x2='261.746' y2='112.094'%3E%3Cstop offset='0' stop-color='%2363be6b'/%3E%3Cstop offset='.506' stop-color='%235bbc6a'/%3E%3Cstop offset='1' stop-color='%234ab96a'/%3E%3C/linearGradient%3E%3Cpath class='st0' d='M261.7 142.3L15 1.3C11.9-.5 8-.4 5 1.4c-3.1 1.8-5 5-5 8.6 0 0 .1 13 .2 34.4l179.7 179.7 81.8-81.8z'/%3E%3ClinearGradient id='SVGID_2_' gradientUnits='userSpaceOnUse' x1='.152' y1='223.393' x2='179.896' y2='223.393'%3E%3Cstop offset='0' stop-color='%233ec6f2'/%3E%3Cstop offset='1' stop-color='%2345afe3'/%3E%3C/linearGradient%3E%3Cpath class='st1' d='M.2 44.4C.5 121.6 1.4 309 1.8 402.3L180 224.1.2 44.4z'/%3E%3ClinearGradient id='SVGID_3_' gradientUnits='userSpaceOnUse' x1='179.896' y1='229.464' x2='407.976' y2='229.464'%3E%3Cstop offset='0' stop-color='%23faa51a'/%3E%3Cstop offset='.387' stop-color='%23fab716'/%3E%3Cstop offset='.741' stop-color='%23fac412'/%3E%3Cstop offset='1' stop-color='%23fac80f'/%3E%3C/linearGradient%3E%3Cpath class='st2' d='M402.9 223l-141.2-80.7-81.9 81.8 92.4 92.4L403 240.3c3.1-1.8 5-5.1 5-8.6 0-3.6-2-6.9-5.1-8.7z'/%3E%3ClinearGradient id='SVGID_4_' gradientUnits='userSpaceOnUse' x1='1.744' y1='345.521' x2='272.296' y2='345.521'%3E%3Cstop offset='0' stop-color='%23ec3b50'/%3E%3Cstop offset='1' stop-color='%23e7515b'/%3E%3C/linearGradient%3E%3Cpath class='st3' d='M1.7 402.3c.2 33.3.3 54.6.3 54.6 0 3.6 1.9 6.9 5 8.6 3.1 1.8 6.9 1.8 10 0l255.3-148.9-92.4-92.4L1.7 402.3z'/%3E%3C/svg%3E");
`



const ListLink = props => (
  <StyledListItem>
    <Link to={props.to}>{props.children}</Link>
  </StyledListItem>
)

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` , display: 'flex' , alignItems: 'center'}}>
        <StyledHeaderLogo></StyledHeaderLogo>
        <h3 style={{ display: `inline` }}>My bombass website</h3>
      </Link>

      <StyledUL>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/scroller/">Scroller</ListLink>
        <ListLink to="/todo/">To Do</ListLink>
        <ListLink to="/todo/">Theme picker</ListLink>
      </StyledUL>
    </StyledHeader>
  )
}

export default Header
