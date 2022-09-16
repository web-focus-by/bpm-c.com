import * as React from "react"
import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Moment from 'moment';
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

const ListOfNews = ({ posts }) => {
  let url = '';
  if (typeof window !== 'undefined') {
    url =  new URL(window.location.href);
  }
  const [selectedPosts, setSelectedPosts] = useState(posts);

  const filterByTag = (item) => {
    return console.log(item.toLowerCase())
  }

  const filterByCategory = (item) => {
    return console.log(item.toLowerCase())
  }

  const topics = posts.reduce((allTopics, post) => {
    let temporaryRes = post.node.tags.nodes.reduce((res, tag)=>{
      return [...res, tag.slug];
    },[])
    allTopics.push(temporaryRes);
    return allTopics;
  },[])
  const unicTopics = [...new Set(topics.reduce((next,prev)=>next.concat(prev),[]))];
  const tags = unicTopics.map((tag, index) => {
    return (
      <button id={ tag } key={ tag } className="button_item_tag" onClick={ () =>{filterByTag(tag)} }>{ tag }</button>
    )
  });

  const  categories = posts.reduce((allCategories, post) => {
    let temporaryRes = post.node.categories.nodes.reduce((res, tag)=>{
      return [...res, tag.slug];
    },[])
    allCategories.push(temporaryRes);
    return allCategories;
  },[])
  const unicCategories = [...new Set(categories.reduce((next,prev)=>next.concat(prev),[]))];
  const category = unicCategories.map((val, i)=>{
    return (
      <button id={ val } key={ val } className="button_item_tag" onClick={ ()=>{filterByCategory(val)} }>{ val }</button>
    )
  })

  const items = selectedPosts.map((post, index) => {
    let tags = [];
    if (post && post.node.tags) {
      tags = post.node.tags.nodes.map((tag, i) => {
        let valueTag = '#' + tag.slug;
        if (i < 2 ) {
          return (
            <li key={ post.node.id.toString() + valueTag.toString() } className="hash_list_block">
              <Link to={ url.origin + "/tag/" + tag.slug + "/" }>{ valueTag }</Link>
            </li>
          )
        }
      })
    }
    return (
      <div className="blogs_products_block">
        <div className="blogs_products_block_pic">
          <Link to={ post.node.link }>
            <img src={ post.node.featuredImage.node.mediaItemUrl } />
          </Link>
        </div>
        <div className="blogs_products_block_list hash">
          <div className="blogs_products_block_list_tags">
            <ul className="hash__list">
              { tags }
            </ul>
          </div>
          <div className="blogs_products_block_list_date">
            { Moment(post.node.link).format('DD-MM-YYYY') }
          </div>
        </div>
        <div className="blogs_products_block_title" >{ post.node.title }</div>
      </div>
    )
  })
  
  return (
    <div className="container">
      <div className="blogs margin_bottom_240">
        <div className="blogs__products">
          { items }
        </div>
        <div className="blogs__topics">
          <div className="blogs_topics_block">
            <div className="blogs_topics_block_list">
              <div className="blogs_topics_block_list_category">
                <div className="blogs_topics_block_title">
                  Blog
                </div>
                <button id={ "All" } key={ "All" } className="button_item_tag" onClick={ () => { filterByTag("All") } }>{ "All" }</button>
                 { category } 
              </div>
              <div className="blogs_topics_block_list_topics">
                <div className="blogs_topics_block_title">
                  Topics
                </div>
                <button id={ "All" } key={ "All" } className="button_item_tag" onClick={ () => { filterByTag("All") } }>{ "All" }</button>
                 { tags } 
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

export default ListOfNews;