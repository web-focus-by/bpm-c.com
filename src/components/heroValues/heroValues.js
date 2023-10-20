import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import "./heroValues.scss"

const HeroValues = ({ title, emoji, description, dataContent}) => {
  return (
    <div className="container">
        <div className="hero margin_bottom_240">
              <div className="values">
                  <div className={`values__title ${description.length === 1 ? 'flex': ''}`}>
                      <div className="title">{title}{emoji === 'true' ? <span className="dev"><span class="develop"></span></span>: null}</div>
                      <div className={`description ${description.length === 1 ? '': 'flex'}`}>
                          {description.map(item => (<p>{item}</p>))}
                      </div>
                  </div>
                  <div className="values__cards">
                      <div className="cards-list">
                          {dataContent.map((obj, index )=> (
                              <div className={`value-item ${dataContent.length > 3 ? 'length': ''}`}>
                                <div className="item__info-number">0{index + 1}.</div>
                                <div className="item__info-title">{obj.title}</div>
                                <div className="item__info-content">{obj.content}</div>
                            </div>
                            ))}
                      </div>
                  </div>
            </div>
        </div>
    </div>
  )
}

HeroValues.propTypes = {
  siteTitle: PropTypes.string,
}

HeroValues.defaultProps = {
  siteTitle: ``,
}

export default HeroValues