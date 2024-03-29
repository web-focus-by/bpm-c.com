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
                      <h2 className="title">{title}{emoji === 'true' ? <span className="dev"><span class="develop"></span></span>: null}</h2>
                      <div className={`description ${description.length === 1 ? '': 'flex'}`}>
                          {description.map(item => (<p>{item}</p>))}
                      </div>
                  </div>
                  <div className="values__cards">
                      <div className={`cards-list ${dataContent.length > 3 ? 'length': ''}`}>
                          {dataContent.map((obj, index )=> (
                              <div className={`value-item ${dataContent.length > 3 ? 'length': ''}`}>
                                <div className="item__info-number">0{index + 1}.</div>
                                <h3 className="item__info-title">{obj.title}</h3>
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