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

const FooterBlock = ({ content, contentImage }) => {
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
    const paragraphsList = content.content.reduce((next, prev) => {
      if (prev.includes("<p>") || prev.includes("</p>")) {
        prev = prev.replace(/<[^>]+>/g, "")
        return [...next, prev]
      }
      return next
    }, [])
    return (
      <div className="container">
        <div className="leaders margin_bottom_240">
          <div className="leaders_choice">
            <div
              className="leaders_choice__title title_62"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <div className="leaders_choice__block">
              {arrayList && arrayList.length > 0 ? (
                <div
                  className="leaders_choice_block_list font_18"
                  dangerouslySetInnerHTML={{ __html: arrayList.join("") }}
                />
              ) : paragraphsList &&
                Array.isArray(paragraphsList) &&
                paragraphsList.length > 1 ? (
                <div
                  className="leaders_choice_block_list font_18"
                  dangerouslySetInnerHTML={{ __html: paragraphsList[0] }}
                />
              ) : (
                <div
                  className="leaders_choice_block_list font_18"
                  dangerouslySetInnerHTML={{ __html: paragraphsList }}
                />
              )}
              {!(arrayList && arrayList.length > 0) &&
              paragraphsList &&
              Array.isArray(paragraphsList) &&
              paragraphsList.length > 1 ? (
                <div
                  className="leaders_choice_block_list font_18"
                  dangerouslySetInnerHTML={{ __html: paragraphsList[1] }}
                />
              ) : null}
            </div>
            {contentImage ? (
              <div
                className="leaders_choice__title"
                style={{ marginTop: "60px" }}
                itemscope itemtype="https://schema.org/ImageObject"
              >
                <img
                  src={contentImage}
                  alt="team"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "25px",
                  }}
                  itemprop="image"
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

FooterBlock.propTypes = {
  siteTitle: PropTypes.string,
}

FooterBlock.defaultProps = {
  siteTitle: ``,
}

export default FooterBlock
