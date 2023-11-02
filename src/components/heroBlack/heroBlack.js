import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import "./heroBlack.scss"

const HeroBlack = ({ title, description, undertitle, dataContent}) => {
    return (

    <div className="container black">
        <div className="black">
            <div className="black__title">
                    <h2 className="title">{title}</h2>
                    <div className="description">{description}</div>
            </div>
            <div className="black__cards">
                <h3 className="black_undertitle">{undertitle}:</h3>
                <div className="cards-list">
                    {dataContent.map(item => (
                        <div className="black_item">
                            <div className="item__info">{item}</div>
                        </div>
                    ))}
                </div>
            </div>
            <span className="violett_circle"></span>
        </div>
    </div>
  )
}

HeroBlack.propTypes = {
  siteTitle: PropTypes.string,
}

HeroBlack.defaultProps = {
  siteTitle: ``,
}

export default HeroBlack