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
              <Link to={"/tag/" + tag.slug + "/"}>{valueTag}</Link>
            </li>
          )
        })
      }
      return (
        <div className="portfolio_products_block">
          <div className="portfolio_products_block_pic" itemtype="https://schema.org/ImageObject" itemscope="">
            <Link to={post.node.link}>
              {post.node.featuredImage &&
              post.node.featuredImage.node.mediaItemUrl ? (
                <img
                  src={post.node.featuredImage.node.mediaItemUrl}
                  alt="the post"
                  itemprop="image"
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
            <Link className="portfolio_link" to={post.node.link}>
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
          <h2 className="title_62">{titlePage}</h2>
          <div className="view_all">
            <Link className="active_link" to={"/portfolio/"}>
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
