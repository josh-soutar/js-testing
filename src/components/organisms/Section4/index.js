import React, { useState, useEffect } from "react"
import styled from "@xstyled/styled-components"
import { InView } from "react-intersection-observer"

import islandPic from "../../../images/island-pic.jpg"

const Container = styled.div`
height: 100vh;
background-image: url(${islandPic});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
`

export default function Section4() {
    return (<><Container /></>)
}