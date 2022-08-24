import * as React from "react"
import { useRef, useEffect, useState } from "react"
import PropTypes from "prop-types"
//import { Link } from "gatsby"
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/modules.css"
import "../components/styles/mixins.css"
import "../components/styles/media_1920.css"
import "../components/styles/media_1366.css"
import "../components/styles/media_1024.css"
import "../components/styles/media_768.css"
import "../components/styles/media_375.css"

const Advantages = ({ siteTitle }) => {
  const advantages = useRef();
  let isChangeSize = false;
  const resizeBlock = () => {
    const lastKnownPositionBlock = advantages.current.offsetTop - advantages.current.offsetHeight;
    let lastKnownScrollPosition = window.scrollY;
    let difference = lastKnownScrollPosition - lastKnownPositionBlock;
    if (difference > 250 && difference < 1000) {
      isChangeSize = true;
      //advantages.current.className = 'black_bg margin_240_black' + ' margin_240_black__change';
    } else {
      isChangeSize = false;
     // advantages.current.className = 'black_bg margin_240_black'
    }
    console.log(advantages);
    console.log('Our diff ' + difference);
  }

  useEffect(
    () => {
      document.addEventListener("scroll", resizeBlock, true);
      return () => {
        document.removeEventListener("scroll", resizeBlock, true);
      };
    }, []
  );
  //style={ { isChangeSize } ? { "margin-left": "0px", "margin-right": "0px" } : null }
  return (
    <div ref={ advantages } className="black_bg margin_240_black" >
      <div className="container">
        <div className="advantages">
          <div className="advantages__title title_62">
            What our digital agency aiming for
          </div>
          <div className="advantages__subtitle font_18">
            «BPM CLOUD» digital marketing company achieves significant growth in
            online sales for our business partners. «BPM CLOUD» owns a set of
            technologies to attract the target audience attention. Our authors
            write in accordance with international experience, in various styles
            and genres. This attracts audiences to partner products, transforming
            them from ordinary consumers into true fans.
          </div>
          <div className="advantages__info">
            <div className="advantages_info_block font_18">
              «BPM CLOUD» web studio is immersed in our client’s business. We set
              clear and achievable targets.
            </div>
            <div className="advantages_info_block font_18">
              Each «BPM CLOUD» employee is focused on results only.
            </div>
            <div className="advantages_info_block font_18">
              The most effective web marketing company with world technologies in
              the heart of Europe, in Belarus.
            </div>
            <div className="advantages_info_block font_18">
              We are constantly ready to solve non-standard web promotion tasks.
            </div>
          </div>
        </div>
      </div>
    </div>
    )


  }

Advantages.propTypes = {
  siteTitle: PropTypes.string,
}

Advantages.defaultProps = {
  siteTitle: ``,
}

export default Advantages
