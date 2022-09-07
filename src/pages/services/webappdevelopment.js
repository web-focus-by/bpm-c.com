import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../../components/layout"
import HeroWebSiteDesign from "../../components/heroWebSiteDesign/heroWebSiteDesign";
import PortfolioWebSiteDesign from "../../components/portfolioWebSiteDesign/portfolioWebSiteDesign"
import WebSiteDesignReason from "../../components/webSiteDesignReason/webSiteDesignReason"
import GoalsDesign from "../../components/goalsDesign/goalsDesign"
import RequiresWebsiteDesign from "../../components/requiresWebsiteDesign/requiresWebsiteDesign"
import ResWebDesign from "../../components/resWebDesign/resWebDesign"
import ResultsOfWebDesign from "../../components/resultsOfWebDesign/resultsOfWebDesign"
import WebDesignCreationVision from "../../components/webDesignCreationVision/webDesignCreationVision"
import ServiceITOutsourcing from "../../components/serviceITOutsourcing/serviceITOutsourcing"
import SiteDesignByBpmCloud from "../../components/siteDesignByBpmCloud/siteDesignByBpmCloud"
import BuyWebSite from "../../components/buyWebSite/buyWebSite"
import Form from "../../components/form"
import Blog from "../../components/blog"
import ServicesItem from "../../components/servicesItem"
import Reviews from "../../components/reviews"

const Webappdevelopment = ({ location }) => {
  const getData = useStaticQuery(graphql`
    query siteGetWebappdevelopmentDataQuery {
      allWpPost {
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
      wpPage(slug: {eq: "webappdevelopment"}) {
        id
        uri
        title
        content
      }
      allWpPage(filter: {wpParent: {node: {slug: {eq: "webappdevelopment"}}}}) {
        edges {
          node {
            id
            title
            uri
            content
          }
        }
      }
    }`
  );
  let url = '';
  if (typeof window !== 'undefined') {
    url =  new URL(window.location.href).pathname.slice(1,-1).split("/")[1];
  }
  const items = getData ? getData.allWpPage.edges : [];
  const themes = items.reduce((res, val) => {
    let item = { id: val.node.id, title: val.node.title, uri: val.node.uri };
    return [...res, item]
  },[])
  const contentPage = getData ? getData.wpPage : {};
  const posts = getData ? getData.allWpPost.edges : [];
  return (
    <>
      <Layout>
        <HeroWebSiteDesign content={ contentPage } location={ location } crumbLabel="Web application development"></HeroWebSiteDesign>
        <ServiceITOutsourcing title={ "Web application development" } themes={ themes }></ServiceITOutsourcing>
        <WebSiteDesignReason></WebSiteDesignReason>
        <PortfolioWebSiteDesign posts={ posts }></PortfolioWebSiteDesign>
        <GoalsDesign></GoalsDesign>
        <Form></Form>
        <RequiresWebsiteDesign></RequiresWebsiteDesign>
        <ServicesItem></ServicesItem>
        <ResWebDesign></ResWebDesign>
        <Blog></Blog>
        <WebDesignCreationVision></WebDesignCreationVision>
        <ResultsOfWebDesign></ResultsOfWebDesign>
        <Reviews></Reviews>
        <BuyWebSite></BuyWebSite>
        <SiteDesignByBpmCloud></SiteDesignByBpmCloud>
      </Layout>
    </>
  );
};

export default Webappdevelopment