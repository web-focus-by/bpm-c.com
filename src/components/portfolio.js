import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./main.css"
import "./icons.css"
import "./moduls.css"

const Portfolio = ({ siteTitle }) => (

  <div className="container">
    <div className="portfolio">
        <div className="portfolio__title">
        <div className="portfolio_title_block title_62">Portfolio</div>
        <div className="view_all"><a href="#">View all</a></div>
        </div>
        <div className="portfolio__products">
        <div className="portfolio_products_block">
        <div className="portfolio_products_block_pic"><img src=""/></div>
        <div className="portfolio_products_block_list">
            <ul>
                <li><a href="#">#design</a></li>
                <li><a href="#">#design</a></li>
                <li><a href="#">#design</a></li>
                <li><a href="#">#design</a></li>
            </ul>
        </div>
        <div className="portfolio_products_block_title">«BPM CLOUD»</div>
        </div>
        </div>
    </div>
  </div>
)

Portfolio.propTypes = {
  siteTitle: PropTypes.string, 
}

Portfolio.defaultProps = {
  siteTitle: ``,
}

export default Portfolio



