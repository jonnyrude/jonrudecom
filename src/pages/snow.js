import React from "react"
import Styles from "../components/styles/snow.module.css"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import SEO from "../components/seo"

const SecondPage = () => (
  <div className={Styles.container}>
    {/* <SEO title="Page two" /> */}
    <h1>Alert for OM Employees</h1>
    <p>There are currently no delays.</p>
    <br />
    <p>or...</p>
    <h2 className={Styles.alert}>DELAY</h2>
    <p>For Friday February 7, 2020:</p>
    <p>There will be a 2 hour delay - we will open at 10:00 AM</p>
    {/* <Link to="/">Go back to the homepage</Link> */}
  </div>
)

export default SecondPage
