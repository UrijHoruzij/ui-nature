import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components"
import { Icon } from "../";

const PopupContainer = styled.div`
  position: fixed;
  opacity: 0;
  border-radius: ${props => props.theme.radius};
  background-color: ${props => props.theme.colors.colorBg};
  padding: 8px;
  ${props => props.theme.shadow.popup};
  min-width: 80px;
  min-height: 80px;
  max-width: 600px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => props.border ? css`
    border: 1px solid ${props => props.theme.colors.colorBgSecondary};
  ` : ''};
  ${props => props.visible ? css`
    opacity: 100%;
  ` : ''};
`
const PopupContent = styled.div``
const PopupCloseButton = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`
const Popup = (props) => {
  const { type, onClose, children } = props;
  return (
    <PopupContainer {...props}>
      <PopupContent>
        {type === "popup-close" ? (
          <PopupCloseButton onClick={onClose}>
            <Icon name="close"></Icon>
          </PopupCloseButton>
        ) : null}
        {children}
      </PopupContent>
    </PopupContainer>
  )
};

Popup.propTypes = {
  type: PropTypes.oneOf(["popup-close", "popup"]),
  visible: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  onClose: PropTypes.func,
  border: PropTypes.bool,
};

Popup.defaultProps = {
  type: "popup",
};

export default Popup;
