import * as React from "react"
import { graphql } from "gatsby"
import { fractionContent } from "../utils/fractionContent"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroWebSiteDesign from "../components/heroWebSiteDesign/heroWebSiteDesign"
import PortfolioWebSiteDesign from "../components/portfolioWebSiteDesign/portfolioWebSiteDesign"
import WebSiteDesignReason from "../components/webSiteDesignReason/webSiteDesignReason"
import GoalsDesign from "../components/goalsDesign/goalsDesign"
import RequiresWebsiteDesign from "../components/requiresWebsiteDesign/requiresWebsiteDesign"
import ResWebDesign from "../components/resWebDesign/resWebDesign"
import ResultsOfWebDesign from "../components/resultsOfWebDesign/resultsOfWebDesign"
import WebDesignCreationVision from "../components/webDesignCreationVision/webDesignCreationVision"
import ServiceITOutsourcing from "../components/serviceITOutsourcing/serviceITOutsourcing"
import SiteDesignByBpmCloud from "../components/siteDesignByBpmCloud/siteDesignByBpmCloud"
import BuyWebSite from "../components/buyWebSite/buyWebSite"
import Form from "../components/form"
import Blog from "../components/blog"
import ServicesItem from "../components/servicesItem"
import Reviews from "../components/reviews"
import FooterBlock from "../components/footerBlock/footerBlock"
import WorkTogether from "../components/workTogether/workTogether"
import Others from "../components/others/others"

const Servicestemplatepage = ({pageContext, location, data}) => {
  const contentPage = data ? data.wpPage : {};
  const posts = data ? data.allWpPost.edges : [];
  const items = data ? data.allWpPage.edges : [];
  const themes = items.reduce((res, val) => {
    let item = { id: val.node.id, title: val.node.title, uri: val.node.uri, content: val.content };
    return [...res, item]
  },[])
  const content = contentPage.content ? fractionContent(contentPage.content): null;
  let counter = 0
  const otherArray = content && content.length && content.length > 9 ? content.reduce((res,val)=>{
    if (counter > 9) {
      return [...res, val]
    }
    counter++;
    return res;
  },[]) : null
  
  return (
    <Layout>
      <HeroWebSiteDesign title={ contentPage.title } content={ content && content[0] ? content[0] : null } location={ location }></HeroWebSiteDesign>
      <ServiceITOutsourcing title={ pageContext.title } themes={ themes }></ServiceITOutsourcing>
      <WebSiteDesignReason content={ content && content[1] ? content[1] : null }></WebSiteDesignReason>
      <PortfolioWebSiteDesign posts={ posts } titlePage={"Portfolio"}></PortfolioWebSiteDesign>
      <GoalsDesign content={content && content[2] ? content[2] : null}></GoalsDesign>
      <Form></Form>
      <RequiresWebsiteDesign content={content && content[3] ? content[3] : null}></RequiresWebsiteDesign>
      <ServicesItem></ServicesItem>
      <ResWebDesign  content={content && content[4] ? content[4] : null}></ResWebDesign>
      <Blog titlePage="Blog"></Blog>
      <WebDesignCreationVision content={content && content[5] ? content[5] : null}></WebDesignCreationVision>
      <ResultsOfWebDesign content={content && content[6] ? content[6] : null}></ResultsOfWebDesign>
      <Reviews></Reviews>
      <BuyWebSite content={content && content[7] ? content[7] : null}></BuyWebSite>
      <SiteDesignByBpmCloud content={content && content[8] ? content[8] : null}></SiteDesignByBpmCloud>
      <FooterBlock content={content && content[9] ? content[9] : null}></FooterBlock>
      {otherArray && otherArray.length ? otherArray.map((item,i)=>{
        return (<Others key={i} content={item ? item : null}></Others>)
      }) : null}
      <WorkTogether></WorkTogether>
      <Seo title={ pageContext.title } />
    </Layout>
  )
}

export default Servicestemplatepage

export const query = graphql`
    query siteGetPostsDataQuery ($slug: String) {
      allWpPost(filter: {categories: {nodes: {elemMatch: {slug: {eq: "portfolios"}}}}}) {
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
      wpPage(slug: {eq: $slug}) {
        id
        uri
        title
        content
        parentId
        slug
      }
      allWpPage(filter: {wpParent: {node: {slug: {eq: $slug}}}}) {
        edges {
          node {
            id
            title
            uri
          }
        }
      }
    }`