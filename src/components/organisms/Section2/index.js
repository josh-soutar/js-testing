import React from "react"
import styled, { css }  from "@xstyled/styled-components"
import { useInView } from "react-intersection-observer"
import palmBackground from "../../../images/palm-background.jpg"
import surfBabe from "../../../images/surf-girl.jpg"

const PageTwo = styled.div`
  background-image: url(${palmBackground});
  height: 100vh;
  position: relative;
  font-family: tenor;
`

const OuterContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 100px;
`

const LeftCol = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 65%;
  height: 100%;
`

const LeftBgImage = styled.div`
  background-image: url(${surfBabe});
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const RightCol = styled.div`
  background-color: white;
  position: absolute;
  width: 40%;  
  padding: 50px;
  top: 20%;
  bottom: 20%;
  right: 0;
`

const Content = styled.div`
opacity: 0;
transition: opacity 2s ease;

${props => props.inView && css`
opacity: 1;
`}
`

const Heading = styled.div`
font-size: 14px;
color: #a72c2a;
`

const BodyText = styled.div`
font-size: 38px;
padding: 30px 0;
color: #213375;
`

const Button = styled.div`
border: 1px solid #a72c2a;
padding: 20px;
color: #213375;
display: inline-block;
`

{
  /* Try to use grid to do this page layout? */
}

export default function Section2() {

  const [rightColRef, inView, entry] = useInView({    
    threshold: 1,
  })

  return (
    <>
      <PageTwo>
        <OuterContainer>

        
          <LeftCol>            
            <LeftBgImage></LeftBgImage>
          </LeftCol>

          <RightCol ref={rightColRef}>
            <Content inView={inView}>
            <Heading>WELCOME TO MAKENA</Heading>
            <BodyText>A breathtaking, <br />one-of-a-kind place to call home.</BodyText>
            <Button>EXPLORE </Button>
            </Content>
          </RightCol>
        

        </OuterContainer>
       
      </PageTwo>
    </>
  )
}
