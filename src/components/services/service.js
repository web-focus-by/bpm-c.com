import * as React from "react"
import { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../../components/styles/main.css"
import "../../components/styles/icons.css"
import "../../components/styles/modules.css"
import "../../components/styles/mixins.css"
import "../../components/styles/media_1920.css"
import "../../components/styles/media_1366.css"
import "../../components/styles/media_1024.css"
import "../../components/styles/media_768.css"
import "../../components/styles/media_375.css"

function Service () {
    //const [dataText] = useState(data);
    const dataText = [
      {
        id: "service_dev",
        name: "Development",
        link: "#"
      },
      {
        id: "service_design",
        name: "Design and Branding",
        link: "#"
      },
      {
        id: "service_SEO",
        name: "SEO",
        link: "#"
      },
      {
        id: "service_SERM",
        name: "SERM",
        link: "#"
      },
      {
        id: "service_SMM",
        name: "SMM",
        link: "#"
      },
      {
        id: "service_Copywriting",
        name: "Copywriting",
        link: "#"
      },
      {
        id: "service_PPC",
        name: "PPC",
        link: "#"
      },
      {
        id: "service_devbusiness",
        name: "Website development for business",
        link: "#"
      },
    ];

    const result = dataText.map((obj) => {
      return (
        <div key={obj.id} className="services_list_item">
          <a href={obj.link}>{obj.name}</a>
        </div>
      )
    });

    return (
      <div className="container">
        <div className="services margin_bottom_240">
          <div className="services__title title_62">Services</div>
            <div className="services__list">
            {result}
          </div>
        </div>
      </div>
    );
}

export default Service;