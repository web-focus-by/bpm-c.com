import * as React from "react"
import { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const CustomInput = ({}) => {
  return (
      <input
        id="name"
        type="text"
        autoComplete="off"
        name="user_name"
        className="form_name input-yellow "
        required />
  )
}

export default CustomInput