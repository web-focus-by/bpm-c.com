import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../components/styles/main.scss"
import "../components/styles/icons.scss"
import "../components/styles/modules.scss"
import "../components/styles/mixins.scss"
import "../components/styles/media_1920.scss"
import "../components/styles/media_1366.scss"
import "../components/styles/media_1024.scss"
import "../components/styles/media_768.scss"
import "../components/styles/media_375.scss"

const TechnologiesList = [
  {
    name: "React.js and\n <br/> React Native",
    link: "/technologies/react/",
    icon: "react",
  },
  {
    name: "Java",
    link: "/technologies/java/",
    icon: "java",
  },
  {
    name: "Python",
    link: "/technologies/python/",
    icon: "python",
  },
  {
    name: "PHP",
    link: "/technologies/php/",
    icon: "php",
  },
  {
    name: "Golang",
    link: "/technologies/golang/",
    icon: "golang",
  },
  {
    name: "C++",
    link: "/technologies/c/",
    icon: "c_plus",
  },
  {
    name: "Node.js",
    link: "/technologies/nodejs/",
    icon: "node",
  },
  {
    name: "JavaScript",
    link: "/technologies/javascript/",
    icon: "js",
  },
  {
    name: "TypeScript",
    link: "/technologies/typescript/",
    icon: "ts",
  },
  {
    name: "Vue.js",
    link: "/technologies/vue/",
    icon: "vue",
  },
  {
    name: ".NET",
    link: "/technologies/net/",
    icon: "net",
  },
  {
    name: "Symfony",
    link: "/technologies/symfony/",
    icon: "symfony",
  },
  {
    name: "Laravel",
    link: "/technologies/laravel/",
    icon: "laravel",
  },
  {
    name: "Yii",
    link: "/technologies/yii/",
    icon: "yii",
  },
  {
    name: "Next.js",
    link: "/technologies/nextjs/",
    icon: "next",
  },
  {
    name: "Gatsby.js",
    link: "/technologies/gatsbyjs/",
    icon: "gatsby",
  },
  {
    name: "Kotlin",
    link: "/technologies/kotlin/",
    icon: "kotlin",
  },
  {
    name: "Swift",
    link: "/technologies/swift/",
    icon: "swift",
  },
]
const Technologies = () => (
  <div className="container">
    <div className="technologies margin_bottom_240">
      <h1 className="technologies__title title_62">Technologies</h1>
      <div className="technologies__list">
        {TechnologiesList.map((el, i) => (
          <Link
            key={el.name + "_" + i}
            style={{ textDecoration: "none" }}
            to={el.link}
          >
            <div className="technologies_list_item">
              <span className={el.icon} itemprop="name"></span>
              <p
                className="font_18"
                dangerouslySetInnerHTML={{ __html: el.name }}
              ></p>
            </div>
          </Link>
        ))}
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
