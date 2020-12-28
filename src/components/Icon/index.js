import React from 'react';
import PropTypes, { number } from "prop-types";
import icons from './Icons/icons';
import styled, { css } from "styled-components"

const changeColor = (props) => {
    switch (props.color) {
        case "accent":
            return css`
                stroke: ${props => props.theme.colors.colorAccent};
                fill: ${props => props.theme.colors.colorAccent};
            `
        case "secondary":
            return css`
                stroke: ${props => props.theme.colors.colorIconSecondary};
                fill: ${props => props.theme.colors.colorIconSecondary};
            `   
        case "contrast":
            return css`stroke: ${props => props.theme.colors.colorIconContrast};`
        default:
           return css`
                stroke: ${props => props.theme.colors.colorIcon};
                fill: ${props => props.theme.colors.colorIcon};
            `
    }
}

const IconContainer = styled.svg`
    ${props => changeColor(props)};
    transition: all .3s ease-in-out;
`
const Icon = props => {
    const { name } = props;
    return (
        <IconContainer fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
            {icons[name]}
        </IconContainer>
    )
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    className: PropTypes.string,
    color: PropTypes.string,
    style: PropTypes.object
}; 

Icon.defaultProps = {
    width: "16",
    height: "16"
}
export default Icon