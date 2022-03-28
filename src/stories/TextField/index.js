import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import MuiTextField from '@material-ui/core/TextField'

const StyledTextField = styled(MuiTextField)`
  label {
    text-transform: lowercase;
    font-family: Nunito;
    ${props =>
      props.display === 'standard' &&
      css`
        text-transform: capitalize;
      `}
  }
  input {
    background: ${props => props.theme.palette.background.paper};
    border-radius: ${props => props.theme.shape.borderRadius}px;
  }
`

const TextField = ({ value, children, size, ...props }) => {
  const inputLabelProps = {}
  if (value) {
    inputLabelProps.shrink = value.length > 0
  }
  return (
    <StyledTextField
      variant='outlined'
      bgcolor='background.paper'
      margin='normal'
      fullWidth
      size={size}
      value={value}
      InputLabelProps={inputLabelProps}
      {...props}
    />
  )
}

TextField.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
  value: PropTypes.string
}

TextField.defaultProps = {
  children: null,
  size: 'medium',
  value: undefined
}

export default TextField
