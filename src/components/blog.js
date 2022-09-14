import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import Moment from 'moment';
import "swiper/css"
import { Link, useStaticQuery, graphql } from "gatsby"
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/modules.css"
import "../components/styles/mixins.css"
import "../components/styles/media_1920.css"
import "../components/styles/media_1366.css"
import "../components/styles/media_1024.css"
import "../components/styles/media_768.css"
import "../components/styles/media_375.css"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query siteGetNewsQuery {
      allWpPost(filter: {categories: {nodes: {elemMatch: {slug: {in: ["news", "articles"]}}}}}) {
        edges {
          node {
            id
            title
            link
            date
            tags {
              nodes {
                id
                slug
              }
            }
            featuredImage {
              node {
                id
                mediaItemUrl
              }
            }
            categories {
              nodes {
                id
                slug
              }
            }
          }
        }
      }
    }`)
  let urlPath = '';
  if (typeof window !== 'undefined') {
    urlPath = new URL(window.location.href).pathname;
  }
  const allNews = data ? data.allWpPost.edges : [];
  const tags = (item) => {
    item.node.tags.nodes.map((tag, i) => {
      return (
        <li key={ tag.id } className="hash_list_block">
          <Link to={"/tag/"+tag.slug+"/"}>{ tag }</Link>
        </li>
      )
    })
  }
  const result = allNews.map((item, index) => {
    return (
      <SwiperSlide key={ item.node.id }>
        <div className="blog_products_block">
          <Link to={ item.node.link }>
            <div className="blog_products_block_pic">
              <img src={ item.node.featuredImage.node.mediaItemUrl } />
            </div>
          </Link>
          <div className="blog_products_block_list hash">
            <ul className="hash__list">
              { tags(item) }
            </ul>
            <div className="blog_products_block_list_date">{ Moment(item.node.date).format('DD-MM-YYYY') }</div>
          </div>
          <div className="blog_products_block_title">{ item.node.title }</div>
        </div>
      </SwiperSlide>
    );
  })

  return(
  <div className="container">
    <div className="blog margin_bottom_240">
      <div className="view_title">
        <div className="title_62">Blog</div>
        <div className="view_all">
          <Link to={"/news/"}>
            View all
          </Link>
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
                allowTouchMove: true,
              },
              1366: {
                width: 1366,
                allowTouchMove: true,
              },
              1025: {
                width: 1025,
                allowTouchMove: true,
              },
              1024: {
                width: 1366,
                allowTouchMove: true,
              },
            }}
          >
            { result }
          </Swiper>
      </div>
    </div>
  </div>
  )
}

export default Blog;