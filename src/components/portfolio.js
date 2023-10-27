import * as React from "react"
import PropTypes from "prop-types"
import { useEffect, useRef } from "react"
import { Link } from "gatsby"

import "../components/styles/main.scss"
import "../components/styles/icons.scss"
import "../components/styles/modules.scss"
import "../components/styles/mixins.scss"
import "../components/styles/media_1920.scss"
import "../components/styles/media_1366.scss"
import "../components/styles/media_1024.scss"
import "../components/styles/media_768.scss"
import "../components/styles/media_375.scss"

const Portfolio = ({ posts }) => {
  const refCases = useRef([])

  useEffect(() => {
    refCases.current = refCases.current.slice(0, posts.length)
    document.addEventListener(
      "mouseover",
      e => {
        let currentCase =
          refCases &&
          refCases.current &&
          refCases.current.filter(
            refCase => refCase && refCase.contains(e.target)
          )
            ? refCases.current.filter(
                refCase => refCase && refCase.contains(e.target)
              )[0]
            : null
        if (currentCase && refCases.current.includes(currentCase)) {
          document
            .getElementById(currentCase.id)
            .getElementsByClassName("portfolio_products_block_title")[0]
            .children[0].classList.add("portfolio_link")
          document
            .getElementById(currentCase.id)
            .getElementsByClassName("portfolio_products_block_title")[0]
            .children[0].classList.remove("class_link")
        }
      },
      true
    )
    document.addEventListener(
      "mouseout",
      e => {
        let currentCase =
          refCases &&
          refCases.current &&
          refCases.current.filter(
            refCase => refCase && refCase.contains(e.target)
          )
            ? refCases.current.filter(
                refCase => refCase && refCase.contains(e.target)
              )[0]
            : null
        if (currentCase && refCases.current.includes(currentCase)) {
          document
            .getElementById(currentCase.id)
            .getElementsByClassName("portfolio_products_block_title")[0]
            .children[0].classList.add("class_link")
          document
            .getElementById(currentCase.id)
            .getElementsByClassName("portfolio_products_block_title")[0]
            .children[0].classList.remove("portfolio_link")
        }
      },
      true
    )
    return () => {
      document.removeEventListener(
        "mouseover",
        e => {
          let currentCase =
            refCases &&
            refCases.current &&
            refCases.current.filter(
              refCase => refCase && refCase.contains(e.target)
            )
              ? refCases.current.filter(
                  refCase => refCase && refCase.contains(e.target)
                )[0]
              : null
          if (currentCase && refCases.current.includes(currentCase)) {
            document
              .getElementById(currentCase.id)
              .getElementsByClassName("portfolio_products_block_title")[0]
              .children[0].classList.add("portfolio_link")
            document
              .getElementById(currentCase.id)
              .getElementsByClassName("portfolio_products_block_title")[0]
              .children[0].classList.remove("class_link")
          }
        },
        true
      )
    }
  }, [posts])

  const items = posts.map((post, index) => {
    if (index <= 5) {
      let tags = []
      if (post && post.node.tags) {
        tags = post.node.tags.nodes.map(tag => {
          let valueTag = tag.slug.replace('-', ' ')
          let tagVal
          if(tag.slug === 'ux-ui-design') {
            tagVal = 'UX/UI-design';
          } else {
            tagVal = valueTag.charAt(0).toUpperCase() + valueTag.slice(1)
          }
          return (
            <li
              key={post.node.id.toString() + valueTag.toString()}
              className="hash_list_block"
            >
              <Link to={"/tag/" + tag.slug + "/"} >{tagVal}</Link>
            </li>
          )
        })
      }
      return (
        <div
          key={"portfolio_item" + post.node.id}
          id={post.node.id}
          ref={el => (refCases.current[index] = el)}
          className="portfolio_products_block"
        >
          <div className="portfolio_products_block_pic">
            <Link to={post.node.uri}>
              {post.node.featuredImage &&
              post.node.featuredImage.node.mediaItemUrl ? (
                <div
                  className="portfolio_products_block_pic__content"
                  style={{
                    backgroundImage:
                      "url(" + post.node.featuredImage.node.mediaItemUrl + ")",
                  }}
                />
              ) : (
                ""
              )}
            </Link>
          </div>
          <div className="portfolio_products_block_list hash">
            <ul className="hash__list">{tags}</ul>
          </div>
          <div className="portfolio_products_block_title">
            <Link className="class_link" to={post.node.uri}>
              «{post.node.title}»
            </Link>
          </div>
        </div>
      )
    }
    return null
  })

  return (
    <div className="container">
      <div className="portfolio margin_bottom_240">
        <div className="view_title">
          <h2 className="title_62">Portfolio</h2>
          <Link className="active_link" to={"/portfolio/"}>
            View all
          </Link>
        </div>
        <div className="portfolio__products">{items}</div>
      </div>
    </div>
  )
}

Portfolio.propTypes = {
  siteTitle: PropTypes.string,
}

Portfolio.defaultProps = {
  siteTitle: ``,
}

export default Portfolio
