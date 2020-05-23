import React, { useEffect } from "react"

import styled from "@xstyled/styled-components"

const Root = styled.div`
background-color: yellow;
width: 100vw;
height: calc(2 * 100vh);
position: relative;
`

const IntersectionItem = styled.div`
position: absolute;
height: 50vh;
width: 100vw;
bottom: 0%;
background-color: green;
border: 2px solid yellow;
`
//https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API


export default function IntersectionAnimations() {
    let options = '';
    let observer = '';
    let target = '';

    function createObserver() {
        options = {
            root: null,//document.querySelector("#intersectionRoot"),
            rootMargin: "0px",
            threshold: 1.0 //triggering immediately for some strange reason????
        }
        
        observer = new IntersectionObserver(callback, options);
        target = document.querySelector("#triggerPls");
        observer.observe(target);
    }

    function callback(entries, observer) {
       
        entries.forEach(entry => {        
            console.log('entry details',entry);
            entry.target.style.backgroundColor = 'blue';
        })
    }

    useEffect(() => {
        createObserver()
    })

    

    return (
        <>
        <Root id='intersectionRoot'>

            <IntersectionItem id="triggerPls"></IntersectionItem>

        </Root>
        </>
    )

}