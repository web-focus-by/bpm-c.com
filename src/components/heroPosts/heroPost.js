import * as React from "react"
import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs"
import Moment from 'moment';
import "../../components/styles/main.css"
import "../../components/styles/icons.css"
import "../../components/styles/modules.css"
import "../../components/styles/mixins.css"
import "../../components/styles/media_1920.css"
import "../../components/styles/media_1366.css"
import "../../components/styles/media_1024.css"
import "../../components/styles/media_768.css"
import "../../components/styles/media_375.css"

const HeroPost = ({ location, photo, info}) => {
  const shift = 60000;
  const [counter, setCounter] = useState(0);
  const items = info.tags.nodes.map((post, index) => {
    let valueTag = '#' + post.slug;
    return (
      <li key={ index } className="hash_list_block">
        <Link to={ "/tag/" + post.slug + "/" }>{ valueTag }</Link>
      </li>
    )
  })
  useEffect(
    () => {
      const timer = setInterval(() => setCounter(counter + 1), shift);
      return () => clearInterval(timer);
    }, [counter]
  );

  return (
    <div className="container">
      <Breadcrumbs breadcrumbs={ location } title={info.title}/>
      <div className="photo">
        <div className="photo_block">
          { photo ? (<img src={ photo } alt="Imagine"/>) : '' }
        </div>
        <div className="photo_description">
          <div className="photo_tags">
            <div className="hash">
              <ul className="hash__list">
                { items }
              </ul>
            </div>
          </div>
          <div className="photo_duration">Reading time: { counter }{ counter > 1 ? " minutes": " minute" }</div>
          <div className="photo_date">{ Moment(info.date).format('DD.MM.YYYY')}</div>
        </div>
      </div>
      <div className="header_circle_yellow"></div>
      <div className="header_circle_pink"></div>
      <div className="header_circle_purple"></div>
    </div>
  );
}

HeroPost.propTypes = {
  siteTitle: PropTypes.string,
}

HeroPost.defaultProps = {
  siteTitle: ``,
}

export default HeroPost
