import * as React from "react"
import PropTypes from "prop-types"
import "../components/styles/main.scss"
import "../components/styles/icons.scss"
import "../components/styles/modules.scss"
import "../components/styles/mixins.scss"
import "../components/heroValues/heroValues.scss"
import "../components/styles/media_1920.scss"
import "../components/styles/media_1366.scss"
import "../components/styles/media_1024.scss"
import "../components/styles/media_768.scss"
import "../components/styles/media_375.scss"

import about from "../images/about_bpm.png"
import Kanu from "../images/kanu.mp4"
import Vlada from "../images/vlada.mp4"

const values = [
  {
    title: 'Flexibility',
    content: 'Our clients have all the freedom to choose the cooperation model, that will fit them the most. For example, you may choose mere consulting services or apply to hiring a full development team with dozens of programmers, QA specialists, designers, and business analysts that will take responsibility for developing a new IT solution from scratch.'
  },
  {
    title: 'Cooperation',
    content: 'You’ll never be left unaware of the processes, results and unexpected delays that happen during the process of development. We are also always ready to listen and discuss the requirements and find the best possible solution.'
  },
  {
    title: 'Clarity',
    content: 'No pitfalls connected with the prices, stuff, and timetable. You’ll be informed about all the aspects of the future work before it starts. All conditions will be mentioned in the documentation and contracts that we sign.'
  },
  {
    title: 'Thorough analysis and planning',
    content: 'We aren’t the hotheads who are ready to start immediately after you call for us. We follow the sophisticated process of requirements analysis and planning, so that all the unnecessary and unwilling costs and delays were calculated and devastated.'
  },
]

const anim = (elem, idShow, wrap) => {
  const parentElem = document.getElementById(elem);;
  const showElem = document.getElementById(idShow);
  const wrapper = document.getElementById(wrap);

  wrapper.classList.add('vis');

  setTimeout(() => {
    showElem.classList.add('show');
    setTimeout(() => {
      parentElem.classList.remove('type');
    }, 4500)
  }, 400);

  setTimeout(function () {
    showElem.classList.remove('show');
    wrapper.classList.remove('vis');
    parentElem.classList.add('type');
  }, 5000);
}

const ITCompany = () => (
  <div className="container">
    <div className="it_company margin_bottom_240">
      <h2 className="it_company__title title_62">About BPM Cloud</h2>
      <div className="it_company__info font_18">
        <p>BPM Cloud is a software development company has successfully cooperate with business from different spheres and locations. Many years of professional commercial experience made us from a certain set of values that determine your work and development policy and make us attractive for businesses of different size and competence.</p>
        <p>These principles distinguish us from many other software building companies and make BPM Cloud one of the best possible choices of business IT outsourcing.</p>
      </div>
      <div className="it_company__values">
        <div className="values__cards">
          <div className="value-lines">
            <span className="value-line"></span>
            <span className="value-line"></span>
          </div>
            <div className="cards-list">
                {values.map((obj, index) => (
                    <div className="value-item it_company-item">
                      <div className="item__info-number it_company-item">0{index + 1}.</div>
                      <div className="item__info-title it_company-item">{obj.title}</div>
                      <div className="item__info-content it_company-item">{obj.content}</div>
                  </div>
                ))}
             <div className="value_item it_company-item bpm">
              <img src={about} alt="about_bpm" />
              <div className="laptop_circle"><span className="laptop"></span></div>
            </div>
            <div className="value_item it_company-item people" id="people">
              <span className="gif" id="gif"></span>
              <div className="values_kanu">
                <div className="circle-video">
                  <video src={Kanu} type="video/mp4" id="circle" autoPlay muted loop>
                  </video>
                </div>
                <div className="code type" id="code">
                  <p><span className="vio">export function</span> <span className="bl">App</span><span className="yel">(</span><span className="sftbl">props</span><span className="yel">)</span>&nbsp;<span className="yel">{'{'}</span></p>
                  <p style={{marginLeft: 15}}><span className="vio">return (</span></p>
                  <p style={{marginLeft: 30}}><span className="white">&lt;</span><span className="red">div</span> <span className="or">className</span><span className="sftbl">=</span><span className="green">'App'</span><span className="white">&gt;</span></p>

                  <p style={{marginLeft: 45}}><span className="white">&lt;</span><span className="red">h1</span><span className="white">&gt;</span><span className="white">Secret message</span><span className="white">&lt;</span><span className="red">/h1</span><span className="white">&gt;</span></p>


                  <p style={{marginLeft: 30}}><span className="white">&lt;</span><span className="red">/div</span><span className="white">&gt;</span></p>
                  <p style={{marginLeft: 15}}><span className="vio">)</span></p>
                  <p id="code" onAnimationEnd={() => {
                    anim('code', 'vlada', 'gif');
                    console.log('end');
                  }}><span className="yel">{'}'}</span></p>
                </div>
              </div>
              <div className="values_vlada" id="vlada">
                <div className="circle-video">
                  <video src={Vlada} type="video/mp4" id="circle" autoPlay muted loop>
                  </video>
                </div>
                <div className="welcome">Welcome to BPM Cloud!</div>
              </div>
            </div>
          </div>
          <div className="value-lines under">
            <span className="value-line"></span>
            <span className="value-line"></span>
          </div>
          <div className="value-lines length">
            <span className="value-line"></span>
            <span className="value-line"></span>
            <span className="value-line"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

ITCompany.propTypes = {
  siteTitle: PropTypes.string,
}

ITCompany.defaultProps = {
  siteTitle: ``,
}

export default ITCompany
