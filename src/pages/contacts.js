import * as React from "react"
import Layout from "../components/layout"

const Contacts = ({ location }) => {
  let url = '';
  if (typeof window !== 'undefined') {
    url = new URL(window.location.href);
  } else {
    if (location && location.href) {
      url = new URL(location.href);
    }
  }
  return (
    <>
      <Layout>
        <div className="container">

        </div>
      </Layout>
    </>
  )
}

export default Contacts
