import * as React from "react"

const CustomInput = ({}) => {
  return (
    <input
      id="name"
      type="text"
      autoComplete="off"
      name="user_name"
      className="form_name input-yellow "
      required
    />
  )
}

export default CustomInput
