import React from "react"
import Layout from "../components/layout"

import ScrollingTextBanner from "../components/molecules/ScrollingTextBanner"

const Scroller = () => {

  const scrolling_text = ["who", "even", "cares"]

  return (
    <Layout>
      <ScrollingTextBanner label="trending" scrollingWords={scrolling_text} />
    </Layout>
  )
}

export default Scroller
