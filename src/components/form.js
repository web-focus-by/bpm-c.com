import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/modules.css"
import "../components/styles/mixins.css"
import gifUriy from "../images/uriy.gif"
import gifKanu from "../images/kanu.gif"
import gifVlada from "../images/vlada.png"

const Form = ({ siteTitle }) => (
  <div className="container">
   <div className="form margin_bottom_240">
   <div className="form__block">
   <div className="form_block_title">Get in touch</div>
   <div className="form_block_info">Is there any point in delaying starting our cooperation, if leading experts are already with our digital marketing agency? Let’s get acquainted and jointly go towards necessary goals in goods and services digital promotion. The first step is so easy!</div>
   <div className="form_block_text">
    <p>Write to us, Yuri, Kanu or Vlada will contact you</p>
    <div className="form_block_gif">
    <img src={gifUriy} />
    <img src={gifKanu} />
    <img src={gifVlada} />
    </div>
   </div>
   <div className="form_block_email">info@bpm-c.com</div>
   </div>
   <div className="form__block">
   <div className="form_block_wrapper">
      <form id="search-form" action="#" method="POST">
        <div className="form_line-wrapper">
          <input id="name" type="text" autoComplete="off" name="user_name" className="form_name input-yellow "  required />
          <label>Name*</label>
        </div>
                                
          <div className="form_line-wrapper">
            <input type="tel" id="tel" autoComplete="off" name="user_phone" className="form-phone input-phone form_phone input-yellow" required />
              <label>Phone*</label>
          </div>

          <div className="form_line-wrapper">
            <input type="text" id="mail" autoComplete="off" name="user_mail" className="form-mail input-mail form_mail input-yellow" required />
            <label>E-mail</label>
           </div>

           <div className="form_block_send">
           <div><button className="button_black">Send<span className="arrow_white"></span></button></div>
              <p>By pressing the button, I agree for the processing of personal data</p>
          </div>
        </form>
                            
    </div>


   </div>

   </div>
  </div>
)

Form.propTypes = {
  siteTitle: PropTypes.string, 
}

Form.defaultProps = {
  siteTitle: ``,
}

export default Form



