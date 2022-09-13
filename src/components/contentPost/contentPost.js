import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../../components/styles/main.css"
import "../../components/styles/modules.css"
import "../../components/styles/icons.css"
import "../../components/styles/modules.css"
import "../../components/styles/mixins.css"
import "../../components/styles/media_1920.css"
import "../../components/styles/media_1366.css"
import "../../components/styles/media_1024.css"
import "../../components/styles/media_768.css"
import "../../components/styles/media_375.css"

const ContentPost = ({ content }) => {
  let url = '';
  if (typeof window !== 'undefined') {
    url =  new URL(window.location.href);
  }
  const items = content.tags.nodes.map((post, index) => {
    let valueTag = '#' + post.slug;
    return (
      <li key={ index } className="hash_list_block">
        <Link to={ url.origin + "/tag/" + post.slug + "/" }>{ valueTag }</Link>
      </li>
    )
  })
  
  return (
    <div className="container">
      <div className="portfolio margin_bottom_for_portfolio_240">
        <br />
        <div className="portfolio__products">
          <div className="portfolio_products_block">
            <div className="portfolio_products_block_pic">
              <img src={ content.featuredImage.node.mediaItemUrl }></img>
              { content.content }
            </div>
            <div className="portfolio_products_block_list hash">
              <ul className="hash__list">
                { items }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ContentPost.propTypes = {
  siteTitle: PropTypes.string,
}

export default ContentPost;