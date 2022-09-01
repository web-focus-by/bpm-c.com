import * as React from "react"
import Layout from "../components/layout"
import HeroPortfolio from "../components/heroPortfolio/heroPortfolio"
import LeadersChoice from "../components/leaders_choice"

const Portfolio = ({ location }) => {
  return (
    <>
      <Layout>
        <HeroPortfolio location={ location } crumbLabel="Portfolio"></HeroPortfolio>
        <LeadersChoice></LeadersChoice>
      </Layout>
    </>
  );
};

export default Portfolio