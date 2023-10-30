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

  const hoverOn = (target) => {
    const elem = target;
    const child = elem.querySelector('.projects_process_list_item__hover-elem');
    elem.classList.add('hover');
    child.classList.add('hover');
  }

  const hoverLeave = (target) => {
    const elem = target;
    const child = elem.querySelector('.projects_process_list_item__hover-elem.hover');
    elem.classList.remove('hover');
    child.classList.remove('hover');
  }


  return (
    <div className="container">
      <div className="projects_process margin_bottom_240">
        <h2 className="projects_process__title title_62">
          What is our development process?
        </h2>
        <div className="projects_process__subtitle font_18">
          We understand that different companies have different requirements depending on the business specifics, internal resources and deadlines. However, these are the main steps of digital product creation provided by our IT development company.
        </div>
        <div className="projects_process__list">
          <div className="projects_process_list_item" onMouseOver={(e) => hoverOn(e.target)} onMouseLeave={(e) => hoverLeave(e.target)}>
            <p>analytics</p>
            <span className="smallpuzzle"></span>
            <div className="projects_process_list_item__hover-elem">
              <span className="ober"></span>
              <p>- Understanding client needs, goals, and functionalities.</p>
              <p>- Analyzing industry trends, competition, and user expectations.</p>
            </div>
              <div className="projects_process_list_item">
                <p>design</p>
                <span className="dye"></span>
                <div className="projects_process_list_item__hover-elem">
                  <span className="ober"></span>
                  <p>- Creation of a detailed software architecture, outlining components, modules, and interactions.</p>
                  <p>- UI and UX design to ensure intuitive and effective interaction.</p>
                </div>
                <div className="projects_process_list_item">
                  <p>front-end</p>
                  <span className="front"></span>
                  <div className="projects_process_list_item__hover-elem">
                    <span className="ober"></span>
                    <p>- Creating the structure and styling for user interfaces.</p>
                    <p>- Adding interactivity and dynamic functionalities.</p>
                  </div>
                  <div className="projects_process_list_item">
                    <p>back-end</p>
                    <span className="back"></span>
                    <div className="projects_process_list_item__hover-elem">
                      <span className="ober"></span>
                      <p>- Developing the core functionality and data processing.</p>
                      <p>- Storing and managing data using databases.</p>
                    </div>
                    <div className="projects_process_list_item">
                      <p>testing</p>
                      <span className="testing"></span>
                      <div className="projects_process_list_item__hover-elem">
                        <span className="ober"></span>
                        <p>- Testing individual components for functionality.</p>
                        <p>- Ensuring different parts work seamlessly together.</p>
                        <p>- Validating the software against user requirements.</p>
                      </div>
                      <div className="projects_process_list_item">
                        <p>launch</p>
                        <span className="smallstar"></span>
                        <div className="projects_process_list_item__hover-elem">
                          <span className="ober"></span>
                            <p>- Making the software available on servers or cloud platforms.</p>
                            <p>- Keeping an eye on performance and user interactions.</p>
                            <p>- Providing post-launch assistance, bug fixes, and updates.</p>
                        </div>
                         <div className="projects_process_list_item">
                          <p>support</p>
                          <span className="support"></span>
                          <div className="projects_process_list_item__hover-elem">
                            <span className="ober"></span>
                            <p>- Ongoing technical support, bug fixes, and updates as required.</p>
                            <p>- Analyzing industry trends, competition, and user expectations.</p>
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
