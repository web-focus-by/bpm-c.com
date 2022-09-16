import * as React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"

const Contact = ({ location }) => {
  return (
    <>
      <Layout>
        <Hero location={ location } crumbLabel="Contacts"></Hero>
      </Layout>
    </>
  )
}

export default Contact
