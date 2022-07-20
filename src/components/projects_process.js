import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../components/styles/main.css"
import "../components/styles/icons.css"
import "../components/styles/modules.css"
import "../components/styles/mixins.css"
import "../components/styles/media_1920.css"
import "../components/styles/media_1366.css"
import "../components/styles/media_1024.css"
import "../components/styles/media_768.css"
import "../components/styles/media_375.css"

const ProjectsProcess = ({ siteTitle }) => (
  <div className="container">
    <div className="projects_process margin_bottom_240">
      <div className="projects_process__title title_62">
        Process of projects
      </div>
      <div className="projects_process__subtitle font_18">
        We divide development into stages according to the end result. We can
        run them in parallel to help speed up the launch of the product.
      </div>
      <div className="projects_process__list">
        <div className="projects_process_list_item padding_50">
          <p className="font_18">analytics</p>
          <span className="puzzle"></span>
          <div className="projects_process_list_item">
            <p className="font_18">graphics</p>
            <span className="pen"></span>
            <div className="projects_process_list_item">
              <p className="font_18">design</p>
              <span className="dye"></span>
              <div className="projects_process_list_item">
                <p className="font_18">front-end</p>
                <span className="front"></span>
                <div className="projects_process_list_item">
                  <p className="font_18">back-end</p>
                  <span className="back "></span>
                  <div className="projects_process_list_item">
                    <p className="font_18">testing</p>
                    <span className="testing"></span>
                    <div className="projects_process_list_item">
                      <p className="font_18">launch</p>
                      <span className="star"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

ProjectsProcess.propTypes = {
  siteTitle: PropTypes.string,
}

ProjectsProcess.defaultProps = {
  siteTitle: ``,
}

export default ProjectsProcess
