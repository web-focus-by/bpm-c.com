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
        <Link style={{textDecoration: 'none'}} to="/technologies/react/"><div className="technologies_list_item">
          <span className="react"></span>
          <p className="font_18" style={{marginTop: '23px'}}>React.js and<br /> React Native</p>
        </div></Link>
        <Link style={{textDecoration: 'none'}} to="/technologies/java/"><div className="technologies_list_item">
          <span className="java"></span>
          <p className="font_18" style={{marginTop: '23px'}}>Java</p>
        </div></Link>
        <Link style={{textDecoration: 'none'}} to="/technologies/python/"><div className="technologies_list_item">
          <span className="python"></span>
          <p className="font_18" style={{marginTop: '23px'}}>Python</p>
        </div></Link>
        <Link style={{textDecoration: 'none'}} to="/technologies/php/"><div className="technologies_list_item">
          <span className="php"></span>
          <p className="font_18" style={{marginTop: '23px'}} >PHP</p>
        </div></Link>
        <Link style={{textDecoration: 'none'}} to="/technologies/golang/"><div className="technologies_list_item">
          <span className="golang"></span>
          <p className="font_18" style={{marginTop: '23px'}}>Golang</p>
        </div></Link>
        <Link style={{textDecoration: 'none'}} to="/technologies/c/"><div className="technologies_list_item">
          <span className="c_plus"></span>
          <p className="font_18" style={{marginTop: '23px'}}>C++</p>
        </div></Link>
        <Link style={{textDecoration: 'none'}} to="/technologies/nodejs/"><div className="technologies_list_item">
          <span className="node"></span>
          <p className="font_18" style={{marginTop: '23px'}}>Node.js</p>
        </div></Link>
        <Link style={{textDecoration: 'none'}} to="/technologies/javascript/"><div className="technologies_list_item">
          <span className="js"></span>
          <p className="font_18" style={{marginTop: '23px'}}>JavaScript</p>
        </div></Link>
        <Link style={{textDecoration: 'none'}} to="/technologies/typescript/"><div className="technologies_list_item">
          <span className="ts"></span>
          <p className="font_18" style={{marginTop: '23px'}}>TypeScript</p>
        </div></Link>
        <Link style={{textDecoration: 'none'}} to="/technologies/vue/"><div className="technologies_list_item">
          <span className="vue"></span>
          <p className="font_18" style={{marginTop: '23px'}}>Vue.js</p>
        </div></Link>
        <Link style={{textDecoration: 'none'}} to="/technologies/net/"><div className="technologies_list_item">
          <span className="net"></span>
          <p className="font_18" style={{marginTop: '23px'}}>.NET</p>
        </div></Link>
        <Link style={{textDecoration: 'none'}} to="/technologies/symfony/"><div className="technologies_list_item">
          <span className="symfony"></span>
          <p className="font_18" style={{marginTop: '23px'}}>Symfony</p>
        </div></Link>
        <Link style={{textDecoration: 'none'}} to="/technologies/laravel/"><div className="technologies_list_item">
          <span className="laravel"></span>
          <p className="font_18" style={{marginTop: '23px'}}>Laravel</p>
        </div></Link>
        <Link style={{textDecoration: 'none'}} to="/technologies/yii/"><div className="technologies_list_item">
          <span className="yii"></span>
          <p className="font_18" style={{marginTop: '23px'}}>Yii</p>
        </div></Link>
        <Link style={{textDecoration: 'none'}} to="/technologies/nextjs/"><div className="technologies_list_item">
          <span className="next"></span>
          <p className="font_18" style={{marginTop: '23px'}}>Next.js</p>
        </div></Link>
        <Link style={{textDecoration: 'none'}} to="/technologies/gatsbyjs/"><div className="technologies_list_item">
          <span className="gatsby"></span>
          <p className="font_18" style={{marginTop: '23px'}}>Gatsby.js</p>
        </div></Link>
        <Link style={{textDecoration: 'none'}} to="/technologies/kotlin/"><div className="technologies_list_item">
          <span className="kotlin"></span>
          <p className="font_18" style={{marginTop: '23px'}}>Kotlin</p>
        </div></Link>
        <Link style={{textDecoration: 'none'}} to="/technologies/swift/"><div className="technologies_list_item">
          <span className="swift"></span>
          <p className="font_18" style={{marginTop: '23px'}}>Swift</p>
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
