import * as React from "react"
import { useState, useEffect, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import HeroWebSiteDesign from "../../components/heroWebSiteDesign/heroWebSiteDesign";
import HeaderWebSiteDesign from "../../components/headerWebSiteDesign/headerWebSiteDesign";
import PortfolioWebSiteDesign from "../../components/portfolioWebSiteDesign/portfolioWebSiteDesign"
import WebSiteDesignReason from "../../components/webSiteDesignReason/webSiteDesignReason"
import GoalsDesign from "../../components/goalsDesign/goalsDesign"
import RequiresWebsiteDesign from "../../components/requiresWebsiteDesign/requiresWebsiteDesign"
import ResWebDesign from "../../components/resWebDesign/resWebDesign"
import ResultsOfWebDesign from "../../components/resultsOfWebDesign/resultsOfWebDesign"
import WebDesignCreationVision from "../../components/webDesignCreationVision/webDesignCreationVision"
import ServicesITOutsourcing from "../../components/servicesITOutsourcing/servicesITOutsourcing"
import SiteDesignByBpmCloud from "../../components/siteDesignByBpmCloud/siteDesignByBpmCloud"
import BuyWebSite from "../../components/buyWebSite/buyWebSite"
import PhoneButn from "../../components/phone_butn"
import Modal from "../../components/modal"
import DropdownServices from "../../components/dropdown_services"
import Form from "../../components/form"
import Blog from "../../components/blog"
import Services from "../../components/services"
import Reviews from "../../components/reviews"
import Footer from "../../components/footer"

const WebSiteDesignLayout = ({ location, crumbLabel}) => {
    const refMenu = useRef();
    const [isToggle, setToggle] = useState(false);
    const closeOpenMenu = () => {
        setToggle(!isToggle);
    }
    const closeMenu = () => {
        setToggle(false);
    }
    const [isOpen, setModalActive] = useState(false);
    const toggleModalActive = () => {
        setModalActive(!isOpen);
    }

    const clickOut = (e) => {
        if (refMenu && refMenu.current && !refMenu.current.contains(e.target))
        {
        closeMenu();
        }
    }

    useEffect(
        () => {
        document.addEventListener("click", clickOut, true);
        return () => {
            document.removeEventListener("click", clickOut, true);
        };
        }, [isToggle]
    );

    return (
        <>
            <div className="header" ref={ refMenu }><HeaderWebSiteDesign siteTitle={ `Title` } turnOnMenu={ closeOpenMenu } />
            <DropdownServices isToggle = { isToggle } turnOffMenu={ closeMenu } /></div>
            <HeroWebSiteDesign location={ location } crumbLabel={ crumbLabel }></HeroWebSiteDesign>
            <ServicesITOutsourcing></ServicesITOutsourcing>
            <PhoneButn onClick={ toggleModalActive }></PhoneButn>
            { isOpen ? <Modal onClickClose={ toggleModalActive }></Modal> : null}
            <WebSiteDesignReason></WebSiteDesignReason>
            <PortfolioWebSiteDesign></PortfolioWebSiteDesign>
            <GoalsDesign></GoalsDesign>
            <Form></Form>
            <RequiresWebsiteDesign></RequiresWebsiteDesign>
            <Services></Services>
            <ResWebDesign></ResWebDesign>
            <Blog></Blog>
            <WebDesignCreationVision></WebDesignCreationVision>
            <ResultsOfWebDesign></ResultsOfWebDesign>
            <Reviews></Reviews>
            <BuyWebSite></BuyWebSite>
            <SiteDesignByBpmCloud></SiteDesignByBpmCloud>
            <Footer></Footer>
        </>
    );
};

export default WebSiteDesignLayout