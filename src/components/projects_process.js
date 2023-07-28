import * as React from "react"
import PropTypes from "prop-types"
import "../components/styles/main.scss"
import "../components/styles/icons.scss"
import "../components/styles/modules.scss"
import "../components/styles/mixins.scss"
import "../components/styles/media_1920.scss"
import "../components/styles/media_1366.scss"
import "../components/styles/media_1024.scss"
import "../components/styles/media_768.scss"
import "../components/styles/media_375.scss"

const ProjectsProcess = ({ siteTitle }) => {
  return (
    <div className="container">
      <div className="projects_process margin_bottom_240">
        <h1 className="projects_process__title title_62">
          Process of projects
        </h1>
        <div className="projects_process__subtitle font_18">
          We divide development into stages according to the end result. We can
          run them in parallel to help speed up the launch of the product.
        </div>
        <div className="projects_process__list">
          <div className="projects_process_list_item padding_50">
            <p>analytics</p>
            <span className="smallpuzzle"></span>
            <div className="projects_process_list_item padding_167">
              <p>graphics</p>
              <span className="pen"></span>
              <div className="projects_process_list_item padding_185">
                <p>design</p>
                <span className="dye"></span>
                <div className="projects_process_list_item padding_161">
                  <p>front-end</p>
                  <span className="front"></span>
                  <div className="projects_process_list_item padding_161">
                    <p>back-end</p>
                    <span className="back"></span>
                    <div className="projects_process_list_item padding_185">
                      <p>testing</p>
                      <span className="testing"></span>
                      <div className="projects_process_list_item padding_184">
                        <p>launch</p>
                        <span className="smallstar"></span>
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
}

ProjectsProcess.propTypes = {
  siteTitle: PropTypes.string,
}

ProjectsProcess.defaultProps = {
  siteTitle: ``,
}

export default ProjectsProcess
