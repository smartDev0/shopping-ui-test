import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'

const StyledFormControl = styled(FormControl)`
  background: ${props => props.theme.palette.background.paper};
  width: 100%;
  input {
    background: ${props => props.theme.palette.background.paper};
    border-radius: ${props => props.theme.shape.borderRadius}px;
  }
`

const SelectField = ({
    label,
    options,
    required,
    size,
    margin,
    ...props
}) => (
    <StyledFormControl
        variant='outlined'
        margin={margin}
        required={required}
        size={size}
    >
        <InputLabel>{label}</InputLabel>
        <Select label={label} {...props}>
            {options.map(each => (
                <MenuItem key={each.value} value={each.value}>
                    {each.label}
                </MenuItem>
            ))}
        </Select>
    </StyledFormControl>
)

SelectField.propTypes = {
    label: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        })
    ).isRequired,
    required: PropTypes.bool,
    size: PropTypes.string,
    margin: PropTypes.string
}

SelectField.defaultProps = {
    required: false,
    size: 'medium',
    margin: 'normal'
}

export default SelectField
