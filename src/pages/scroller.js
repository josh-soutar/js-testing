import React from "react"
import Layout from "../components/layout"

import ScrollingTextBanner from "../components/molecules/ScrollingTextBanner"

const Scroller = () => {

  const scrolling_text = ["home", "blog", "reposts", "random", "contact"]

  return (
    <Layout>
      <ScrollingTextBanner label="pages" scrollingWords={scrolling_text} />
    </Layout>
  )
}

export default Scroller
