import * as React from "react"
import PropTypes from "prop-types"
import "../../components/styles/main.css"
import "../../components/styles/icons.css"
import "../../components/styles/modules.css"
import "../../components/styles/mixins.css"
import "../../components/styles/media_1920.css"
import "../../components/styles/media_1366.css"
import "../../components/styles/media_1024.css"
import "../../components/styles/media_768.css"
import "../../components/styles/media_375.css"
import "./resWebDesign.css"

const ResWebDesign = ({ content }) => {
  if (content) {
    const title = content.title.replace(/<[^>]+>/g, "")
    const list = content.content.reduce((res, val) => {
      if (
        val.includes("<ul>") ||
        val.includes("<li>") ||
        val.includes("</li>") ||
        val.includes("</ul>")
      ) {
        res.push(val)
      }
      return res
    }, [])
    const paragraphs = content.content.reduce((res, val) => {
      if (val.includes("<p>") || val.includes("</p>")) {
        val = val.replace("<p>", "")
        val = val.replace("</p>", "")
        res.push(val)
      }
      return res
    }, [])
    return (
      <div className="container">
        <div className="result_web_design margin_bottom_240">
          <div className="result_web_design_choice">
            <div
              className="result_web_design_choice__title title_62"
              dangerouslySetInnerHTML={{ __html: title }}
            ></div>
            <div className="result_web_design_choice__block">
              <div
                className="result_web_design_choice_block_list"
                dangerouslySetInnerHTML={{ __html: list.join("") }}
              />
              <div className="result_web_design_choice_block_list">
                <div
                  className="font_18"
                  dangerouslySetInnerHTML={{ __html: paragraphs.join("") }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ResWebDesign.propTypes = {
  siteTitle: PropTypes.string,
}

ResWebDesign.defaultProps = {
  siteTitle: ``,
}

export default ResWebDesign
