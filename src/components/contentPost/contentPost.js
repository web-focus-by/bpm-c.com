import * as React from "react"
import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Moment from "moment"
import "../../components/styles/main.scss"
import "../../components/styles/modules.scss"
import "../../components/styles/icons.scss"
import "../../components/styles/modules.scss"
import "../../components/styles/mixins.scss"
import "../../components/styles/media_1920.scss"
import "../../components/styles/media_1366.scss"
import "../../components/styles/media_1024.scss"
import "../../components/styles/media_768.scss"
import "../../components/styles/media_375.scss"

const ContentPost = ({ content }) => {
  const [headings, setHeadings] = useState([])
  useEffect(() => {
    Array.from(document.querySelectorAll("h2")).map((value, index) => {
      if (!value.getAttribute("id")) {
        value.setAttribute("id", index + 1)
      }
    })
    const elements = Array.from(document.querySelectorAll("h2")).map(
      (elem, index) => ({
        id: elem.id ? elem.id : index + 1,
        text: elem.innerText,
      })
    )
    setHeadings(elements)
  }, [])
  const executeScroll = id => {
    let top = document.getElementById(id).offsetTop
    window.scrollTo({
      top: top - 100,
      behavior: "smooth",
    })
  }
  const allContents = headings.map(heading => {
    return (
      <div key={heading.text} className="content_item">
        <a
          onClick={() => {
            executeScroll(heading.id)
          }}
        >
          {heading.text}
        </a>
      </div>
    )
  })
  const socialMaediaLinks = [
    {
      link: "#",
      className: "facebook_white margin_right_40",
      name: "facebook_white",
    },
    { link: "#", className: "vk_white margin_right_40", name: "vk_white" },
    { link: "#", className: "link_white margin_right_40", name: "link_white" },
  ]
  const socialMedia = socialMaediaLinks.map((val, index) => {
    return (
      <Link to={val.link} itemprop="url">
        <span key={index} className={val.className} itemprop="name"></span>
      </Link>
    )
  })
  const comments =
    content.comments &&
    content.comments.nodes &&
    content.comments.nodes.length > 0 ? (
      content.comments.nodes.map((comment, index) => {
        return (
          <div key={comment.id} className="comment">
            <div className="comment_title">
              <div className="comment_title_left">
                {comment.author.node.name}
              </div>
              <div className="comment_title_right">
                {Moment(comment.date).format("DD.MM.YYYY")}
              </div>
            </div>
            <div className="comment_text">{comment.content}</div>
          </div>
        )
      })
    ) : (
      <div className="comment">
        <div className="comment_text">{"No comments for this article..."}</div>
      </div>
    )

  return (
    <div className="container">
      <div className="post_title">
        <h3 className="post_title__title title_62">{content.title}</h3>
      </div>
      <div className="content_post">
        <div className="content_post__block">
          <div className="content_title">Content</div>
          {allContents}
        </div>
      </div>
      <div className="content_text margin_bottom_60">
        <div dangerouslySetInnerHTML={{ __html: content.content }} />
      </div>
      <div id="margin_240_black" className="black_bg_comment">
        <div className="comment_block">
          <h3 className="comment_block__title title_62">Add comment</h3>
          <div className="comment_block__subtitle font_18">
            Choose a social network to leave a comment
          </div>
          <div className="comment_block__social_media">
            <div className="social_media_label">{socialMedia}</div>
          </div>
        </div>
      </div>
      <div className="other_comments">
        <h3 className="other_comments__title title_62">
          Other comments
          <div className="other_comments__comments">
            {comments}
            <div className="comment">
              <div className="comment_title">
                <div className="comment_title_left">How will look comment</div>
                <div className="comment_title_right">21.09.2022</div>
              </div>
              <div className="comment_text">
                Websites with attractive designs at «BPM Cloud» guarantees
                effective representation on the network. It attracts new
                customers, quickly and easily distributes, demonstrates and
                publishes necessary business information. Personalized design
                increases prestige of company, credibility, recognition,
                demonstrates professionalism.
              </div>
            </div>
          </div>
        </h3>
      </div>
    </div>
  )
}

ContentPost.propTypes = {
  siteTitle: PropTypes.string,
}

export default ContentPost
