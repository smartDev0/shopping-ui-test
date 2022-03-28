import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import MuiButton from '@material-ui/core/Button'

const StyledButton = styled(MuiButton)`
  text-transform: inherit;
  font-family: Nunito;
  ${props =>
    props.size === 'large' &&
    css`
      height: ${props.theme.sizing.button.height};
    `}
  ${props =>
    props.variant === 'outlined' &&
    css`
      border: none;
      color: black;
      &:hover {
        border: none;
      }
    `}
  ${props =>
    props.severity === 'danger' &&
    css`
      border-color: ${props.theme.palette.error.dark};
      color: ${props.theme.palette.error.dark};
      &:hover {
        border-color: ${props.theme.palette.error.main};
      }
    `}
    + button{
      margin-left: ${props => props.theme.spacing(2)}px;
    }
`

const Button = ({ children, severity, to, ...props }) => {
  const component = to ? Link : undefined

  return (
    <StyledButton
      color='secondary'
      severity={severity}
      to={to}
      component={component}
      {...props}
    >
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  size: PropTypes.string,
  variant: PropTypes.string,
  severity: PropTypes.string
}

Button.defaultProps = {
  children: null,
  to: null,
  size: 'large',
  variant: 'contained',
  severity: ''
}

export default Button
