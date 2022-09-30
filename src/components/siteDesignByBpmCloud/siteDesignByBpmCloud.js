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
      if (prev === "<ul>" || prev === "</ul>" || prev.includes("<li>") || prev.includes("</li>")) {
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
        <div className="leaders">    
          <div className="leaders_choice">
            <div className="leaders_choice__title title_62" dangerouslySetInnerHTML={{__html: title }} />
            <div className="leaders_choice__block">
              <div className="leaders_choice_block_list font_18" dangerouslySetInnerHTML={{__html: arrayList.join('') }} />
              <div className="leaders_choice_block_list font_18" dangerouslySetInnerHTML={{__html: paragraphsList }} />
            </div>
          </div>
          <div className="leaders_choice_tagline">
            <div className="leaders_choice_tagline__block">
              <div className="leaders_choice_tagline_block_title">
                Let’s work together
              </div>
              <div className="leaders_choice_tagline_block_gif">
                <img src={ gifUriy } alt="Uriy"/>
                <img src={ gifKanu } alt="Kanu"/>
                <img src={ gifVlada } alt="Vlada"/>
              </div> 
            </div>
            <div className="leaders_choice_tagline__butn">
              <button className="button_white">
                Get in touch<span className="arrow_black"></span>
              </button>
            </div>
            <div className="footer_circle_yellow"></div>
            <div className="footer_circle_pink"></div>
            <div className="footer_circle_purple"></div>
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
