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

const GoalsDesign = ({ content }) => {
  if (content) {
    const text = content.content.join('');
    const title = content.title.replace(/<[^>]+>/g, '');
    let count1, count2, count3;
    let firstArr = content.content.reduce((result,value) => {
      return [... result, value]
    },[]);
    let secondArr = content.content.reduce((result,value) => {
      return [... result, value]
    },[]);
    if ((content.content.length-2) > 2){
      count3 = (content.content.length-2) / 2
      let fractional = (content.content.length-2) % 2
      if (fractional > 0) {
        count1 = Math.trunc((content.content.length-2) / 2) + 1;
        count2 = content.content.length-2 - count1;
      } else {
        count1 = (content.content.length-2) / 2;
        count2 = content.content.length-2 - count1;
      }
      firstArr = firstArr.splice((count1 + 1), (content.content.length - (count1 + 1)));
      secondArr = secondArr.splice(0, (count1 + 1))
      firstArr.splice(0, 0, "<ul>");
      secondArr.splice(secondArr.length+1, 0, "</ul>");
      return (
        <div className="container">
          <div className="leaders margin_bottom_240">    
            <div className="leaders_choice">
              <div className="leaders_choice__title title_62">
                { title }
              </div>
              <div className="leaders_choice__block">
                <div className="leaders_choice_block_list font_18" dangerouslySetInnerHTML={{__html: firstArr.join('') }} />
                <div className="leaders_choice_block_list font_18" dangerouslySetInnerHTML={{__html: secondArr.join('') }}/>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="container">
          <div className="leaders margin_bottom_240">    
            <div className="leaders_choice">
              <div className="leaders_choice__title title_62">
                { title }
              </div>
              <div className="leaders_choice__block">
                <div className="leaders_choice_block_list font_18" dangerouslySetInnerHTML={{__html: text }} />
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
