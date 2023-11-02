import * as React from "react"
import { useState } from "react"
import { AccordionItem } from "../faqItem"
import "../styles/main.scss"
import "../styles/icons.scss"
import "../styles/modules.scss"
import "../styles/mixins.scss"
import "../styles/media_1920.scss"
import "../styles/media_1366.scss"
import "../styles/media_1024.scss"
import "../styles/media_768.scss"
import "../styles/media_375.scss"

const HeroAccordion = ({ title, emoji, descr, dataContent }) => {
    const [openId, setId] = useState(null);
    const [hoverId, setHover] = useState(null);

  return (
    <>
        <div className="container">
            <div className="hero">
                <h2 className="accor__title title_62">
                        {title}<span className={emoji}></span>
                </h2>
                {descr ? <div className="accor__description">
                            {descr.map((item) => (
                                <p className="accor__description">{item}</p>
                            ))}
                            </div>
                    : null}
            </div>
            <div className="fqa margin_bottom_240">
              <ul className="accordion">
                {dataContent.map((faqItem, id) => {
                  return (
                    <AccordionItem
                      onClick={() => (id === openId ? setId(null) : setId(id))}
                      onMouseOver={(e) => setHover(id)}
                      onMouseLeave={(e) => setHover(null)}
                      faqItem={faqItem}
                      isOpen={id === openId}
                      isHover={id === hoverId}
                      num={`${id < 9 ? '0' : ''}${id + 1}.`}
                    />
                  );
                })}
              </ul>
            </div>
        </div>
    </>
  )
}

export default HeroAccordion
