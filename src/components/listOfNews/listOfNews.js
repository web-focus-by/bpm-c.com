import * as React from "react"
import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Moment from "moment"
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

const ListOfNews = ({ posts }) => {
  const notInfo = "Nothing found for your request..."
  const [selectedPosts, setSelectedPosts] = useState(posts)
  const [selectedTag, setSelectedTag] = useState("allTag")
  const [selectedCategory, setSelectedCategory] = useState("allCategory")

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

  const filterByTag = item => {
    if (item !== selectedTag) {
      if (item === "allTag") {
        if (selectedCategory === "allCategory") {
          setSelectedPosts(posts)
        } else {
          const temporaryArr = posts.reduce((next, val) => {
            if (
              val.node.categories.nodes.findIndex(val => {
                return val.name === selectedCategory
              }) !== -1
            ) {
              next.push(val)
            }
            return next
          }, [])
          setSelectedPosts(temporaryArr)
        }
      } else {
        if (selectedCategory === "allCategory") {
          const newArr = posts.reduce((newArray, currentValue) => {
            if (
              currentValue.node.tags.nodes.findIndex(val => {
                return val.slug === item
              }) !== -1
            ) {
              newArray.push(currentValue)
            }
            return newArray
          }, [])
          setSelectedPosts(newArr)
        } else {
          const temporaryArr = posts.reduce((next, val) => {
            if (
              val.node.categories.nodes.findIndex(val => {
                return val.name === selectedCategory
              }) !== -1
            ) {
              next.push(val)
            }
            return next
          }, [])
          const newArr = temporaryArr.reduce((newArray, currentValue) => {
            if (
              currentValue.node.tags.nodes.findIndex(val => {
                return val.slug === item
              }) !== -1
            ) {
              newArray.push(currentValue)
            }
            return newArray
          }, [])
          setSelectedPosts(newArr)
        }
      }
      if (document && document.getElementById(item)) {
        document.getElementById(item).className = "button_item_tag__active"
        document.getElementById(selectedTag).className = "button_item_tag"
      }
      setSelectedTag(item)
    }
  }

  const filterByCategory = item => {
    if (item !== selectedCategory) {
      if (item === "allCategory") {
        if (selectedTag === "allTag") {
          setSelectedPosts(posts)
        } else {
          const temporaryArr = posts.reduce((next, val) => {
            if (
              val.node.tags.nodes.findIndex(val => {
                return val.slug === selectedTag
              }) !== -1
            ) {
              next.push(val)
            }
            return next
          }, [])
          setSelectedPosts(temporaryArr)
        }
      } else {
        if (selectedTag === "allTag") {
          const newArr = posts.reduce((newArray, currentValue) => {
            if (
              currentValue.node.categories.nodes.findIndex(val => {
                return val.name === item
              }) !== -1
            ) {
              newArray.push(currentValue)
            }
            return newArray
          }, [])
          setSelectedPosts(newArr)
        } else {
          const temporaryArr = posts.reduce((next, val) => {
            if (
              val.node.tags.nodes.findIndex(val => {
                return val.slug === selectedTag
              }) !== -1
            ) {
              next.push(val)
            }
            return next
          }, [])
          const newArr = temporaryArr.reduce((newArray, currentValue) => {
            if (
              currentValue.node.categories.nodes.findIndex(val => {
                return val.name === item
              }) !== -1
            ) {
              newArray.push(currentValue)
            }
            return newArray
          }, [])
          setSelectedPosts(newArr)
        }
      }
      if (document && document.getElementById(item)) {
        document.getElementById(item).className = "button_item_tag__active"
        document.getElementById(selectedCategory).className = "button_item_tag"
      }
      setSelectedCategory(item)
    }
  }

  const topics = posts.reduce((allTopics, post) => {
    let temporaryRes = post.node.tags.nodes.reduce((res, tag) => {
      return [...res, tag.slug]
    }, [])
    allTopics.push(temporaryRes)
    return allTopics
  }, [])
  const unicTopics = [
    ...new Set(topics.reduce((next, prev) => next.concat(prev), [])),
  ]
  const tags = unicTopics.map((tag, index) => {
    return (
      <button
        id={tag}
        key={tag}
        className="button_item_tag"
        onClick={() => {
          filterByTag(tag)
        }}
      >
        {tag}
      </button>
    )
  })

  const categories = posts.reduce((allCategories, post) => {
    let temporaryRes = post.node.categories.nodes.reduce((res, tag) => {
      return [...res, tag.name]
    }, [])
    allCategories.push(temporaryRes)
    return allCategories
  }, [])
  const unicCategories = [
    ...new Set(categories.reduce((next, prev) => next.concat(prev), [])),
  ]
  const category = unicCategories.map((val, i) => {
    return (
      <button
        id={val}
        key={val}
        className="button_item_tag"
        onClick={() => {
          filterByCategory(val)
        }}
      >
        {val}
      </button>
    )
  })

  const fractionOfListForLazyLoad = values => {
    values.map((val, index) => {
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
    return textArr
  }

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
      document && document.getElementById("content-container")
        ? Math.max(
            document.body.scrollHeight,
            document.getElementById("content-container").scrollHeight,
            document.body.offsetHeight,
            document.getElementById("content-container").offsetHeight,
            document.body.clientHeight,
            document.getElementById("content-container").clientHeight
          )
        : null
    bottomPage =
      document && document.getElementById("content-container")
        ? document.getElementById("content-container").offsetTop + scrollHeight
        : null
    fractionOfListForLazyLoad(selectedPosts)
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

  const items =
    selectedPosts && selectedPosts.length <= 10
      ? selectedPosts.map((post, index) => {
          let tags = []
          if (post && post.node.tags) {
            tags = post.node.tags.nodes.map((tag, i) => {
              let valueTag = "#" + tag.slug
              if (i < 2) {
                return (
                  <li
                    key={i.toString() + valueTag.toString()}
                    className="hash_list_block"
                  >
                    <Link to={"/tag/" + tag.slug + "/"}>{valueTag}</Link>
                  </li>
                )
              }
            })
          }
          return (
            <div className="blogs_products_block">
              <div className="blogs_products_block_pic" itemtype="https://schema.org/ImageObject" itemscope="">
                <Link to={post.node.link}>
                  {post.node.featuredImage &&
                  post.node.featuredImage.node.mediaItemUrl ? (
                    <img
                      src={post.node.featuredImage.node.mediaItemUrl}
                      alt="the post"
                      itemprop="image"
                    />
                  ) : (
                    ""
                  )}
                </Link>
              </div>
              <div className="blogs_products_block_list hash">
                <div className="blogs_products_block_list_tags">
                  <ul className="hash__list">{tags}</ul>
                </div>
                <div className="blogs_products_block_list_date">
                  {Moment(post.node.link).format("DD-MM-YYYY")}
                </div>
              </div>
              <Link to={post.node.link}>
                <div className="blogs_products_block_title">
                  <a>{post.node.title}</a>
                </div>
              </Link>
            </div>
          )
        })
      : listItems.map((post, index) => {
          let tags = []
          if (post && post.node.tags) {
            tags = post.node.tags.nodes.map((tag, i) => {
              let valueTag = "#" + tag.slug
              if (i < 2) {
                return (
                  <li
                    key={i.toString() + valueTag.toString()}
                    className="hash_list_block"
                  >
                    <Link to={"/tag/" + tag.slug + "/"}>{valueTag}</Link>
                  </li>
                )
              }
            })
          }
          return (
            <div className="blogs_products_block">
              <div className="blogs_products_block_pic" itemtype="https://schema.org/ImageObject" itemscope="">
                <Link to={post.content.node.link}>
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
              <div className="blogs_products_block_list hash">
                <div className="blogs_products_block_list_tags">
                  <ul className="hash__list">{tags}</ul>
                </div>
                <div className="blogs_products_block_list_date">
                  {Moment(post.content.node.link).format("DD-MM-YYYY")}
                </div>
              </div>
              <Link to={post.content.node.link}>
                <div className="blogs_products_block_title">
                  <a>{post.content.node.title}</a>
                </div>
              </Link>
            </div>
          )
        })

  return (
    <div id="container" className="container">
      <div className="blogs margin_bottom_240">
        <div className="blogs__products">
          {items && items.length ? items : notInfo}
        </div>
        <div className="blogs__topics">
          <div className="blogs_topics_block">
            <div className="blogs_topics_block_list">
              <div className="blogs_topics_block_list_category">
                <div className="blogs_topics_block_title">Blog</div>
                <button
                  id={"allCategory"}
                  key={"allCategory"}
                  className={
                    selectedCategory === "allCategory"
                      ? "button_item_tag__active"
                      : "button_item_tag"
                  }
                  onClick={() => {
                    filterByCategory("allCategory")
                  }}
                >
                  {"All"}
                </button>
                {category}
              </div>
              <div className="blogs_topics_block_list_topics">
                <div className="blogs_topics_block_title">Topics</div>
                <button
                  id={"allTag"}
                  key={"allTag"}
                  className={
                    selectedTag === "allTag"
                      ? "button_item_tag__active"
                      : "button_item_tag"
                  }
                  onClick={() => {
                    filterByTag("allTag")
                  }}
                >
                  {"All"}
                </button>
                {tags}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ListOfNews.propTypes = {
  siteTitle: PropTypes.string,
}

export default ListOfNews
