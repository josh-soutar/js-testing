import React from "react"
import Layout from "../components/layout"

import ScrollingTextBanner from "../components/molecules/ScrollingTextBanner"

const Scroller = () => {

  const scrolling_text = ["who", "even", "cares", "why", "am", "I", "doing", "this"]

  return (
    <Layout>
      <ScrollingTextBanner label="what" scrollingWords={scrolling_text} />
      <ScrollingTextBanner label="is" scrollingWords={scrolling_text} />
      <ScrollingTextBanner label="the" scrollingWords={scrolling_text} />
      <ScrollingTextBanner label="point" scrollingWords={scrolling_text} />
      <ScrollingTextBanner label="of" scrollingWords={scrolling_text} />
      <ScrollingTextBanner label="all" scrollingWords={scrolling_text} />
      <ScrollingTextBanner label="this?" scrollingWords={scrolling_text} />
    </Layout>
  )
}

export default Scroller
