import * as React from "react"
import { useRef, useEffect } from "react"
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

const WebDesignCreationVision = ({ siteTitle }) => {
  const creationVision = useRef();
  const element = '';
  const cssObj = '';
  const cssObjMarginLeft = '';
  const cssObjMarginRight = '';
  const resizeBlockSecond = () => {
    const lastKnownPositionBlock = creationVision.current ?
    creationVision.current.offsetTop - creationVision.current.offsetHeight :
      0;
    let lastKnownScrollPosition = window.scrollY;
    let difference = lastKnownScrollPosition - lastKnownPositionBlock;
    if (document && document.getElementById("margin_240_black_second")) {
      if (difference > 750 && difference < 3500) {
        document.getElementById("margin_240_black_second").style.setProperty('margin-left', '0px');
        document.getElementById("margin_240_black_second").style.setProperty('margin-right', '0px');
      }
      else {
        document.getElementById("margin_240_black_second").style.setProperty('margin-left', cssObjMarginLeft);
        document.getElementById("margin_240_black_second").style.setProperty('margin-right', cssObjMarginRight);
      }
    }
  }

  useEffect(
    () => {
      document.addEventListener("scroll", resizeBlockSecond, true);
      return () => {
        if (document && document.getElementById("margin_240_black")) {
          element = document.getElementById("margin_240_black");
          cssObj = window.getComputedStyle(element);
          cssObjMarginLeft = cssObj.getPropertyValue("margin-left");
          cssObjMarginRight = cssObj.getPropertyValue("margin-right");
        }
        document.removeEventListener("scroll", resizeBlockSecond, true);
      };
    }, []
  );
  return (
  <div ref={ creationVision } id="margin_240_black_second" className="black_bg margin_240_black">
    <div className="container">
    <div className="service_package">
        <div className="service_package__title title_62">
          «BPM Cloud» web design creation vision
          <br />
        </div>
        <div className="service_package__info">
          <div className="service_package_info_block">
            <div className="service_package_info_block__text font_18">
              Web design creation is not just a part of corporate identity, but 
              also the first place by which potential customers judge business. 
              It depends on design whether customers want to know more about you. 
              «BPM Cloud» web design marketing company puts one of the main accents 
              on website design.
            </div>
            <br/>
            <div className="service_package_info_block__text font_18">
              Website design is virtual face of brand. Image of company is formed 
              from the site appearance, and it’s important to correctly, clearly 
              convey to consumers the essence and goals of brand. Appearance of each 
              of the site elements and the content are also important. «BPM Cloud» web 
              design marketing company knows how to create websites that reflect personality 
              to become a powerful business development tool. Websites with unique design 
              and a full set of tools for promotion and development are available at «BPM Cloud».
            </div>
          </div>
          <div className="service_package_info_block">
            <div className="service_package_info_block__text font_18">
              Web design by «BPM Cloud» inspires trust and desire to use your service. 
              Each page will become very beautiful and bright, achieving its goals. 
              After all, our studio knows that web design development is more than nice images.
            </div>
          </div>
        </div>
        <br/>
        <div className="service_package_info_block">
          <div className="service_package_info_block__title">
            Professional web site designs steps
          </div>
        </div>
        <div className="service_package__info_list">
          <div className="service_package_info_list_block font_18">
            <ul>
              <li>Analysis of competitors allows you to identify the strengths 
                and weaknesses in design of competitors to take into account when 
                creating your site. This makes the site different from others and 
                set it apart from competition.</li>
              <li>Working with texts and their revision so that it becomes easy to read.</li>
              <li>Development of a site prototype so that you can see location of all elements.</li>
            </ul>
          </div>
          <div className="service_package_info_list_block font_18">
            <ul>
              <li>At the development stage of design layout, the site acquires colors, 
                is filled with texts and images. Website design will leave the first 
                positive impression of business, so creative web design helps us.</li>
              <li>Layout is needed to be displayed in browsers and work, so the site becomes live.</li>
            </ul>
          </div>
        </div>
        <div className="service_package_info_block">
          <div className="service_package_info_block__title">
            «BPM Cloud» website modern design services
          </div>
        </div>
        <div className="service_package__info_list">
          <div className="service_package_info_list_block font_18">
            <ul>
              <li>Website design with combination of colors, pictures and texts, 
                so that the client would be pleased to be on your site.</li>
              <li>Analysis and user behavior, because our designers must understand 
                the site target audience good enough to attract and inspire trust.</li>
              <li>Structuring of site with information location logically and consistently.</li>
            </ul>
            Web design creation is more than beautiful images.
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

WebDesignCreationVision.propTypes = {
  siteTitle: PropTypes.string,
}

WebDesignCreationVision.defaultProps = {
  siteTitle: ``,
}

export default WebDesignCreationVision
