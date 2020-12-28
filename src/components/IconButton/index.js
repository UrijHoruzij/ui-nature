import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {Icon} from '../'

const changeType = (props) => {
    switch (props.type) {
        case "primary":
        return css`
            background-color: ${props => props.theme.colors.colorAccent};
            &:hover { background-color: ${props => props.theme.colors.colorAccentActiv}; }
        `
        case "secondary":
        return css`
            background-color: ${props => props.theme.colors.colorBgSecondary};
            &:hover { background-color: ${props => props.theme.colors.colorTextSecondary}; }
        `
        case "outline":
        return css`
            background-color: transparent;
            border: 1px solid ${props => props.theme.colors.colorTextSecondary};
            &:hover { background-color: ${props => props.theme.colors.colorBgSecondary}; }
        `
        case "outline-primary":
        return css`
            background-color: transparent;
            border: 1px solid ${props => props.theme.colors.colorAccent};
            &:hover { 
                background-color: ${props => props.theme.colors.colorAccent};
            }
        `
        case "link-primary":
        return css`
            padding: 0;
            background-color: transparent;
        `
        case "link":
        return css`
            padding: 0;
            background-color: transparent;
        `
    }
}

const changeColor = props => {
    if(props.disabled){
        return css`
            stroke: ${props => props.theme.colors.colorTextSecondary};
            fill: ${props => props.theme.colors.colorTextSecondary};
            &:hover{
                stroke: ${props => props.theme.colors.colorTextSecondary};
                fill: ${props => props.theme.colors.colorTextSecondary};
            }
        `
    } else {
        switch (props.type) {
            case "primary":
                return css`
                    stroke: ${props => props.theme.colors.colorTextContrast};
                    fill: ${props => props.theme.colors.colorTextContrast};
                `
            case "secondary":
                return css`
                    stroke: ${props => props.theme.colors.colorText};
                    fill: ${props => props.theme.colors.colorText};
                `
            case "outline":
                return css`
                    stroke: ${props => props.theme.colors.colorText};
                    fill: ${props => props.theme.colors.colorText};
                `
            case "outline-primary":
                return css`
                    stroke: ${props => props.theme.colors.colorText};
                    fill: ${props => props.theme.colors.colorText};
                    ${Container}:hover &&{
                        stroke: ${props => props.theme.colors.colorTextContrast};
                        fill: ${props => props.theme.colors.colorTextContrast};
                    }
                `
            case "link-primary":
                return css`
                    stroke: ${props => props.theme.colors.colorAccent};
                    fill: ${props => props.theme.colors.colorAccent};
                    &:hover { stroke: ${props => props.theme.colors.colorAccentActiv};
                        fill: ${props => props.theme.colors.colorAccentActiv}; }
                `
            case "link":
                return css`
                    stroke: ${props => props.theme.colors.colorText};
                    fill: ${props => props.theme.colors.colorText};
                `
        }
    } 
}

const Container = styled.button`
  margin: 0;
  padding: 8px;
  text-decoration: none;
  border: none;
  border-radius: ${props => props.theme.radius};
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${props => props.disabled ? "default" : "pointer"};
  transition: all ease-in-out 0.3s;
  box-sizing: border-box;
  ${props => changeType(props) };
  ${props => props.disabled ? css`
    background-color: ${props.theme.colors.colorBgSecondary};
    &:hover {
        background-color: ${props.theme.colors.colorBgSecondary};
    }
  ` : "" };
`
const IconWrapper = styled(Icon)`
    ${props => changeColor(props)}
`
const Overlay = styled.span`
  position: absolute;
  outline: none;
  opacity: 0;
  pointer-events: none;
  user-select: none;
`
const LabelOverlay = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const IconButton = props => {
    const {
        icon,
        overlay,
        size,
        type,
        disabled
    } = props;
    
    return (
        <Container {...props}>
            {
                (overlay) ? (
                <LabelOverlay>
                    <IconWrapper disabled={disabled} width={size} height={size} type={type} name={icon}/>
                    <Overlay>
                        {overlay}
                    </Overlay>
                </LabelOverlay>
                ) : ( 
                    <IconWrapper disabled={disabled} width={size} height={size} type={type} name={icon}/>
                )
            }
        </Container>
    )
}

IconButton.propTypes = {
    type: PropTypes.oneOf([
        'primary',
        'secondary',
        'outline',
        'outline-primary',
        'link',
        'link-primary'
        ]),
    className: PropTypes.string,
    style: PropTypes.object,
    icon: PropTypes.string.isRequired,
    overlay: PropTypes.element,
    disabled: PropTypes.bool,
    size: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

IconButton.defaultProps = {
    type: 'primary',
    size: "16"
}

export default IconButton
