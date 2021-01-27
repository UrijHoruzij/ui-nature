import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components"
import { Icon, Typography } from "../";

const PopupContainer = styled.div`
  position: fixed;
  opacity: 0;
  visibility: hidden;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${props => props.border ? css`
    border: 1px solid ${props => props.theme.colors.colorBgSecondary};
  ` : ''};
  ${props => props.visible ? css`
    opacity: 100%;
    visibility: visible;
  ` : ''};
`
const PopupContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 12px;
`
const Title = styled(Typography)`
  width: 100%;
`
const PopupCloseButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
const Popup = (props) => {
  const { type, onClose, children, title } = props;
  return (
    <PopupContainer {...props}>
    {title || type === "popup-close" ? (
      <PopupContent>
        <Title margin type="h4">
          {title}
        </Title>
        {type === "popup-close" ? (
          <PopupCloseButton onClick={onClose}>
            <Icon name="close"></Icon>
          </PopupCloseButton>
        ) : null}
      </PopupContent>
    ) : null}
      {children}
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
  title: PropTypes.string
};

Popup.defaultProps = {
  type: "popup",
};

export default Popup;
