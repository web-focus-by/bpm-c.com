import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Moment from 'moment';
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

const ListOfNews = ({ posts }) => {
  let url = '';
  if (typeof window !== 'undefined') {
    url =  new URL(window.location.href);
  }

  const items = posts.map((post, index) => {
    let tags = [];
    if (post && post.node.tags) {
      tags = post.node.tags.nodes.map((tag, i) => {
        let valueTag = '#' + tag.slug;
        if (i < 2 ) {
          return (
            <li key={ post.node.id.toString() + valueTag.toString() } className="hash_list_block">
              <Link to={ url.origin + "/tag/" + tag.slug + "/" }>{ valueTag }</Link>
            </li>
          )
        }
      })
    }
    return (
      <div className="blogs_products_block">
        <div className="blogs_products_block_pic">
          <Link to={ post.node.link }>
            <img src={ post.node.featuredImage.node.mediaItemUrl } />
          </Link>
        </div>
        <div className="blogs_products_block_list hash">
          <div className="blogs_products_block_list_tags">
            <ul className="hash__list">
              { tags }
            </ul>
          </div>
          <div className="blogs_products_block_list_date">
            { Moment(post.node.link).format('DD-MM-YYYY') }
          </div>
        </div>
        <div className="blogs_products_block_title" >{ post.node.title }</div>
      </div>
    )
  })
  
  return (
    <div className="container">
      <div className="blogs margin_bottom_240">
        <div className="blogs__products">
          { items }
        </div>
        <div className="blogs__topics">
          <div className="blogs_products_block">
            <div className="blogs_topics_block_list">
              Topics
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ListOfNews.propTypes = {
  siteTitle: PropTypes.string,
}

export default ListOfNews;