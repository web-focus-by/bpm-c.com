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

/*query siteGetAllDataQuery {
  posts {
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
  menus {
    edges {
      node {
        menuItems(first: 500) {
          edges {
            node {
              id
              path
              label
              parentId
              menuItemId
            }
          }
        }
      }
    }
  }
}*/

const Servicesitoutsourcing = ({ location }) => {
  const getData = useStaticQuery(graphql`
    query siteGetServicesitoutsourcingDataQuery {
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
      wpPage(slug: {eq: "servicesitoutsourcing"}) {
        id
        uri
        title
        content
      }
      allWpPage(filter: {wpParent: {node: {slug: {eq: "servicesitoutsourcing"}}}}) {
        edges {
          node {
            id
            title
            uri
            content
          }
        }
      }
    }
  `);
  let url = '';
  if (typeof window !== 'undefined') {
    url =  new URL(window.location.href).pathname.slice(1,-1).split("/")[1];
  }
  const contentPage = getData ? getData.wpPage : {};
  const posts = getData ? getData.allWpPost.edges : [];
  const items = getData ? getData.allWpPage.edges : [];
  const themes = items.reduce((res, val) => {
    let item = { id: val.node.id, title: val.node.title, uri: val.node.uri, content: val.content, content: val.content };
    return [...res, item]
  },[])
  
  return (
    <>
      <Layout>
        <HeroWebSiteDesign content={ contentPage } location={ location } crumbLabel="IT Outsourcing"></HeroWebSiteDesign>
        <ServiceITOutsourcing title={ "IT Outsourcing" } themes={ themes }></ServiceITOutsourcing>
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

export default Servicesitoutsourcing