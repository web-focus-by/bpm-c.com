import * as React from "react"
import PropTypes from "prop-types"
import "../../components/styles/main.scss"
import "../../components/styles/icons.scss"
import "../../components/styles/modules.scss"
import "../../components/styles/mixins.scss"
import "../../components/styles/media_1920.scss"
import "../../components/styles/media_1366.scss"
import "../../components/styles/media_1024.scss"
import "../../components/styles/media_768.scss"
import "../../components/styles/media_375.scss"

const Others = ({ content }) => {
  if (content) {
    const items = content.map((item, i) => {
      let title = item.title.replace(/<[^>]+>/g, "")
      let list = item.content.reduce((res, val) => {
        if (
          (val.includes("<ul>") ||
            val.includes("<li>") ||
            val.includes("</li>") ||
            val.includes("</ul>")) &&
          (!val.includes("<p>") || !val.includes("</p>"))
        ) {
          res.push(val)
        }
        return res
      }, [])
      let paragraphs = item.content.reduce((res, val) => {
        if (val.includes("<p>") || val.includes("</p>")) {
          val = val.replace("<p>", "")
          val = val.replace("</p>", "")
          res.push(val)
        }
        return res
      }, [])
      return (
        <div className="result_web_design margin_bottom_240">
          <div className="result_web_design_choice">
            <h2
              className="result_web_design_choice__title title_62"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h2>
            <div className="result_web_design_choice__block">
              {list && list.length > 0 ? (
                <div
                  className="result_web_design_choice_block_list"
                  dangerouslySetInnerHTML={{ __html: list.join("") }}
                />
              ) : null}
              {paragraphs && paragraphs.length > 0 ? (
                <div className="result_web_design_choice_block_list">
                  <div
                    className="font_18"
                    dangerouslySetInnerHTML={{ __html: paragraphs.join("") }}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )
    })
    return <div className="container">{items}</div>
  }
}

Others.propTypes = {
  siteTitle: PropTypes.string,
}

Others.defaultProps = {
  siteTitle: ``,
}

export default Others
