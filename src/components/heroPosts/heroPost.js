import * as React from "react"
import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs"
import Moment from "moment"
import "../../components/styles/main.scss"
import "../../components/styles/icons.scss"
import "../../components/styles/modules.scss"
import "../../components/styles/mixins.scss"
import "../../components/styles/media_1920.scss"
import "../../components/styles/media_1366.scss"
import "../../components/styles/media_1024.scss"
import "../../components/styles/media_768.scss"
import "../../components/styles/media_375.scss"

const HeroPost = ({ location, photo, alt, info }) => {
  const shift = 60000
  const [counter, setCounter] = useState(0)
  const items = info.tags.nodes.map((post, index) => {
    let valueTag = "#" + post.slug
    return (
      <li key={index} className="hash_list_block">
        <Link to={"/tag/" + post.slug + "/"}>{valueTag}</Link>
      </li>
    )
  })
  useEffect(() => {
    const timer = setInterval(() => setCounter(counter + 1), shift)
    return () => clearInterval(timer)
  }, [counter])

  const itemUp = document.querySelectorAll('a.breadcrumbs');
  itemUp.forEach(item => {
    item.charAt(0).toUpperCase() + item.slice(1)
  })

  return (
    <div className="container">
      <Breadcrumbs breadcrumbs={location} title={info.title} />
      <div className="photo">
        <div className="photo_block">
          {photo ? <img src={photo} alt={alt} /> : ""}
        </div>
        <div className="photo_description">
          <div className="photo_tags">
            <div className="hash">
              <ul className="hash__list">{items}</ul>
            </div>
          </div>
          <div className="photo_duration">
            Reading time: {counter}
            {counter > 1 ? " minutes" : " minute"}
          </div>
          <div className="photo_date">
            {Moment(info.date).format("DD.MM.YYYY")}
          </div>
        </div>
      </div>
      <div className="header_circle_yellow"></div>
      <div className="header_circle_pink"></div>
      <div className="header_circle_purple"></div>
    </div>
  )
}

HeroPost.propTypes = {
  siteTitle: PropTypes.string,
}

HeroPost.defaultProps = {
  siteTitle: ``,
}

export default HeroPost
