import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/modules.css"
import "../components/styles/mixins.css"
import "../components/styles/media_1920.css"
import "../components/styles/media_1366.css"
import "../components/styles/media_1024.css"
import "../components/styles/media_768.css"
import "../components/styles/media_375.css"

const Technologies = ({ siteTitle }) => (
  <div className="container">
    <div className="technologies margin_bottom_240">
      <div className="technologies__title title_62">Technologies</div>
      <div className="technologies__list">
        <div className="technologies_list_item">
          <span className="react"></span>
          <p className="font_18">
            React.js and
            <br /> React Native
          </p>
        </div>
        <div className="technologies_list_item">
          <span className="java"></span>
          <p className="font_18">Java</p>
        </div>
        <div className="technologies_list_item">
          <span className="python"></span>
          <p className="font_18">Python</p>
        </div>
        <div className="technologies_list_item">
          <span className="php"></span>
          <p className="font_18"> PHP</p>
        </div>
        <div className="technologies_list_item">
          <span className="golang"></span>
          <p className="font_18">Golang</p>
        </div>
        <div className="technologies_list_item">
          <span className="c_plus"></span>
          <p className="font_18">C++</p>
        </div>
        <div className="technologies_list_item">
          <span className="node"></span>
          <p className="font_18">Node.js</p>
        </div>
        <div className="technologies_list_item">
          <span className="js"></span>
          <p className="font_18">JavaScript</p>
        </div>
        <div className="technologies_list_item">
          <span className="ts"></span>
          <p className="font_18">TypeScript</p>
        </div>
        <div className="technologies_list_item">
          <span className="vue"></span>
          <p className="font_18">Vue.js </p>
        </div>
        <div className="technologies_list_item">
          <span className="net"></span>
          <p className="font_18">.NET</p>
        </div>
        <div className="technologies_list_item">
          <span className="symfony"></span>
          <p className="font_18">Symfony</p>
        </div>
        <div className="technologies_list_item">
          <span className="laravel"></span>
          <p className="font_18">Laravel</p>
        </div>
        <div className="technologies_list_item">
          <span className="yii"></span>
          <p className="font_18">Yii</p>
        </div>
        <div className="technologies_list_item">
          <span className="next"></span>
          <p className="font_18">Next.js</p>
        </div>
        <div className="technologies_list_item">
          <span className="gatsby"></span>
          <p className="font_18">Gatsby.js</p>
        </div>
        <div className="technologies_list_item">
          <span className="kotlin"></span>
          <p className="font_18">Kotlin</p>
        </div>
        <div className="technologies_list_item">
          <span className="swift"></span>
          <p className="font_18">Swift</p>
        </div>
      </div>
    </div>
  </div>
)

Technologies.propTypes = {
  siteTitle: PropTypes.string,
}

Technologies.defaultProps = {
  siteTitle: ``,
}

export default Technologies
