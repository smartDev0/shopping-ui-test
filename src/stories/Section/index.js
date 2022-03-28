import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import MuiBox from '@material-ui/core/Box'

const StyledSection = styled(MuiBox)`
  position: relative;
  &:first-child {
    padding: ${props => props.theme.spacing(16)}px 0px ${props =>
        props.theme.spacing(5)}px;
    ${props => props.theme.breakpoints.up('md')} {
      padding: ${props => props.theme.spacing(18)}px 0px ${props =>
        props.theme.spacing(10)}px;
    }
  }

  ${props =>
        props.variant === 'landing' &&
        css`
      padding: ${props.theme.spacing(8)}px 0px ${props.theme.spacing(8)}px !important;
      ${props.theme.breakpoints.up('md')} {
        padding: ${props.theme.spacing(10)}px 0px ${props.theme.spacing(10)}px;
      }
    `}
}
`

const Section = ({ children, bgcolor, ...props }) => (
    <StyledSection
        bgcolor={bgcolor}
        pt={{ xs: 6, md: 8 }}
        pb={{ xs: 8, md: 10 }}
        {...props}
    >
        {children}
    </StyledSection>
)

Section.propTypes = {
    children: PropTypes.node,
    bgcolor: PropTypes.string
}

Section.defaultProps = {
    children: null,
    bgcolor: 'default'
}

export default Section
