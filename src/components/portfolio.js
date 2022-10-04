import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/modules.css"
import "../components/styles/mixins.css"
import "../components/styles/media_1920.css"
import "../components/styles/media_1366.css"
import "../components/styles/media_1024.css"
import "../components/styles/media_768.css"
import "../components/styles/media_375.css"

const Portfolio = ({ posts }) => {
  const items = posts.map((post, index) => {
    if (index <= 5) {
      let tags = [];
      if (post && post.node.tags) {
        tags = post.node.tags.nodes.map((tag, i) => {
          let valueTag = '#' + tag.slug;
          return (
            <li key={ post.node.id.toString() + valueTag.toString() } className="hash_list_block">
              <Link to={ "/tag/" + tag.slug + "/"  }>{ valueTag }</Link>
            </li>
          )
        })
      }
      return (
        <div className="portfolio_products_block">
          <div className="portfolio_products_block_pic">
            <Link to={ post.node.link }>
              {post.node.featuredImage && post.node.featuredImage.node.mediaItemUrl ? (
                <img src={ post.node.featuredImage.node.mediaItemUrl } alt="the post"/>
              ) : ''}
            </Link>
          </div>
          <div className="portfolio_products_block_list hash">
            <ul className="hash__list">
              { tags }
            </ul>
          </div>
          <div className="portfolio_products_block_title">{ post.node.title }</div>
        </div>
      )
    }
  })

  return (
    <div className="container">
      <div className="portfolio margin_bottom_240">
        <div className="view_title">
          <div className="title_62">Portfolio</div>
          <div className="view_all">
            <Link to={ "/portfolios/" }>View all</Link>
          </div>
        </div>
        <div className="portfolio__products">
          { items }
        </div>
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
