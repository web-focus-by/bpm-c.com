import * as React from "react"
import "./styles/main.scss"
import "./styles/icons.scss"
import "./styles/modules.scss"
import "./styles/mixins.scss"
import "./styles/media_1920.scss"
import "./styles/media_1366.scss"
import "./styles/media_1024.scss"
import "./styles/media_768.scss"
import "./styles/media_375.scss"

const ServicesIndex = ({ title }) => {
    const data = [
        {
            title: 'Healthcare',
            classTitle: 'health'
        },
        {
            title: 'Telecommunication',
            classTitle: 'tele'
        },
        {
            title: 'Entertainment',
            classTitle: 'enter'
        },
        {
            title: 'Retail',
            classTitle: 'retail'
        },
        {
            title: 'Fintech',
            classTitle: 'fin'
        },
        {
            title: 'Marketing',
            classTitle: 'marketing'
        },
        {
            title: 'Logistics',
            classTitle: 'log'
        },
        {
            title: 'Education',
            classTitle: 'edu'
        },
  ]
  return (
    <div className="container">
      <div className="services margin_bottom_240">
        <h2 className="services__title title_62">{title}</h2>
        <div className="services__list">
            {data.map((obj) => (
            <div className="services_list_item">
                    <span>{obj.title}<div class={obj.classTitle}></div></span>
            </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default ServicesIndex
