import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
const {name} = props
  return (
    <button>{name}</button>

 )
}
Button.defaultProps = {
    name : "Default"
}
Button.propTypes = {
  name : PropTypes.string//.isRequired //you cna also use this prop in app.jsx but it gets messy
}

export default Button
