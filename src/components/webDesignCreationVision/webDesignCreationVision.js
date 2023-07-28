import * as React from "react"
import { useRef, useEffect } from "react"
import PropTypes from "prop-types"
import "../../components/styles/main.scss"
import "../../components/styles/icons.scss"
import "../../components/styles/modules.scss"
import "../../components/styles/mixins.scss"
import "../../components/styles/media_1920.scss"
import "../../components/styles/media_1366.scss"
import "../../components/styles/media_1024.scss"
import "../../components/styles/media_768.scss"
import "../../components/styles/media_375.scss"

const WebDesignCreationVision = ({ content }) => {
  const creationVision = useRef()
  const hasWindow = typeof window !== "undefined"
  const widthScreen = hasWindow ? window.innerWidth : null
  let element = ""
  let cssObj = ""
  let cssObjMarginLeft = ""
  let cssObjMarginRight = ""
  const resizeBlockSecond = () => {
    const lastKnownPositionBlock = creationVision.current
      ? creationVision.current.offsetTop - creationVision.current.offsetHeight
      : 0
    let lastKnownScrollPosition = window ? window.scrollY : 0
    let difference = lastKnownScrollPosition - lastKnownPositionBlock
    if (document && document.getElementById("margin_240_black_second")) {
      if (difference > 750 && difference < 3500) {
        document
          .getElementById("margin_240_black_second")
          .style.setProperty("margin-left", "0px")
        document
          .getElementById("margin_240_black_second")
          .style.setProperty("margin-right", "0px")
      } else {
        document
          .getElementById("margin_240_black_second")
          .style.setProperty("margin-left", cssObjMarginLeft)
        document
          .getElementById("margin_240_black_second")
          .style.setProperty("margin-right", cssObjMarginRight)
      }
    }
  }

  useEffect(() => {
    if (widthScreen > 375) {
      document.addEventListener("scroll", resizeBlockSecond, true)
      return () => {
        if (document && document.getElementById("margin_240_black")) {
          element = document.getElementById("margin_240_black")
          cssObj = window ? window.getComputedStyle(element) : null
          cssObjMarginLeft = cssObj.getPropertyValue("margin-left")
          cssObjMarginRight = cssObj.getPropertyValue("margin-right")
        }
        document.removeEventListener("scroll", resizeBlockSecond, true)
      }
    }
  }, [])

  if (content) {
    const title = content.title.replace(/<[^>]+>/g, "")
    const testArr = [
      {
        title: "",
        content: [],
      },
    ]
    let counter = 0
    content.content.map(elem => {
      if (elem.includes("h4")) {
        testArr.push({
          title: elem,
          content: [],
        })
        counter++
      } else {
        testArr[counter].content.push(elem)
      }
    })
    testArr.map(e => {
      e.content.join("\n")
    })

    const resultFirstBlock = () => {
      if (
        testArr &&
        testArr[0] &&
        testArr[0].content &&
        testArr[0].content.length > 0
      ) {
        let arrayOne = testArr[0].content.reduce((next, prev) => {
          return [...next, prev]
        }, [])
        let resArrayOne = arrayOne.map((value, index) => {
          if (value.includes("<p>") || value.includes("<p>")) {
            value = value.replace("<p>", "")
            value = value.replace("</p>", "")
          }
          return value
        })
        return (
          <div className="service_package__info">
            <div className="service_package_info_block">
              {resArrayOne && resArrayOne[0] ? (
                <div
                  className="service_package_info_block__text font_18"
                  style={{ fontWeight: 300 }}
                  dangerouslySetInnerHTML={{ __html: resArrayOne[0] }}
                />
              ) : null}
              <br />
              {resArrayOne && resArrayOne[1] ? (
                <div
                  className="service_package_info_block__text font_18"
                  style={{ fontWeight: 300 }}
                  dangerouslySetInnerHTML={{ __html: resArrayOne[1] }}
                />
              ) : null}
            </div>
            {resArrayOne && resArrayOne[2] ? (
              <div className="service_package_info_block">
                <div
                  className="service_package_info_block__text font_18"
                  style={{ fontWeight: 300 }}
                  dangerouslySetInnerHTML={{ __html: resArrayOne[2] }}
                />
              </div>
            ) : null}
          </div>
        )
      }
    }
    const resultSecondBlock = () => {
      if (
        testArr &&
        testArr[1] &&
        testArr[1].content &&
        testArr[1].content.length > 0
      ) {
        let firstPartArrayCount
        let firstPartArr = testArr[1].content.reduce((next, prev) => {
          return [...next, prev]
        }, [])
        let secondPartArr = testArr[1].content.reduce((next, prev) => {
          return [...next, prev]
        }, [])
        if (testArr[1].content.length - 2 > 2) {
          let fractional = (testArr[1].content.length - 2) % 2
          if (fractional > 0) {
            firstPartArrayCount =
              Math.trunc((testArr[1].content.length - 2) / 2) + 1
          } else {
            firstPartArrayCount = (testArr[1].content.length - 2) / 2
          }
          firstPartArr = firstPartArr.splice(
            firstPartArrayCount + 1,
            testArr[1].content.length - (firstPartArrayCount + 1)
          )
          secondPartArr = secondPartArr.splice(0, firstPartArrayCount + 1)
          firstPartArr.splice(0, 0, "<ul>")
          secondPartArr.splice(secondPartArr.length + 1, 0, "</ul>")
        }
        return (
          <div className="service_package__info_list">
            <div
              className="service_package_info_list_block font_18"
              style={{ fontWeight: 300 }}
              dangerouslySetInnerHTML={{ __html: secondPartArr.join("") }}
            />
            {testArr[1].content.length - 2 > 2 && secondPartArr.length > 0 ? (
              <div
                className="service_package_info_list_block font_18"
                style={{ fontWeight: 300 }}
                dangerouslySetInnerHTML={{ __html: firstPartArr.join("") }}
              />
            ) : null}
          </div>
        )
      }
    }
    const resultThirdBlock = () => {
      if (
        testArr &&
        testArr[2] &&
        testArr[2].content &&
        testArr[2].content.length > 0
      ) {
        return (
          <div className="service_package__info_list">
            <div
              className="service_package_info_list_block font_18"
              style={{ fontWeight: 300 }}
              dangerouslySetInnerHTML={{ __html: testArr[2].content.join("") }}
            />
          </div>
        )
      }
    }
    return (
      <div
        ref={creationVision}
        id="margin_240_black_second"
        className="black_bg margin_240_black"
      >
        <div className="container">
          <div className="service_package">
            <h1
              className="service_package__title title_62"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            {resultFirstBlock()}
            <br />
            <div className="service_package_info_block">
              {testArr[1] && testArr[1].title ? (
                <h2
                  className="service_package_info_block__title"
                  dangerouslySetInnerHTML={{ __html: testArr[1].title }}
                />
              ) : null}
            </div>
            {resultSecondBlock()}
            <div className="service_package_info_block">
              {testArr[2] && testArr[2].title ? (
                <h2
                  className="service_package_info_block__title"
                  dangerouslySetInnerHTML={{ __html: testArr[2].title }}
                />
              ) : null}
            </div>
            {resultThirdBlock()}
          </div>
        </div>
      </div>
    )
  }
}

WebDesignCreationVision.propTypes = {
  siteTitle: PropTypes.string,
}

WebDesignCreationVision.defaultProps = {
  siteTitle: ``,
}

export default WebDesignCreationVision
