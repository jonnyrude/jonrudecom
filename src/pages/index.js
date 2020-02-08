import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi there!</h1>
    <p>I'm afraid there's nothing here yet, but I'm working on it.</p>
    <p>Please check back later.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/snow/">Go to the snow page</Link>
  </Layout>
)

export default IndexPage
