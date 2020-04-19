import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <div style={{ color: `purple` }}>
      <Link to="/contact/">Contact</Link>

      <div>This should be a different colour</div>

      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  </Layout>
)
