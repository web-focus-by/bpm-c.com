import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/modules.css"
import "../components/styles/mixins.css"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import imgVr from "../images/vr.svg"
import imgPointer from "../images/pointer.svg"
import imgScreen from "../images/screen.svg"
import imgHand from "../images/hand.svg"
import "../components/styles/media_1920.css"
import "../components/styles/media_1366.css"
import "../components/styles/media_1024.css"
import "../components/styles/media_768.css"
import "../components/styles/media_375.css"

const Blog = ({ siteTitle }) => (
  <div className="container">
    <div className="blog margin_bottom_240">
      <div className="view_title">
        <div className="title_62">Blog</div>
        <div className="view_all">
          <a href="#">View all</a>
        </div>
      </div>
      <div className="blog__products">
        <Swiper
          spaceBetween={20}
          slidesPerView={"auto"}
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log(swiper)}
          breakpoints={{
            1920: {
              width: 1920,
              allowTouchMove: false,
            },
            1366: {
              width: 1366,
              allowTouchMove: false,
            },
            1025: {
              width: 1025,
              allowTouchMove: false,
            },
            1024: {
              width: 1366,
              allowTouchMove: true,
            },
          }}
        >
          <SwiperSlide>
            <div className="blog_products_block">
              <div className="blog_products_block_pic">
                <img src={imgVr} />
              </div>
              <div className="blog_products_block_list hash">
                <ul className="hash__list">
                  <li className="hash_list_block">
                    <a href="#">#design</a>
                  </li>
                  <li className="hash_list_block">
                    <a href="#">#design</a>
                  </li>
                </ul>
                <div className="blog_products_block_list_date">12.10.2021</div>
              </div>
              <div className="blog_products_block_title">«BPM CLOUD»</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="blog_products_block">
              <div className="blog_products_block_pic">
                <img src={imgPointer} />
              </div>
              <div className="blog_products_block_list hash">
                <ul className="hash__list">
                  <li className="hash_list_block">
                    <a href="#">#design</a>
                  </li>
                  <li className="hash_list_block">
                    <a href="#">#design</a>
                  </li>
                </ul>
                <div className="blog_products_block_list_date">12.10.2021</div>
              </div>
              <div className="blog_products_block_title">«BPM CLOUD»</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="blog_products_block">
              <div className="blog_products_block_pic">
                <img src={imgScreen} />
              </div>
              <div className="blog_products_block_list hash">
                <ul className="hash__list">
                  <li className="hash_list_block">
                    <a href="#">#design</a>
                  </li>
                  <li className="hash_list_block">
                    <a href="#">#design</a>
                  </li>
                </ul>
                <div className="blog_products_block_list_date">12.10.2021</div>
              </div>
              <div className="blog_products_block_title">«BPM CLOUD»</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="blog_products_block">
              <div className="blog_products_block_pic">
                <img src={imgHand} />
              </div>
              <div className="blog_products_block_list hash">
                <ul className="hash__list">
                  <li className="hash_list_block">
                    <a href="#">#design</a>
                  </li>
                  <li className="hash_list_block">
                    <a href="#">#design</a>
                  </li>
                </ul>
                <div className="blog_products_block_list_date">12.10.2021</div>
              </div>
              <div className="blog_products_block_title">«BPM CLOUD»</div>
            </div>
          </SwiperSlide>
        </Swiper>
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
