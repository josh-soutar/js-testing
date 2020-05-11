import React from "react"
import styled from "@xstyled/styled-components"

import Header from "../components/molecules/Header"
import Footer from "../components/molecules/Footer"


import "./global.css"

const GlobalPageLayout = styled.div`
  position: relative;
  min-height: 100vh;
`

const BodyWrapper = styled.div`
  padding-bottom: 2.5rem; /* Footer height */
`

const Layout = ({ children }) => {
  return (
    <GlobalPageLayout className="GlobalPageLayout">
      <Header />
      
      <BodyWrapper>      
        {children}
      </BodyWrapper>

      <Footer />
    </GlobalPageLayout>
  )
}

export default Layout
