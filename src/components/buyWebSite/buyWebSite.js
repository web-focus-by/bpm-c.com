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

const BuyWebSite = ({ content }) => {
  if (content) {
    const title = content.title.replace(/<[^>]+>/g, "")
    const arrayList = content.content.reduce((next, prev) => {
      if (
        prev === "<ul>" ||
        prev === "</ul>" ||
        prev.includes("<li>") ||
        prev.includes("</li>")
      ) {
        return [...next, prev]
      }
      return next
    }, [])
    const textFirst = content.content[0].replace(/<[^>]+>/g, "")
    const textSecond =
      content && content.content[1]
        ? content.content[1].replace(/<[^>]+>/g, "")
        : null
    return (
      <div className="container">
        <div className="bpm_cloud margin_bottom_240">
          <div
            className="bpm_cloud__title title_62"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div className="bpm_cloud__info">
            {textFirst ? (
              <div className="bpm_cloud_block">
                <div
                  className="bpm_cloud_block_text"
                  dangerouslySetInnerHTML={{ __html: textFirst }}
                />
              </div>
            ) : arrayList && arrayList.length > 0 && !textFirst ? (
              <div className="bpm_cloud_block">
                <div
                  className="bpm_cloud_block_text"
                  dangerouslySetInnerHTML={{ __html: arrayList.join("") }}
                />
              </div>
            ) : null}
            {textSecond ? (
              <div className="bpm_cloud_block">
                <div
                  className="bpm_cloud_block_text"
                  dangerouslySetInnerHTML={{ __html: textSecond }}
                />
              </div>
            ) : arrayList && arrayList.length > 0 && !textSecond ? (
              <div className="bpm_cloud_block">
                <div
                  className="result_web_design_choice_block_list font_18"
                  dangerouslySetInnerHTML={{ __html: arrayList.join("") }}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

BuyWebSite.propTypes = {
  siteTitle: PropTypes.string,
}

BuyWebSite.defaultProps = {
  siteTitle: ``,
}

export default BuyWebSite
