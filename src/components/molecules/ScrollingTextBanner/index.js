import React, { useState } from "react"
import styled, { css, keyframes } from "@xstyled/styled-components"

const slideAnimation = keyframes`

  100% { transform: translateX(-50%); }
`

const slideCSS = css`
  animation: 20s ${slideAnimation} linear infinite;
`

const pauseAnimation = css`
animation-play-state: paused !important;
opacity: 1;
`

const innerContainerStyle = css`
  padding: 0 20px;
`

const ParentContainer = styled.div`
  display: flex;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  background-color: black;
  color: white;
  font-size: 30px;
  align-items: center;
  height: 80px;
  text-transform: lowercase;
`

const StyledLabel = styled.div`
  border-right: 1px solid white;
  border-right: 1px solid white;
  ${innerContainerStyle}
`

const ScrollingAreaContainer = styled.div`
  flex-grow: 1;
  ${innerContainerStyle}
  position: relative;
  height: 100%;
  overflow: hidden;  
`

const ScrollingWords = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  align-items: center;
  transform: translate3d(0,0,0);
  opacity: 0.5;
  transition: opacity 0.4s;
`

const ScrollingWord = styled.div`
  padding: 0 10px;
  height: 100%;
  display: flex;
  align-items: center;
  &:hover {
    color: red;
    cursor: pointer;
  }
`

function ScrollingTextBanner({ label, scrollingWords }) {
  let scrollingWordsRepeated = []
  const [hovering, setHovering] = useState(false);

  let repeatFactor = 10

  for (let i = 0; i < repeatFactor; i++) {
    scrollingWordsRepeated.push(...scrollingWords)
  }

  //Wrap each word in a class so we can style it
  let styledScrollingWords = scrollingWordsRepeated.map((thisWord, index) => (
    <ScrollingWord className="scrolling-word" key={index}>
      {thisWord}
    </ScrollingWord>
  ))

  return (
    <>
      <ParentContainer className="top-container">
        <StyledLabel>{label}</StyledLabel>
        <ScrollingAreaContainer className="scrolling-words-container" onMouseEnter={() => { setHovering(true) }} onMouseLeave={() => { setHovering(false) }}>
          <ScrollingWords className="scrollingWords" css={hovering ? [slideCSS, pauseAnimation] : slideCSS}>
            {styledScrollingWords}
          </ScrollingWords>
        </ScrollingAreaContainer>
      </ParentContainer>
      
    </>
  )
}

export default ScrollingTextBanner
