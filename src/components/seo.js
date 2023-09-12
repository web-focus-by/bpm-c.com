/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )
  const defaultTitle = site.siteMetadata?.title
  const defaultDescr = title === 'Portfolio' ? 'Explore BPM Cloud\'s impressive portfolio showcasing impactful data-driven solutions across fintech, travel & leisure, music, and e-commerce. Witness the results of our expertly crafted work.' : title === 'Contacts' ? 'Reach out to BPM Cloud for a consultation on your web or mobile application concept. Your ideas will be carefully reviewed by our experts. Simply complete the form, and our team will promptly respond to you!' : site.siteMetadata.description



  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s — ${defaultTitle}` : null}
      meta={[
        {
          name: `robots`,
          content: `noindex, nofollow`,
        },
        {
          name: `description`,
          content: defaultDescr,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: defaultDescr,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: site.siteMetadata?.siteUrl,
        },
        {
          property: `og:image`,
          content: 'https://wp.bpm-c.com/wp-content/uploads/2022/08/logo.svg',
        },
        {
          property: `og:image:alt`,
          content: 'BPM Cloud logo',
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: defaultDescr,
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
