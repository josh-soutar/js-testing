import React, { useState, useEffect } from "react"
import styled from "@xstyled/styled-components"

const WordContainer = styled.div`
position: relative;
overflow: hidden;
`

const EmptyBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
`

const WordBox = styled.box`
  color: white;
  font-size: 12;
  transition: transform 0.4s ease;
  transition-delay: ${props => props.delay || '0ms'};  
`

export default function SlideUpWord({ children, delay, fontSize }) {

    let [translateStyle, setTranslateStyle] = useState({ transform: "translateY(100%)", })

    useEffect(() => {
        setTranslateStyle(translateStyle = { transform: "translateY(0%)", })
    })

  return (
    <WordContainer>
      <EmptyBox></EmptyBox>
      <WordBox p={1} fontSize={fontSize} delay={delay} style={translateStyle}>{children}</WordBox>
    </WordContainer>
  )
}
