import * as React from "react"

import WebSiteDesignLayout from "../components/webSiteDesignLayout/webSiteDesignLayout";

const WebsiteDesign = ({ location }) => {

    return (
        <>
          <WebSiteDesignLayout location={ location } crumbLabel="Services" ></WebSiteDesignLayout>
        </>
    );
};

export default WebsiteDesign