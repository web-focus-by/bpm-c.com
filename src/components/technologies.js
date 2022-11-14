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

const Technologies = () => (
  <div className="container">
    <div className="technologies margin_bottom_240">
      <div className="technologies__title title_62">Technologies</div>
      <div className="technologies__list">
        <Link className="active_link" to="/technologies/react/"><div className="technologies_list_item">
          <span className="react"></span>
          <p className="font_18">React.js and<br /> React Native</p>
        </div></Link>
        <Link className="active_link" to="/technologies/java/"><div className="technologies_list_item">
          <span className="java"></span>
          <p className="font_18">Java</p>
        </div></Link>
        <Link className="active_link" to="/technologies/python/"><div className="technologies_list_item">
          <span className="python"></span>
          <p className="font_18">Python</p>
        </div></Link>
        <Link className="active_link" to="/technologies/php/"><div className="technologies_list_item">
          <span className="php"></span>
          <p className="font_18">PHP</p>
        </div></Link>
        <Link className="active_link" to="/technologies/golang/"><div className="technologies_list_item">
          <span className="golang"></span>
          <p className="font_18">Golang</p>
        </div></Link>
        <Link className="active_link"to="/technologies/c/"><div className="technologies_list_item">
          <span className="c_plus"></span>
          <p className="font_18">C++</p>
        </div></Link>
        <Link className="active_link" to="/technologies/nodejs/"><div className="technologies_list_item">
          <span className="node"></span>
          <p className="font_18">Node.js</p>
        </div></Link>
        <Link className="active_link" to="/technologies/javascript/"><div className="technologies_list_item">
          <span className="js"></span>
          <p className="font_18">JavaScript</p>
        </div></Link>
        <Link className="active_link" to="/technologies/typescript/"><div className="technologies_list_item">
          <span className="ts"></span>
          <p className="font_18">TypeScript</p>
        </div></Link>
        <Link className="active_link" to="/technologies/vue/"><div className="technologies_list_item">
          <span className="vue"></span>
          <p className="font_18">Vue.js</p>
        </div></Link>
        <Link className="active_link" to="/technologies/golang/"><div className="technologies_list_item">
          <span className="net"></span>
          <p className="font_18">.NET</p>
        </div></Link>
        <Link className="active_link" to="/technologies/symfony/"><div className="technologies_list_item">
          <span className="symfony"></span>
          <p className="font_18">Symfony</p>
        </div></Link>
        <Link className="active_link" to="/technologies/laravel/"><div className="technologies_list_item">
          <span className="laravel"></span>
          <p className="font_18">Laravel</p>
        </div></Link>
        <Link className="active_link" to="/technologies/yii/"><div className="technologies_list_item">
          <span className="yii"></span>
          <p className="font_18">Yii</p>
        </div></Link>
        <Link className="active_link" to="/technologies/nextjs/"><div className="technologies_list_item">
          <span className="next"></span>
          <p className="font_18">Next.js</p>
        </div></Link>
        <Link className="active_link" to="/technologies/gatsbyjs/"><div className="technologies_list_item">
          <span className="gatsby"></span>
          <p className="font_18">Gatsby.js</p>
        </div></Link>
        <Link className="active_link" to="/technologies/kotlin/"><div className="technologies_list_item">
          <span className="kotlin"></span>
          <p className="font_18">Kotlin</p>
        </div></Link>
        <Link className="active_link" to="/technologies/swift/"><div className="technologies_list_item">
          <span className="swift"></span>
          <p className="font_18">Swift</p>
        </div></Link>
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
