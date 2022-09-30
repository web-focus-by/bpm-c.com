import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./listOfPortfolio.css"
import "../../components/styles/main.css"
import "../../components/styles/modules.css"
import "../../components/styles/icons.css"
import "../../components/styles/modules.css"
import "../../components/styles/mixins.css"
import "../../components/styles/media_1920.css"
import "../../components/styles/media_1366.css"
import "../../components/styles/media_1024.css"
import "../../components/styles/media_768.css"
import "../../components/styles/media_375.css"

const ListOfPortfolio = ({ posts }) => {
  const remainder = (posts.length % 10) > 0 ? 1 : 0;
  const countOfPage = Math.trunc(posts.length/10) + remainder;
  const testArr = [{
    id: null,
    content: null,
  }]
  let counter = 0;
  posts.map((val, index) => {
    let i = index+1;
    if (index === 0) {
      testArr[0].id = counter + 1;
      testArr[0].content = val;
    } else if (Math.trunc(i/10) === 0 || (Math.trunc(i/10) === 1 && i%10 === 0)) {
      testArr.push(
        {id: counter + 1, content: val}
      )
    } else if ( Math.trunc(i/10) === 1 && i%10 > 0 && Math.trunc(i/10) < countOfPage ) {
      counter = Math.trunc(i/10) + 1;
      testArr.push(
        {id: counter, content: val}
      )
    } else if ( Math.trunc(i/10) > 1 && (Math.trunc(i/10) < countOfPage && Math.trunc(i/10) !== countOfPage - 1) ) {
      counter = Math.trunc(i/10);
      testArr.push(
        {id: counter, content: val}
      )
    } else if (Math.trunc(i/10) === countOfPage - 1 && i%10 > 0) {
      counter = Math.trunc(i/10) + 1;
      testArr.push(
        {id: counter, content: val}
      )
    }
  })
  console.log(testArr);
  const items = posts.map((post, index) => {
    let tags = [];
    if (post && post.node.tags) {
      tags = post.node.tags.nodes.map((tag, i) => {
        let valueTag = '#' + tag.slug;
        return (
          <li className="hash_list_block">
            <Link to={ "/tag/" + tag.slug + "/" }>{ valueTag }</Link>
          </li>
        )
      })
    }
    return (
      <div className="portfolio_products_block">
        <div className="portfolio_products_block_pic">
          <Link to={ post.node.link }>
            {
              post.node.featuredImage && post.node.featuredImage.node.mediaItemUrl ? (
                <img src={ post.node.featuredImage.node.mediaItemUrl } alt="the post"/>
              ) : ''
            }
          </Link>
        </div>
        <div className="portfolio_products_block_list hash">
          <ul className="hash__list">
            { tags }
          </ul>
        </div>
        <div className="portfolio_products_block_title" >{ post.node.title }</div>
      </div>
    )
  })
  return (
    <div className="container">
      <div className="portfolio margin_bottom_for_portfolio_240">
        <div className="portfolio__products">
          { items }
        </div>
      </div>
    </div>
  )
}

ListOfPortfolio.propTypes = {
  siteTitle: PropTypes.string,
}

export default ListOfPortfolio;