import * as React from "react"
import Layout from "../components/layout"
import HeroPortfolio from "../components/heroPortfolio/heroPortfolio"

const Portfolio = ({ location }) => {
  return (
    <>
      <Layout>
        <HeroPortfolio location={ location } crumbLabel="Portfolio"></HeroPortfolio>
      </Layout>
    </>
  );
};

export default Portfolio