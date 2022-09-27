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

const ContentPost = ({ content, data }) => {
  const socialMaediaLinks = [
    { link: "#", className: "facebook_white margin_right_40", name: "facebook_white" },
    { link: "#", className: "vk_white margin_right_40", name: "vk_white" },
    { link: "#", className: "link_white margin_right_40", name: "link_white" },
  ];
  const socialMedia = socialMaediaLinks.map((val, index)=>{
    return (
      <Link to={ val.link }>
        <span key={ index } className={ val.className }></span>
      </Link>
    )
  });

  const comments = (content.comments && content.comments.nodes && (content.comments.nodes.length > 0)) ?
  content.comments.nodes.map((comment, index) => {
    return (
      <div key={ comment.id } className="comment">
        <div key={ index } className="comment_title">
          <div className="comment_title_left">
            { comment.author.node.name }
          </div>
          <div className="comment_title_right">
            { Moment(comment.date).format("DD.MM.YYYY") }
          </div>
        </div>
        <div className="comment_text">
          { comment.content }
        </div>
      </div>
    )
  }) :
  (
    <div className="comment">
      <div className="comment_text">
        { "No comments for this article..." }
      </div>
    </div>
  );
  
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
      <div id="margin_240_black" className="black_bg_comment">
        <div className="comment_block">
          <div className="comment_block__title title_62">
            Add comment
          </div>
          <div className="comment_block__subtitle font_18">
            Choose a social network to leave a comment
          </div>
          <div className="comment_block__social_media">
            <div className="social_media_label">
              { socialMedia }
            </div>
          </div>
        </div>
      </div>
      <div className="other_comments">
        <div className="other_comments__title title_62">
          Other comments
          <div className="other_comments__comments">
            { comments }
            <div className="comment">
              <div className="comment_title">
                <div className="comment_title_left">
                  How will look comment
                </div>
                <div className="comment_title_right">
                  21.09.2022
                </div>
              </div>
              <div className="comment_text">
                Websites with attractive designs at «BPM Cloud» guarantees effective representation 
                on the network. It attracts new customers, quickly and easily distributes, demonstrates 
                and publishes necessary business information. Personalized design increases prestige of 
                company, credibility, recognition, demonstrates professionalism.
              </div>
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