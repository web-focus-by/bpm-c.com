import * as React from "react"
import { useState } from "react"
import "../styles/main.scss"
import "../styles/icons.scss"
import "../styles/modules.scss"
import "../styles/mixins.scss"
import "../styles/media_1920.scss"
import "../styles/media_1366.scss"
import "../styles/media_1024.scss"
import "../styles/media_768.scss"
import "../styles/media_375.scss"

const HeroAccordion = ({title, emoji, descr, dataContent}) => {
  return (
    <>
        <div className="container">
            <div className="hero">
                <h1 className="accor__title title_62">
                        {title}<span className={emoji}></span>
                </h1>
                {descr ? <div className="accor__description">
                            {descr.map((item) => (
                                <p className="accor__description">{item}</p>
                            ))}
                            </div>
                    : null}
            </div>
            <div className="fqa margin_bottom_240">
                <div className="fqa__list">
                    {dataContent.map((obj, index) => (
                        <div className="fqa__list-item">
                            <label className="fqa_label" htmlFor={`toggle-0${index + 1}-${emoji ? emoji: ''}`} id={`0${index + 1}`}>
                            <input type="radio" className="accordion_toggle" name="accordion" id={`toggle-0${index + 1}-${emoji ? emoji: ''}`} value={index + 1} hidden></input>
                                <div className="fqa_number"><p>0{index + 1}.</p></div>
                            <div className="fqa_icon"><span className="label_icon"></span></div>
                            <div className="fqa_question">
                            <p className="question">{obj.title}</p>
                                <div className="fqa_answer">
                                <p className="answer">{obj.content}</p>
                                </div>
                            </div>
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default HeroAccordion
