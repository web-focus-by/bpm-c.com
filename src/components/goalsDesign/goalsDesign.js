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

const GoalsDesign = ({ content }) => {
  if (content) {
    const paragraphsList = content.content.reduce((next, prev) => {
      if (
        prev.includes("<p>") ||
        prev.includes("</p>") ||
        prev.includes("<h4>") ||
        prev.includes("</h4>")
      ) {
        prev = prev.replace("<p>", "")
        prev = prev.replace("</p>", "")
        return [...next, prev]
      }
      return next
    }, [])
    const text = content.content.join("")
    const title = content.title.replace(/<[^>]+>/g, "")
    let count1
    let firstArr = content.content.reduce((result, value) => {
      if (
        value.includes("<ul>") ||
        value.includes("</ul>") ||
        value.includes("<li>") ||
        value.includes("</li>")
      ) {
        return [...result, value]
      }
      return result
    }, [])
    let secondArr = content.content.reduce((result, value) => {
      if (
        value.includes("<ul>") ||
        value.includes("</ul>") ||
        value.includes("<li>") ||
        value.includes("</li>")
      ) {
        return [...result, value]
      }
      return result
    }, [])
    if (content.content.length - 2 > 2) {
      let fractional = (content.content.length - 2) % 2
      if (fractional > 0) {
        count1 = Math.trunc((content.content.length - 2) / 2) + 1
      } else {
        count1 = (content.content.length - 2) / 2
      }
      firstArr = firstArr.splice(
        count1 + 1,
        content.content.length - (count1 + 1)
      )
      secondArr = secondArr.splice(0, count1 + 1)
      firstArr.splice(0, 0, "<ul>")
      secondArr.splice(secondArr.length + 1, 0, "</ul>")
      return (
        <div className="container">
          <div className="leaders margin_bottom_240">
            <div className="leaders_choice">
              <h3 className="leaders_choice__title title_62">{title}</h3>
              {paragraphsList && paragraphsList.length ? (
                <div className="leaders_choice__block">
                  <div dangerouslySetInnerHTML={{ __html: paragraphsList }} />
                  {secondArr && secondArr.length > 0 ? (
                    <div
                      className="leaders_choice_block_list font_18"
                      dangerouslySetInnerHTML={{ __html: firstArr.join("") }}
                    />
                  ) : null}
                  {firstArr && firstArr.length > 0 ? (
                    <div
                      className="leaders_choice_block_list font_18"
                      dangerouslySetInnerHTML={{ __html: secondArr.join("") }}
                    />
                  ) : null}
                </div>
              ) : (
                <div className="leaders_choice__block">
                  {secondArr && secondArr.length > 0 ? (
                    <div
                      className="leaders_choice_block_list font_18"
                      dangerouslySetInnerHTML={{ __html: firstArr.join("") }}
                    />
                  ) : null}
                  {firstArr && firstArr.length > 0 ? (
                    <div
                      className="leaders_choice_block_list font_18"
                      dangerouslySetInnerHTML={{ __html: secondArr.join("") }}
                    />
                  ) : null}
                </div>
              )}
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="container">
          <div className="leaders margin_bottom_240">
            <div className="leaders_choice">
              <h3 className="leaders_choice__title title_62">{title}</h3>
              <div className="leaders_choice__block">
                <div
                  className="leaders_choice_block_list font_18"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

GoalsDesign.propTypes = {
  siteTitle: PropTypes.string,
}

GoalsDesign.defaultProps = {
  siteTitle: ``,
}

export default GoalsDesign
