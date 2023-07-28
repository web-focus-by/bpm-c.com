import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../../components/styles/main.scss"
import "../../components/styles/icons.scss"
import "../../components/styles/modules.scss"
import "../../components/styles/mixins.scss"
import "../../components/styles/media_1920.scss"
import "../../components/styles/media_1366.scss"
import "../../components/styles/media_1024.scss"
import "../../components/styles/media_768.scss"
import "../../components/styles/media_375.scss"

const PortfolioWebSiteDesign = ({ posts, titlePage }) => {
  const items = posts.map((post, index) => {
    if (index <= 5) {
      let tags = []
      if (post && post.node.tags) {
        tags = post.node.tags.nodes.map(tag => {
          let valueTag = "#" + tag.slug
          return (
            <li
              key={post.node.id.toString() + valueTag.toString()}
              className="hash_list_block"
            >
              <Link to={"/tag/" + tag.slug + "/"} itemprop="url">{valueTag}</Link>
            </li>
          )
        })
      }
      return (
        <div className="portfolio_products_block">
          <div className="portfolio_products_block_pic">
            <Link to={post.node.link} itemprop="url">
              {post.node.featuredImage &&
              post.node.featuredImage.node.mediaItemUrl ? (
                <img
                  src={post.node.featuredImage.node.mediaItemUrl}
                  alt="the post"
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
            <Link className="portfolio_link" to={post.node.link} itemprop="url">
              {post.node.title}
            </Link>
          </div>
        </div>
      )
    }
  })

  return (
    <div className="container">
      <div className="portfolio margin_bottom_240">
        <div className="view_title">
          <div className="title_62">{titlePage}</div>
          <div className="view_all">
            <Link className="active_link" to={"/portfolio/"} itemprop="url">
              View all
            </Link>
          </div>
        </div>
        <div className="portfolio__products">{items}</div>
      </div>
    </div>
  )
}

PortfolioWebSiteDesign.propTypes = {
  siteTitle: PropTypes.string,
}

PortfolioWebSiteDesign.defaultProps = {
  siteTitle: ``,
}

export default PortfolioWebSiteDesign
