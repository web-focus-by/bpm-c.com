import * as React from "react"
import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./listOfPortfolio.scss"
import "../../components/styles/main.scss"
import "../../components/styles/modules.scss"
import "../../components/styles/icons.scss"
import "../../components/styles/modules.scss"
import "../../components/styles/mixins.scss"
import "../../components/styles/media_1920.scss"
import "../../components/styles/media_1366.scss"
import "../../components/styles/media_1024.scss"
import "../../components/styles/media_768.scss"
import "../../components/styles/media_375.scss"

const ListOfPortfolio = ({ posts }) => {
  let amount = 1
  let positionOfScroll, scrollHeight, bottomPage
  const remainder = posts.length % 10 > 0 ? 1 : 0
  const countOfPage = Math.trunc(posts.length / 10) + remainder
  const textArr = [
    {
      id: null,
      content: null,
    },
  ]

  let counter = 0
  posts.map((val, index) => {
    let i = index + 1
    if (index === 0) {
      textArr[0].id = counter + 1
      textArr[0].content = val
    } else if (
      Math.trunc(i / 10) === 0 ||
      (Math.trunc(i / 10) === 1 && i % 10 === 0)
    ) {
      textArr.push({ id: counter + 1, content: val })
    } else if (
      Math.trunc(i / 10) === 1 &&
      i % 10 > 0 &&
      Math.trunc(i / 10) < countOfPage
    ) {
      counter = Math.trunc(i / 10) + 1
      textArr.push({ id: counter, content: val })
    } else if (
      Math.trunc(i / 10) > 1 &&
      i % 10 === 0 &&
      Math.trunc(i / 10) < countOfPage
    ) {
      counter = Math.trunc(i / 10)
      textArr.push({ id: counter, content: val })
    } else if (
      Math.trunc(i / 10) > 1 &&
      i % 10 > 0 &&
      Math.trunc(i / 10) < countOfPage
    ) {
      counter = Math.trunc(i / 10) + 1
      textArr.push({ id: counter, content: val })
    }
  })

  const firstArr = textArr.reduce((res, val) => {
    if (val.id === 1) {
      return [...res, val]
    }
    return res
  }, [])

  const [listItems, setListItems] = useState(firstArr)

  const getResizeBlock = items => {
    let sum = 0
    for (let i = 0; i < items.length; i++) {
      if (
        document &&
        (i + 1) % 2 !== 0 &&
        document.getElementById(items[i].key)
      ) {
        sum = sum + document.getElementById(items[i].key).scrollHeight
      }
    }
    return sum
  }

  const loadData = () => {
    positionOfScroll = window && window.pageYOffset ? window.pageYOffset : null
    scrollHeight =
      document && document.getElementById("container")
        ? document.getElementById("container").scrollHeight
        : null
    bottomPage =
      document && document.getElementById("container")
        ? document.getElementById("container").offsetTop + scrollHeight
        : null
    if (bottomPage - positionOfScroll <= 2200 && textArr.length > 10) {
      const arr = textArr.reduce((res, val) => {
        if (val.id <= amount) {
          return [...res, val]
        }
        return res
      }, [])
      if (arr.length < textArr.length) {
        amount = amount + 1
      }
      setListItems(arr)
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", loadData, true)
    if (
      document &&
      document.getElementById("container") &&
      items &&
      items.length > 10
    ) {
      document.getElementById("container").style.height = getResizeBlock(items)
    }
  }, [])

  const items = listItems.map((post, index) => {
    let tags = []
    if (post && post.content && post.content.node) {
      if (post.content.node.tags) {
        tags = post.content.node.tags.nodes.map((tag, i) => {
          let valueTag = "#" + tag.slug
          return (
            <li className="hash_list_block">
              <Link to={"/tag/" + tag.slug + "/"} itemprop="url">{valueTag}</Link>
            </li>
          )
        })
      }
      return (
        <div
          id={post.content.node.id}
          key={post.content.node.id}
          className="portfolio_products_block"
        >
          <div className="portfolio_products_block_pic" itemtype="https://schema.org/ImageObject" itemscope="">
            <Link to={post.content.node.link} itemprop="url">
              {post.content.node.featuredImage &&
              post.content.node.featuredImage.node.mediaItemUrl ? (
                <img
                  src={post.content.node.featuredImage.node.mediaItemUrl}
                  alt="the post"
                  itemprop="image"
                />
              ) : (
                ""
              )}
            </Link>
          </div>
          <div className="portfolio_products_block_list hash">
            <ul className="hash__list">{tags}</ul>
          </div>
          <div className="portfolio_products_block_title">
            <Link className="portfolio_link" to={post.content.node.link} itemprop="url">
              {post.content.node.title}
            </Link>
          </div>
        </div>
      )
    }
  })

  return (
    <div id="container" className="container">
      <div className="portfolio margin_bottom_for_portfolio_240">
        <div className="portfolio__products">{items}</div>
      </div>
    </div>
  )
}

ListOfPortfolio.propTypes = {
  siteTitle: PropTypes.string,
}

export default ListOfPortfolio
