import React from "react"
import styled from "@xstyled/styled-components"

const Container = styled.div`
background-color: white;
display: flex;
font-family: tenor;
color: #213375;
padding: 130px;
`

const LeftCol = styled.div`
font-size: 40px;
flex-basis: 40%;
padding-right: 300px
`

const RightCol = styled.div`
font-size: 18px;
flex-basis: 40%;
`

export default function Section3() {

    return(
        <Container>
            <LeftCol>Sustainable family-friendly residences located on the island of Maui.</LeftCol>
            <RightCol>Usland pace is a slower pace - just right for you and your family to enjoy
                the rhythm of Makena. With expansive skies and glistening coastlines, enjoy our world-class service every step of the way.
                Makena Golf &amp; Beach Club is a members-only community that honors Makena's rich cultural and natural heritage
                and takes to hear a responsibility to support a sustainable future.
            </RightCol>

        </Container>
    )

}