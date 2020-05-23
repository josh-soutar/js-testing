import React from "react"
import styled from "@xstyled/styled-components"
import { ThemeProvider } from "@xstyled/styled-components"

import Header from "../components/molecules/Header"
import Footer from "../components/molecules/Footer"

import "./global.css"

import theme from "./utils/theme"

const GlobalPageLayout = styled.div`
  position: relative;
  min-height: 100vh;
`

const BodyWrapper = styled.div`
min-height: calc(100% - 90px);
position: absolute;
width: 100%;
display: flex;
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalPageLayout className="GlobalPageLayout">
        <Header />

        <BodyWrapper className="BodyWrapper">{children}</BodyWrapper>
        
      </GlobalPageLayout>
    </ThemeProvider>
  )
}

export default Layout
