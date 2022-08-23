import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import imgLaptop from "../images/laptop.svg"
import imgView from "../images/view.svg"
import imgCadr from "../images/cadr.svg"
import imgPlane from "../images/plane.svg"
import imgChisto from "../images/chisto.svg"
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/modules.css"
import "../components/styles/mixins.css"
import "../components/styles/media_1920.css"
import "../components/styles/media_1366.css"
import "../components/styles/media_1024.css"
import "../components/styles/media_768.css"
import "../components/styles/media_375.css"

const Portfolio = ({ siteTitle }) => (
  <div className="container">
    <div className="portfolio margin_bottom_240">
      <div className="view_title">
        <div className="title_62">Portfolio</div>
        <div className="view_all">
          <a href="#">View all</a>
        </div>
      </div>
      <div className="portfolio__products">
        <div className="portfolio_products_block">
          <div className="portfolio_products_block_pic">
            <img src={ imgLaptop } />
          </div>
          <div className="portfolio_products_block_list hash">
            <ul className="hash__list">
              <li className="hash_list_block">
                <a href="#">#design</a>
              </li>
              <li className="hash_list_block">
                <a href="#">#design</a>
              </li>
              <li className="hash_list_block">
                <a href="#">#design</a>
              </li>
              <li className="hash_list_block">
                <a href="#">#design</a>
              </li>
            </ul>
          </div>
          <div className="portfolio_products_block_title">«BPM CLOUD»</div>
        </div>
        <div className="portfolio_products_block">
          <div className="portfolio_products_block_pic">
            <img src={ imgView } />
          </div>
          <div className="portfolio_products_block_list hash">
            <ul className="hash__list">
              <li className="hash_list_block">
                <a href="#">#design</a>
              </li>
              <li className="hash_list_block">
                <a href="#">#design</a>
              </li>
              <li className="hash_list_block">
                <a href="#">#design</a>
              </li>
              <li className="hash_list_block">
                <a href="#">#design</a>
              </li>
            </ul>
          </div>
          <div className="portfolio_products_block_title">«BPM CLOUD»</div>
        </div>
        <div className="portfolio_products_block">
          <div className="portfolio_products_block_pic">
            <img src={ imgCadr } />
          </div>
          <div className="portfolio_products_block_list hash">
            <ul className="hash__list">
              <li className="hash_list_block">
                <a href="#">#design</a>
              </li>
              <li className="hash_list_block">
                <a href="#">#design</a>
              </li>
              <li className="hash_list_block">
                <a href="#">#design</a>
              </li>
              <li className="hash_list_block">
                <a href="#">#design</a>
              </li>
            </ul>
          </div>
          <div className="portfolio_products_block_title">«BPM CLOUD»</div>
        </div>
        <div className="portfolio_products_block">
          <div className="portfolio_products_block_pic">
            <img src={ imgPlane } />
          </div>
          <div className="portfolio_products_block_list hash">
            <ul className="hash__list">
              <li className="hash_list_block">
                <a href="#">#design</a>
              </li>
              <li className="hash_list_block">
                <a href="#">#design</a>
              </li>
              <li className="hash_list_block">
                <a href="#">#design</a>
              </li>
              <li className="hash_list_block">
                <a href="#">#design</a>
              </li>
            </ul>
          </div>
          <div className="portfolio_products_block_title">«BPM CLOUD»</div>
        </div>
        <div className="portfolio_products_block">
          <div className="portfolio_products_block_pic">
            <img src={ imgChisto } />
          </div>
          <div className="portfolio_products_block_list hash">
            <ul className="hash__list">
              <li className="hash_list_block">
                <a href="#">#design</a>
              </li>
              <li className="hash_list_block">
                <a href="#">#design</a>
              </li>
              <li className="hash_list_block">
                <a href="#">#design</a>
              </li>
              <li className="hash_list_block">
                <a href="#">#design</a>
              </li>
            </ul>
          </div>
          <div className="portfolio_products_block_title">«BPM CLOUD»</div>
        </div>
        <div className="portfolio_products_block">
          <div className="portfolio_products_block_pic">
            <img src={ imgLaptop } />
          </div>
          <div className="portfolio_products_block_list hash">
            <ul className="hash__list">
              <li className="hash_list_block">
                <a href="#">#design</a>
              </li>
              <li className="hash_list_block">
                <a href="#">#design</a>
              </li>
              <li className="hash_list_block">
                <a href="#">#design</a>
              </li>
              <li className="hash_list_block">
                <a href="#">#design</a>
              </li>
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
