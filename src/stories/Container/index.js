import React from 'react'
import PropTypes from 'prop-types'
import MuiContainer from '@material-ui/core/Container'

const Container = ({ children, ...props }) => (
  <MuiContainer {...props}>{children}</MuiContainer>
)

Container.propTypes = {
  children: PropTypes.node
}

Container.defaultProps = {
  children: null
}

export default Container
