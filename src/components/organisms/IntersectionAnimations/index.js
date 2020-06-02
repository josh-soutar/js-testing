import React, { useState, useEffect } from "react"

import styled, { Box } from "@xstyled/styled-components"
import SlideUpWord from "../../molecules/SlideUpWord"

const PageOne = styled.div`
  height: calc(100vh - 90px);
  width: 100vw;
  background-color: lightblue;
  position: relative;
`

const PageOneTextPosition = styled.div`
  position: absolute;
  bottom: 0;
  padding: 10;
`



const PageTwo = styled.div`
  width: 100vw;
  background-color: lightyellow;
  height: 200vh;
  position: relative;
`

const IntersectionItem = styled.div`
  height: 500px;
  width: 200px;
  left: 50%;
  transform: translateX(-50%);
  top: 10%;
  background-color: lightgreen;
  border: 2px solid black;
  transition: opacity 0.1s ease;
  position: absolute;
`

const IntersectionStatsTop = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const IntersectionStatsBottom = styled.div`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
`

//Intersection observer should be it's own component

export default function IntersectionAnimations() {
  let [intersectionRatio, setIntersectionRatio] = useState(0)

  let options,
    observer,
    target,
    prevRatio = ""

  function createObserver() {
    options = {
      root: null,
      rootMargin: "0px",
      threshold: generateThresholds(),
    }
    observer = new IntersectionObserver(callback, options)
    target = document.querySelector("#triggerPls") //update this to use a ref.
    observer.observe(target)
  }

  function generateThresholds() {
    let points = []
    for (let i = 0; i < 1; i += 0.1) {
      points.push(parseFloat(i.toFixed(2)))
    }
    return points
  }

  function callback(entries, observer) {
    entries.forEach(entry => {
      setIntersectionRatio(entry.intersectionRatio.toFixed(2))
      entry.target.style.opacity = intersectionRatio
      if (intersectionRatio < prevRatio) {
        //Scrolling up?
      }      
      prevRatio = intersectionRatio
    })
  }

  useEffect(() => {
    createObserver()
  })

  //Create a component for each section (E.g. PageOne)

  return (
    <>
      <PageOne>
        <PageOneTextPosition>

          <Box row>
            <SlideUpWord delay="1000ms">Uniquely</SlideUpWord><SlideUpWord delay="1100ms">Peaceful,</SlideUpWord>
          </Box>

          <Box row my={1}>
            <SlideUpWord delay="1400ms">Beautifully</SlideUpWord><SlideUpWord delay="1500ms">Restful.</SlideUpWord>
          </Box>
          
          <Box row>
            <SlideUpWord delay="2000ms" fontSize="4">A discovery land company community</SlideUpWord>
          </Box>

        </PageOneTextPosition>
      </PageOne>

      <PageTwo>
        <IntersectionItem id="triggerPls"> {/* useRef attribute*/}
          <IntersectionStatsTop>intersection ratio: {intersectionRatio}</IntersectionStatsTop>

          <IntersectionStatsBottom>
            intersection ratio: {intersectionRatio}
          </IntersectionStatsBottom>
        </IntersectionItem>
      </PageTwo>
    </>
  )
}
