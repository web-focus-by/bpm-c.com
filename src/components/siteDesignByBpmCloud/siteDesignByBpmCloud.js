import * as React from "react"
import PropTypes from "prop-types"
import "../../components/styles/main.css"
import "../../components/styles/icons.css"
import "../../components/styles/modules.css"
import "../../components/styles/mixins.css"
import gifUriy from "../../images/uriy.gif"
import gifKanu from "../../images/kanu.gif"
import gifVlada from "../../images/vlada.gif"
import "../../components/styles/media_1920.css"
import "../../components/styles/media_1366.css"
import "../../components/styles/media_1024.css"
import "../../components/styles/media_768.css"
import "../../components/styles/media_375.css"

const SiteDesignByBpmCloud = ({ content }) => {
  if (content) {
    const title = content.title.replace(/<[^>]+>/g, '');
    const arrayList = content.content.reduce((next, prev) => {
      if ((prev === "<ul>" || prev === "</ul>" || prev.includes("<li>") || prev.includes("</li>")) &&
      (!prev.includes("<p>") || !prev.includes("</p>"))) {
        return [...next, prev];
      }
      return next
    },[])
    const paragraphsList = content.content.reduce((next, prev) => {
      if (prev.includes("<p>") || prev.includes("</p>")) {
        prev = prev.replace(/<[^>]+>/g, '')
        return [...next, prev];
      }
      return next
    },[])

    return (
      <div className="container">
        <div className="leaders margin_bottom_240">
          <div className="leaders_choice">
            <div className="leaders_choice__title title_62" dangerouslySetInnerHTML={{__html: title }} />
            <div className="leaders_choice__block">
              {
                arrayList && arrayList.length > 0 ? (
                  <div className="leaders_choice_block_list font_18" dangerouslySetInnerHTML={{__html: arrayList.join('') }} />
                ) : paragraphsList && Array.isArray(paragraphsList) && paragraphsList.length > 1 ? (
                  <div className="leaders_choice_block_list font_18" dangerouslySetInnerHTML={{__html: paragraphsList[0] }} />
                ) : paragraphsList && Array.isArray(paragraphsList) && paragraphsList.length === 1 ? (
                  <div className="leaders_choice_block_list font_18" dangerouslySetInnerHTML={{__html: paragraphsList }} />
                ) : null
              }
              {
                (!(arrayList && arrayList.length > 0) && paragraphsList && Array.isArray(paragraphsList) && paragraphsList.length > 1) ? (
                  <div className="leaders_choice_block_list font_18" dangerouslySetInnerHTML={{__html: paragraphsList[1] }} />
                ) : ((arrayList && arrayList.length > 0) && paragraphsList && Array.isArray(paragraphsList) && paragraphsList.length === 1) ?
                (<div className="leaders_choice_block_list font_18" dangerouslySetInnerHTML={{__html: paragraphsList }} />) : null
              }
            </div>
          </div>
        </div>
      </div>
      )
    }
  }

  SiteDesignByBpmCloud.propTypes = {
  siteTitle: PropTypes.string,
}

SiteDesignByBpmCloud.defaultProps = {
  siteTitle: ``,
}

export default SiteDesignByBpmCloud
