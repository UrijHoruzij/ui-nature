import React from 'react'
import PropTypes from "prop-types";
import styled, {css} from "styled-components"
import { Icon } from '../';

const changePosition = (props) => {
    switch (props.position) {
        case "top":
            return css`
                div${Content} {
                    bottom: calc(100% + 16px);
                    left: 50%;
                    transform: translateX(-50%);
                    &::before {
                        bottom: -4px;
                        left: 50%;
                        margin-left: -4px;
                    }
                }
            `
        case "bottom":
            return css`
                div${Content} {
                    top: calc(100% + 16px);
                    left: 50%;
                    transform: translateX(-50%);
                    &::before {
                        top: -4px;
                        left: 50%;
                        margin-left: -4px;
                    }
                }    
            `
        case "left":
            return css`
                div${Content} {
                    right: calc(100% + 16px);
                    top: 50%;
                    transform: translateY(-50%);
                    &::before {
                        right: -4px;
                        margin-top: -4px;
                        top: 50%;
                    }
                }  
            `
        case "right":
            return css`
                div${Content} {
                    left: calc(100% + 16px);
                    top: 50%;
                    transform: translateY(-50%);
                    &::before {
                        left: -4px;
                        margin-top: -4px;
                        top: 50%;
                    }
                } 
            `
    }
}
const Container = styled.div`
    position: relative;
    overflow: hidden;
    display: inline-flex;
    ${props => props.type === "tooltip-close" && props.visible ? css`
        overflow: visible;
        div${Content} {
            opacity: 1;
        }
    ` : ''};
    &:hover {
        overflow: visible;
        div${Content} {
            opacity: 1;
        }
    }
    ${props => changePosition(props)};
`
const Content = styled.div`
    z-index: 10;
    background: ${props => props.theme.colors.colorBg};
    ${props => props.theme.shadow.tooltip};
    box-sizing: border-box;
    border-radius: ${props => props.theme.radius};
    color: ${props => props.theme.colors.colorText};
    max-width: 320px;
    min-width: 176px;
    padding: 4px;
    position: absolute;
    opacity: 0;
    transition: all 0.3s ease-in-out;
    ${props => props.type === "tooltip-close" ? css`
        padding-top: 32px;
    ` : ''}; 
    &::before {
      z-index: -1;
      background: ${props => props.theme.colors.colorBg};
      content: "";
      height: 8px;
      position: absolute;
      transform: rotate(45deg);
      width: 8px;
    };
    
`
const CloseButton = styled.div`
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
`
const Tooltip = props => {
    const {
        type,
        children,
        info,
        onClose,
    } = props;
    return (
        <Container {...props}>
            {children}
            <Content type={type}>
                { (type === "tooltip-close") ?
                    (
                        <CloseButton onClick={onClose}>
                            <Icon name="close"></Icon>
                        </CloseButton>
                    ) : null
                }
                {info}
            </Content>
        </Container>
    )
}

Tooltip.propTypes = {
    type: PropTypes.oneOf([
        "tooltip",
        "tooltip-close"
    ]),
    position: PropTypes.oneOf([
        "left",
        "right",
        "top",
        "bottom"
    ]),
    info: PropTypes.node,
    children: PropTypes.node,
    onClose: PropTypes.func,
    visible: PropTypes.bool
}

Tooltip.defaultProps = {
    type: "tooltip",
    position: "top",
    visible: false
}
export default Tooltip
