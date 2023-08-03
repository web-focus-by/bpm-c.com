import * as React from "react"
import { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../components/styles/main.scss"
import "../components/styles/icons.scss"
import "../components/styles/modules.scss"
import "../components/styles/mixins.scss"
import "../components/styles/media_1920.scss"
import "../components/styles/media_1366.scss"
import "../components/styles/media_1024.scss"
import "../components/styles/media_768.scss"
import "../components/styles/media_375.scss"

const DropdownServices = ({
  isToggle,
  turnOffMenu,
  selectedItem,
  allItems,
}) => {
  let url = ""
  if (typeof window !== "undefined") {
    url = new URL(window.location.href)
  }

  const selectedItemPath = allItems.filter(value => {
    if (
      value.path.slice(1, -1).split("/").length === 1 &&
      value.label === selectedItem
    ) {
      return value.path
    }
  })[0]

  const result = allItems.reduce((res, value) => {
    if (
      selectedItemPath &&
      selectedItemPath.path.slice(1, -1) &&
      value.path.slice(1, -1).split("/")[0] ===
        selectedItemPath.path.slice(1, -1).toString().toLowerCase()
    ) {
      res.push({ path: value.path, label: value.label })
    }
    return res
  }, [])

  const baseUrl = url.origin
  const data = result.reduce((resValue, value) => {
    if (value.path.slice(1, -1).split("/").length > 1) {
      resValue.push({ name: value.label, routeLink: baseUrl + value.path })
    }
    return resValue
  }, [])

  const [isOpenPoint, setOpenPoint] = useState(false)
  const closeMenu = () => {
    setOpenPoint(!isOpenPoint)
    turnOffMenu()
  }
  const resultData = data.map((value, index) => {
    return (
      <li key={index} onClick={closeMenu}>
        <Link to={value.routeLink}>{value.name}</Link>
      </li>
    )
  })
  if (isToggle) {
    return (
      <div className="dropdown_services_sticky">
        <div className="dropdown_services">
          <h3 className="dropdown_services__title">
            <a>{result[0].label}</a>
          </h3>
          <div className="dropdown_services__info">
            <ul>{resultData}</ul>
          </div>
        </div>
      </div>
    )
  }
}

DropdownServices.propTypes = {
  siteTitle: PropTypes.string,
}

DropdownServices.defaultProps = {
  siteTitle: ``,
}

export default DropdownServices
