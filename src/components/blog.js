import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/modules.css"
import "../components/styles/mixins.css"
import imgVr from "../images/vr.svg"
import imgPointer from "../images/pointer.svg"
import imgScreen from "../images/screen.svg"
import imgHand from "../images/hand.svg"




const Blog = ({ siteTitle }) => (

  <div className="container">
    <div className="blog margin_bottom_240">
    <div className="view_title">
        <div className="title_62">Blog</div>
        <div className="view_all"><a href="#">View all</a></div>
      </div>
      <div className="blog__products">
        <div className="blog_products_block">
          <div className="blog_products_block_pic"><img src={imgVr} /></div>
          <div className="blog_products_block_list hash">
            <ul className="hash__list">
              <li className="hash_list_block"><a href="#">#design</a></li>
              <li className="hash_list_block"><a href="#">#design</a></li>
            </ul>
            <div className="blog_products_block_list_date">12.10.2021</div>
          </div>
          <div className="blog_products_block_title">«BPM CLOUD»</div>
        </div>
        <div className="blog_products_block">
          <div className="blog_products_block_pic"><img src={imgPointer} /></div>
          <div className="blog_products_block_list hash">
            <ul className="hash__list">
              <li className="hash_list_block"><a href="#">#design</a></li>
              <li className="hash_list_block"><a href="#">#design</a></li>
            </ul>
            <div className="blog_products_block_list_date">12.10.2021</div>
          </div>
          <div className="blog_products_block_title">«BPM CLOUD»</div>
        </div>
        <div className="blog_products_block">
          <div className="blog_products_block_pic"><img src={imgScreen} /></div>
          <div className="blog_products_block_list hash">
            <ul className="hash__list">
              <li className="hash_list_block"><a href="#">#design</a></li>
              <li className="hash_list_block"><a href="#">#design</a></li>
            </ul>
            <div className="blog_products_block_list_date">12.10.2021</div>
          </div>
          <div className="blog_products_block_title">«BPM CLOUD»</div>
        </div>
        <div className="blog_products_block">
          <div className="blog_products_block_pic"><img src={imgHand} /></div>
          <div className="blog_products_block_list hash">
            <ul className="hash__list">
              <li className="hash_list_block"><a href="#">#design</a></li>
              <li className="hash_list_block"><a href="#">#design</a></li>
            </ul>
            <div className="blog_products_block_list_date">12.10.2021</div>
          </div>
          <div className="blog_products_block_title">«BPM CLOUD»</div>
        </div>
      </div>
    </div>
  </div>
)

Blog.propTypes = {
  siteTitle: PropTypes.string,
}

Blog.defaultProps = {
  siteTitle: ``,
}

export default Blog



