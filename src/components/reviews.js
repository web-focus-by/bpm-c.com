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

const Reviews = ({ siteTitle }) => (
  <div className="container">
    <div className="reviews margin_bottom_240">
      <div className="view_title">
        <div className="title_62">Reviews</div>
        <div className="view_all">
          <a href="#">View all</a>
        </div>
      </div>
      <div className="reviews__info">
        <div className="reviews_info_block">
          <div className="reviews_info_block_text">
            Is there any point in delaying starting our cooperation, if leading
            experts are already with our digital marketing agency? Let’s get
            acquainted and jointly go towards necessary goals in goods and
            services digital promotion.
          </div>
          <div className="reviews_info_block_name">Valentina Gubareva</div>
          <div className="reviews_info_block_date">
            <ul>
              <li>Creative director</li>
              <li>12.10.2021</li>
            </ul>
          </div>
        </div>
        <div className="reviews_info_block">
          <div className="reviews_info_block_text">
            Is there any point in delaying starting our cooperation, if leading
            experts are already with our digital marketing agency? Let’s get
            acquainted and jointly go towards necessary goals in goods and
            services digital promotion.
          </div>
          <div className="reviews_info_block_name">Valentina Gubareva</div>
          <div className="reviews_info_block_date">
            <ul>
              <li>Creative director</li>
              <li>12.10.2021</li>
            </ul>
          </div>
        </div>
        <div className="reviews_info_block">
          <div className="reviews_info_block_text">
            Is there any point in delaying starting our cooperation, if leading
            experts are already with our digital marketing agency? Let’s get
            acquainted and jointly go towards necessary goals in goods and
            services digital promotion.
          </div>
          <div className="reviews_info_block_name">Valentina Gubareva</div>
          <div className="reviews_info_block_date">
            <ul>
              <li>Creative director</li>
              <li>12.10.2021</li>
            </ul>
          </div>
        </div>
        <div className="reviews_info_block">
          <div className="reviews_info_block_text">
            Is there any point in delaying starting our cooperation, if leading
            experts are already with our digital marketing agency? Let’s get
            acquainted and jointly go towards necessary goals in goods and
            services digital promotion.
          </div>
          <div className="reviews_info_block_name">Valentina Gubareva</div>
          <div className="reviews_info_block_date">
            <ul>
              <li>Creative director</li>
              <li>12.10.2021</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)

Reviews.propTypes = {
  siteTitle: PropTypes.string,
}

Reviews.defaultProps = {
  siteTitle: ``,
}

export default Reviews
