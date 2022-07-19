import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/modules.css"
import "../components/styles/mixins.css"

const ServicePackage = ({ siteTitle }) => (
  <div className="black_bg margin_bottom_240">
    <div className="container">
      <div className="service_package">
        <div className="service_package__title title_62">
          Web studio «BPM CLOUD»
          <br /> service package
        </div>
        <div className="service_package__info_list">
          <div className="service_package_info_list_block">
            Whatever you turn to our digital agency and from wherever in the
            world, we are ready to start cooperation in many digital promotion
            areas for your business right now, and above all, we can:
            <ul>
              <li>Website development for business.</li>
              <li>Design and branding of your company.</li>
              <li>SEO promotion.</li>
              <li>Copywriting.</li>
              <li>Contextual advertising.</li>
              <li>SMM.</li>
              <li>SERM.</li>
              <li>Personalized applications’ development.</li>
            </ul>
          </div>
          <div className="service_package_info_list_block">
            And that’s not all! Our digital marketing firm developments can turn
            your business from boring office monotonous work into real virtual
            and successful business project. Business with a human face puts
            human relations with you above the financial side as its goal. You
            turn to us for support, and we live aiming to transfer your dreams
            into real forms.
          </div>
        </div>
        <div className="service_package__info">
          <div className="service_package_info_block">
            <div className="service_package_info_block__title">
              Website creation
            </div>
            <div className="service_package_info_block__text">
              Website construction is just the first step in the online world.
              It’s important to organize effective product promotion on the
              worldwide network. «BPM CLOUD» delivers services to businesses in
              personalized way. Our web studio team never approaches tasks in
              formulaic way, and this is what allows us to achieve the highest
              performance. Close attention we pay to preliminary work at the TK
              preparation stage. We need to reach 200% or more. Web studio
              strives to create not just a website, but a unique product of its
              kind. Our competent specialists have repeatedly demonstrated their
              abilities. Proven by every finished project!
            </div>
          </div>
          <div className="service_package_info_block">
            <div className="service_package_info_block__title">
              PPC by «BPM CLOUD»
            </div>
            <div className="service_package_info_block__text">
              Modern technology opens up endless possibilities. One of the
              directions is considered to be contextual website advertising,
              communities in social networks, and so on. Ad is displayed in
              accordance with the particular page content. Ads are defined
              contextually, using keywords, search queries of users. PPC
              advertising involves the PPC model use, when users pay for clicks
              on ad. This allows you to invest exclusively in audience that is
              truly interested in your product.
            </div>
          </div>
          <div className="service_package_info_block">
            <div className="service_package_info_block__title">
              Copywriting by «BPM CLOUD»
            </div>
            <div className="service_package_info_block__text">
              «BPM CLOUD» online marketing agency is widely known outside
              Belarus. Our employees have been representing clients’ businesses
              in favorable lights for many years. At disposal of customers are
              qualified authors who have dozens of projects behind them,
              experience of working abroad and unquenchable desire to prove the
              words’ power in action.
            </div>
          </div>
          <div className="service_package_info_block">
            <div className="service_package_info_block__title">
              Development of mobile applications
            </div>
            <div className="service_package_info_block__text">
              Mobile applications for iOS and Android are already presented in
              every business area. One website and the social network community
              is not enough. Virtual platform by «BMP CLOUD» web studio works
              wonders. Convenient interface, clear structure, catchy design,
              game elements, and well-established feedback evoke positive
              emotions, prompting users to take the product, putting your offer
              one step higher than of competitors. Our web marketing company is
              pleased to offer mobile application development services. Turn to
              those for whom creating software for smartphones is favorite
              profession.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

ServicePackage.propTypes = {
  siteTitle: PropTypes.string,
}

ServicePackage.defaultProps = {
  siteTitle: ``,
}

export default ServicePackage
