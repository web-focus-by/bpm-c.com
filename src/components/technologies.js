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
          <p>React.js and React Native</p>
        </div>
        <div className="technologies_list_item">
          <span className="java"></span>
          <p>Java</p>
        </div>
        <div className="technologies_list_item">
          <span className="python"></span>
          <p>Python</p>
        </div>
        <div className="technologies_list_item">
          <span className="php"></span>
          <p> PHP</p>
        </div>
        <div className="technologies_list_item">
          <span className="golang"></span>
          <p>Golang</p>
        </div>
        <div className="technologies_list_item">
          <span className="c_plus"></span>
          <p>C++</p>
        </div>
        <div className="technologies_list_item">
          <span className="node"></span>
          <p>Node.js</p>
        </div>
        <div className="technologies_list_item">
          <span className="js"></span>
          <p>JavaScript</p>
        </div>
        <div className="technologies_list_item">
          <span className="ts"></span>
          <p>TypeScript</p>
        </div>
        <div className="technologies_list_item">
          <span className="vue"></span>
          <p>Vue.js </p>
        </div>
        <div className="technologies_list_item">
          <span className="net"></span>
          <p>.NET</p>
        </div>
        <div className="technologies_list_item">
          <span className="symfony"></span>
          <p>Symfony</p>
        </div>
        <div className="technologies_list_item">
          <span className="laravel"></span>
          <p>Laravel</p>
        </div>
        <div className="technologies_list_item">
          <span className="yii"></span>
          <p>Yii</p>
        </div>
        <div className="technologies_list_item">
          <span className="next"></span>
          <p>Next.js</p>
        </div>
        <div className="technologies_list_item">
          <span className="gatsby"></span>
          <p>Gatsby.js</p>
        </div>
        <div className="technologies_list_item">
          <span className="kotlin"></span>
          <p>Kotlin</p>
        </div>
        <div className="technologies_list_item">
          <span className="swift"></span>
          <p>Swift</p>
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
