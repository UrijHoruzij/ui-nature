import React from 'react';
import PropTypes from "prop-types";
import icons from './Icons/icons';
import styled, { css } from "styled-components"

const changeColor = (props) => {
    switch (props.color) {
        case "accent":
            return css`stroke: ${props => props.theme.colors.colorAccent};`
        case "secondary":
            return css`stroke: ${props => props.theme.colors.colorIconSecondary};`   
        case "contrast":
            return css`stroke: ${props => props.theme.colors.colorIconContrast};`
        default:
           return css`stroke: ${props => props.theme.colors.colorIcon};`
    }
}

const IconContainer = styled.svg`
    ${props => changeColor(props)};
`
const Icon = props => {
    const { name } = props;
    return (
        <IconContainer viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
            {icons[name]}
        </IconContainer>
    )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object
}; 

Icon.defaultProps = {
    width: "16",
    height: "16"
}
export default Icon
