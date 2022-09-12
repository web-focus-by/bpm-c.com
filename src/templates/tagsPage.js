import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroPortfolio from "../components/heroPortfolio/heroPortfolio"
import ListOfPortfolio from "../components/listOfPortfolio/listOfPortfolio"
import LeadersChoiceForPortfolios from "../components/leadersChoiceForPortfolios/leadersChoiceForPortfolios"

const Servicestemplatepage = ({pageContext, location, data}) => {
  let url = '';
  if (typeof window !== 'undefined') {
    url =  new URL(window.location.href).pathname.slice(1,-1).split("/")[1];
  }
  console.log(pageContext);
  console.log(data);

  /*const contentPage = data ? data.wpPage : {};
  const posts = data ? data.allWpPost.edges : [];
  const items = data ? data.allWpPage.edges : [];
  const themes = items.reduce((res, val) => {
    let item = { id: val.node.id, title: val.node.title, uri: val.node.uri, content: val.content };
    return [...res, item]
  },[])*/
  
  return (
    <Layout>
      <HeroPortfolio location={ location } crumbLabel="Portfolio" tags={data.allWpTag.edges} selectedTag={ pageContext.uri }></HeroPortfolio>
      <ListOfPortfolio posts={ data.allWpPost.edges }></ListOfPortfolio>
      <LeadersChoiceForPortfolios></LeadersChoiceForPortfolios>
      <Seo title={ pageContext.name } />
    </Layout>
  )
}

export default Servicestemplatepage

export const query = graphql`
  query siteGetPostsDataTagsQuery ($slug: String) {
    allWpPost(filter: {tags: {nodes: {elemMatch: {slug: {eq: $slug}}}}}) {
      edges {
        node {
          id
          title
          link
          content
          tags {
            nodes {
              slug
            }
          }
          featuredImage {
            node {
              id
              mediaItemUrl
            }
          }
        }
      }
    }
    allWpTag {
        edges {
          node {
            id
            name
            description
            uri
          }
        }
      }
  }`