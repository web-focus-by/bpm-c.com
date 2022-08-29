import * as React from "react"
import { useState, useEffect, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import WebSiteDesignLayout from "../components/webSiteDesignLayout/webSiteDesignLayout";

const WebsiteDesign = ({ location }) => {

    return (
        <>
          <WebSiteDesignLayout location={ location } crumbLabel="Services" ></WebSiteDesignLayout>
        </>
    );
};

export default WebsiteDesign