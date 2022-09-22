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

const ContentPost = ({ content, data }) => {
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
      <div className="post_title">
        <div className="post_title__title title_62">
          { content.title }
        </div>
      </div>
      <div className="content_post">
        <div className="content_post__block">
          <div className="content_title">
            Content
          </div>
          <div className="content_item">
            Content
          </div>
          <div className="content_item">
            Content
          </div>
          <div className="content_item">
            Content
          </div>
          <div className="content_item">
            Content
          </div>
        </div>
      </div>
      <div className="content_text margin_bottom_60">
        { content.content }
      </div>
    </div>
  )
}

ContentPost.propTypes = {
  siteTitle: PropTypes.string,
}

export default ContentPost;