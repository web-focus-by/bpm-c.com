import * as React from "react"
import { useEffect, useRef } from "react"
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

const Blog = ({ titlePage }) => {
  const hasWindow = typeof window !== 'undefined';
  const widthScreen = hasWindow ? window.innerWidth : null;
  const data = useStaticQuery(graphql`
    query siteGetNewsQuery {
      allWpPost(filter: {categories: {nodes: {elemMatch: {slug: {in: ["blog"]}}}}}) {
        edges {
          node {
            id
            title
            link
            date
            tags {
              nodes {
                slug
              }
            }
            featuredImage {
              node {
                id
                mediaItemUrl
                sizes
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
  const refCases = useRef([]);
  const allNews = data ? data.allWpPost.edges : [];
  const tags = (item) => {
    const results = item.node.tags.nodes.reduce((res, tag) => {
      let val = tag.slug
      res.push(val);
      return res;
    },[])
    const result = results.map((val, i)=>{
      if (i < 2) {
        return (
          <li key={ i } className="hash_list_block">
            <Link to={"/tag/"+val+"/"}>{ val }</Link>
          </li>
        )
      }
    })
    return result;
  }

  useEffect(
    () => {
      refCases.current = refCases.current.slice(0, allNews.length);
      document.addEventListener("mouseover", (e) => {
        let currentCase = refCases && refCases.current && refCases.current.filter(refCase => refCase && refCase.contains(e.target)) ?
        refCases.current.filter(refCase => refCase && refCase.contains(e.target))[0] : null;
        if (currentCase && refCases.current.includes(currentCase)) {
          document.getElementById(currentCase.id).getElementsByClassName('blog_products_block_title')[0].children[0].classList.add('portfolio_link');
          document.getElementById(currentCase.id).getElementsByClassName('blog_products_block_title')[0].children[0].classList.remove('class_link');
        }
      }, true);
      document.addEventListener("mouseout", (e) => {
        let currentCase = refCases && refCases.current && refCases.current.filter(refCase => refCase && refCase.contains(e.target)) ?
        refCases.current.filter(refCase => refCase && refCase.contains(e.target))[0] : null;
        if (currentCase && refCases.current.includes(currentCase)) {
          document.getElementById(currentCase.id).getElementsByClassName('blog_products_block_title')[0].children[0].classList.add('class_link');
          document.getElementById(currentCase.id).getElementsByClassName('blog_products_block_title')[0].children[0].classList.remove('portfolio_link');
        }
      }, true);
      return () => {
        document.removeEventListener("mouseover", (e) => {
          let currentCase = refCases && refCases.current && refCases.current.filter(refCase => refCase && refCase.contains(e.target)) ?
          refCases.current.filter(refCase => refCase && refCase.contains(e.target))[0] : null;
          if (currentCase && refCases.current.includes(currentCase)) {
            document.getElementById(currentCase.id).getElementsByClassName('blog_products_block_title')[0].children[0].classList.add('portfolio_link');
            document.getElementById(currentCase.id).getElementsByClassName('blog_products_block_title')[0].children[0].classList.remove('class_link');
          }
        }, true);
      };
    }, [allNews]
  );

  const result = allNews.map((item, index) => {
    return (
      <SwiperSlide key={ item.node.id }>
        <div id={ item.node.id } className="blog_products_block" ref={ el => refCases.current[index] = el }>
          <Link to={ item.node.link }>
            <div className="blog_products_block_pic">
              { item.node.featuredImage && item.node.featuredImage.node.mediaItemUrl ?
              (<img src={ item.node.featuredImage.node.mediaItemUrl } alt="the post" />) : '' }
            </div>
          </Link>
          <div className="blog_products_block_list hash">
            <ul className="hash__list">
              { tags(item) }
            </ul>
            <div className="blog_products_block_list_date">{ Moment(item.node.date).format('DD.MM.YYYY') }</div>
          </div>
          <div className="blog_products_block_title"><Link className="class_link" to={ item.node.link }>{ item.node.title }</Link></div>
        </div>
      </SwiperSlide>
    );
  })

  return(
    <div className="container">
      <div className="blog margin_bottom_240">
        <div className="view_title">
          <div className="title_62">{ titlePage }</div>
          <Link className="active_link" to={"/blog/"}>View all</Link>
        </div>
        <div className="blog__products">
        <Swiper
              spaceBetween={widthScreen <= 1024 ? 20 :25}
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