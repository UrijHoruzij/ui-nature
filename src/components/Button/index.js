import React from 'react';
import PropTypes from "prop-types";
import styled, {keyframes, css} from "styled-components"

const changeType = (props) => {
  switch (props.type) {
    case "primary":
      return css`
        color: ${props => props.theme.colors.colorTextContrast};
        background-color: ${props => props.theme.colors.colorAccent};
        &:hover { background-color: ${props => props.theme.colors.colorAccentActiv}; }
      `
    case "secondary":
      return css`
        color: ${props => props.theme.colors.colorText};
        background-color: ${props => props.theme.colors.colorBgSecondary};
        &:hover { background-color: ${props => props.theme.colors.colorTextSecondary}; }
      `
    case "outline":
      return css`
        color: ${props => props.theme.colors.colorText};
        background-color: transparent;
        border: 1px solid ${props => props.theme.colors.colorTextSecondary};
        &:hover { background-color: ${props => props.theme.colors.colorBgSecondary}; }
      `
    case "outline-primary":
      return css`
        color: ${props => props.theme.colors.colorText};
        background-color: transparent;
        border: 1px solid ${props => props.theme.colors.colorAccent};
        &:hover { 
          background-color: ${props => props.theme.colors.colorAccent};
          color: ${props => props.theme.colors.colorTextContrast};
        }
      `
    case "link-primary":
      return css`
        padding: 0;
        height: 100%;
        color: ${props => props.theme.colors.colorAccent};
        background-color: transparent;
        &:hover { color: ${props => props.theme.colors.colorAccentActiv}; }
      `
    case "link":
      return css`
        padding: 0;
        height: 100%;
        color: ${props => props.theme.colors.colorText};
        background-color: transparent;
        &:hover { color: ${props => props.theme.colors.colorText}; }
      `
  }
}

const ButtonContainer = styled.button`
  font-family: ${props => props.theme.fontFamily}, sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  margin: 0;
  padding: 8px 16px;
  text-decoration: none;
  height: 32px;
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
    color: ${props.theme.colors.colorTextSecondary};
    background-color: ${props.theme.colors.colorBgSecondary};
    &:hover {
      color: ${props.theme.colors.colorTextSecondary};
      background-color: ${props.theme.colors.colorBgSecondary};
    }
  ` : "" };
  ${props => props.rounded ? css`
    border-radius: 32px;
  ` : ""};
  ${props => props.fullWidth ? css`
    width: 100%;
  ` : ""};
`
const loading = keyframes`
  0% {
    opacity: 100%;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 100%;
  }
`
const Loading = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Dot = styled.span`
  width: 4px;
  height: 4px;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.colorBg};
  animation: ${loading} 1s infinite;
  &:nth-child(1){
    margin-right: 4px;
    animation-delay: 0.33s;
  }
  &:nth-child(2){
    animation-delay: 0.66s;
  }
  &:nth-child(3){
    margin-left: 4px;
    animation-delay: 0.99s;
  }
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
const Icon = styled.div`
  width: 16px;
  height: 16px;
  ${props => props.iconPosition === "left" ? css`
    margin-right: 4px;
  ` : css`
    margin-left: 4px;
  `}
`
const Button = props => {
  const {
    children,
    icon,
    iconPosition,
    overlay,
    loadingData,
  } = props;
  
  const content = () => (
    <>
      {
        (loadingData) ? (
          <Loading>
            <Dot></Dot>
            <Dot></Dot>
            <Dot></Dot>
          </Loading>
        ) : (
          icon && iconPosition === "left" ? (
            <>
              <Icon iconPosition={iconPosition}>
                {icon}
              </Icon>
              {children}
            </>
          ) : icon && iconPosition === "right" ? (
            <>
              {children}
              <Icon iconPosition={iconPosition}>
                {icon}
              </Icon>
            </>
          ) : (
            <>
              {children}
            </>
          )
        )
      }
    </>
  )

  return (
    <ButtonContainer {...props}>
      {
        (overlay) ? (
          <LabelOverlay>
            {content()}
            <Overlay>
              {overlay}
            </Overlay>
          </LabelOverlay>
        ) : ( 
          content()
        )
      }
    </ButtonContainer>
  )
}

Button.propTypes = {
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
  children: PropTypes.node,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  overlay: PropTypes.element,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  loadingData: PropTypes.bool,
  rounded: PropTypes.bool
};

Button.defaultProps = {
  type: 'primary',
  iconPosition: 'left',
  loadingData: false
}

export default Button;