import React from "react";
import PropTypes from "prop-types"
import styled,{ css } from "styled-components"
import tinycolor from "tinycolor2";

const changeSizeContainer = (size) => {
  switch (size) {
    case "small":
      return css`
        width: 44px;
        height: 44px;
      `
    case "medium":
      return css`
        width: 88px;
        height: 88px;
      `
    case "large":
      return css`
        width: 176px;
        height: 176px;
      `
  }
}
const changeSize = (size) => {
  switch (size) {
    case "small":
      return css`
        max-width: 44px;
        max-height: 44px;
      `
    case "medium":
      return css`
        max-width: 88px;
        max-height: 88px;
      `
    case "large":
      return css`
        max-width: 176px;
        max-height: 176px;
      `
  }
}
const changeSizeSymbol = (size) => {
  switch (size) {
    case "small":
      return css`font-size: 18px;`
    case "medium":
      return css`font-size: 24px;`
    case "large":
      return css`font-size: 36px;`
  }
}
const changeSizeOnlineBg = (size) => {
  switch (size) {
    case "small":
      return css`
        width: 8px;
        height: 8px;
      `
    case "medium":
      return css`
        width: 12px;
        height: 12px;
      `
    case "large":
      return css`
        width: 20px;
        height: 20px;
      `
  }
}
const changeSizeOnline = (size) => {
  switch (size) {
    case "small":
      return css`
        width: 6px;
        height: 6px;
      `
    case "medium":
      return css`
        width: 10px;
        height: 10px;
      `
    case "large":
      return css`
        width: 16px;
        height: 16px;
      `
  }
}
const Container = styled.div`
  position: relative;
  display: inline-block;
  ${props => changeSizeContainer(props.size) }
`
const Image = styled.img`
  border-radius: 50%;
  overflow: hidden;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 5;
  ${props => changeSize(props.size) }
`
const Symbol = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-family: ${props => props.theme.fontFamily}, sans-serif;
  font-weight: 400;
  color: ${props => props.theme.colors.colorTextContrast};
  ${props => changeSizeContainer(props.size) }
  ${props => generateAvatar(props.user) }
  ${props => changeSizeSymbol(props.size) }
`
const CheckOnline = styled.div`
  position: absolute;
  top: 90%;
  left: 80%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: ${props => props.theme.colors.colorBg};
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => changeSizeOnlineBg(props.size) }
  &::before {
    content: '';
    display: block;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.colorSuccess};
    z-index: 15;
    ${props => changeSizeOnline(props.size) }
  }
`

const getCorrectIndex = (number) => {
  if (number > 255) {
    return 255;
  }
  if (number < 0) {
    return 0;
  }
  return number > 255 ? 255 : number < 0 ? 0 : number;
};

const generateAvatar = (hash) => {
  const [r, g, b] = hash.substr(hash.length - 3, 3).split("").map((char) => getCorrectIndex(char.charCodeAt(0)));
  const color = tinycolor({ r, g, b }).lighten(12).saturate(120).toHexString();
  return css`background: ${color};`
};

const Avatar = props => {
  const { 
    user,
    avatar,
    fullname,
    size,
    isOnline
  } = props;
  const firstChar = fullname ? fullname[0].toUpperCase() : "";
  return (
    <Container {...props}>
      {avatar ? (
        <Image src={avatar} alt={fullname} size={size}/>
      ) : (
        <Symbol user={user} size={size}>
          {firstChar}
        </Symbol>
      )}
      {isOnline && (
        <CheckOnline size={size}/>
      )}
    </Container>
  );
};

Avatar.propTypes = {
  fullname: PropTypes.string,
  user: PropTypes.string,
  onClick: PropTypes.func,
  avatar: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  isOnline: PropTypes.bool
};

export default Avatar;
