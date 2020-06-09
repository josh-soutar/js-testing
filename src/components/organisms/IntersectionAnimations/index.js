import React, { useState, useEffect } from "react"

import styled, { Box } from "@xstyled/styled-components"
import SlideUpWord from "../../molecules/SlideUpWord"
import Section2 from "../Section2"
import Section3 from "../Section3"
import Section4 from "../Section4"

import videoBackground from "../../../videos/homepage-vid.mp4"

const PageOne = styled.div`
  height: calc(100vh - 90px);
  background-color: lightblue;
  position: relative;
  font-family: tenor;
`

const PageOneTextPosition = styled.div`
  position: absolute;
  bottom: 0;
  padding: 10;
`

const StyledVideo = styled.video`
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
`



//Intersection observer should be it's own component

export default function IntersectionAnimations() {  

  //Create a component for each section (E.g. PageOne)

  return (
    <>
      <PageOne>
        <StyledVideo loop muted autoPlay>
          <source src={videoBackground} type="video/mp4" />
        </StyledVideo>

        <PageOneTextPosition>
          <Box row>
            <SlideUpWord delay="1000ms">Uniquely</SlideUpWord>
            <SlideUpWord delay="1050ms">Peaceful,</SlideUpWord>
          </Box>
          <Box row my={1}>
            <SlideUpWord delay="1600ms">Beautifully</SlideUpWord>
            <SlideUpWord delay="1650ms">Restful.</SlideUpWord>
          </Box>
          <Box row>
            <SlideUpWord delay="2100ms" fontSize="4">
              A discovery land company community
            </SlideUpWord>
          </Box>
        </PageOneTextPosition>
      </PageOne>

      <Section2 />

      <Section3 />

      <Section4 />



    </>
  )
}
