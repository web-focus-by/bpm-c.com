import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import './heroFacts.scss'

const HeroFacts = ({ title, description, flex, dataContent}) => {
  return (
    <div className="container">
        <div className="hero margin_bottom_240">
              <div className="facts">
                  <div className={`facts__title ${flex === 'true' ? '' : 'no-flex'}`}>
                      <h2 className="title">{title}</h2>
                      <div className="description">
                          <p>{description}</p>
                      </div>
                  </div>
                  <div className="facts__cards">
                      <div className="cards-list">
                          {dataContent.map(obj => (
                            <div className={`fact-item ${obj.classCircle}`}>
                              <div className="item__info">
                                  <h3 className="item__info-title">{obj.title}</h3>
                                  <div className="item__info-content">{obj.content}</div>
                              </div>
                              <div className={`fact-item__circle ${obj.classCircle}`}>
                                <div className="circle-one"></div>
                                <div className="circle-two"></div>
                                <div className="circle-three"></div>
                              </div>
                            </div>
                            ))}
                      </div>
                  </div>
            </div>
        </div>
    </div>
  )
}

HeroFacts.propTypes = {
  siteTitle: PropTypes.string,
}

HeroFacts.defaultProps = {
  siteTitle: ``,
}

export default HeroFacts