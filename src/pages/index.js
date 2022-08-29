import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/styles/index.module.css"

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const IndexPage = ({ location }) => {
  return (
    <>
    <Layout location={ location } crumbLabel="Main page" >
      <Seo title="Home" />
      <div className={styles.textCenter}>
        <p className={styles.intro}>
          <b>Example pages:</b>{" "}
          {samplePageLinks.map((link, i) => (
            <React.Fragment key={link.url}>
              <Link to={link.url}>{link.text}</Link>
              {i !== samplePageLinks.length - 1 && <> · </>}
            </React.Fragment>
          ))}
          <br />
          Edit <code>src/pages/index.js</code> to update this page.
        </p>
      </div>
    </Layout>
    </>
  )
}

export default IndexPage
