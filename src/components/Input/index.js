import React from "react";
import PropTypes from "prop-types";
import styled, {css} from "styled-components"

const changeColorLabel = (props) => {
  switch (props.status) {
    case "error":
      return css`
        border-bottom: 1px solid ${props => props.theme.colors.colorError};
        &::after {
          content: "";
          border-bottom: 1px solid ${props => props.theme.colors.colorError};
        }
      `
    case "warning":
      return css`
        border-bottom: 1px solid ${props => props.theme.colors.colorNotify};
        &::after {
          content: "";
          border-bottom: 1px solid ${props => props.theme.colors.colorNotify};
        }
      `
    case "success":
      return css`
        border-bottom: 1px solid ${props => props.theme.colors.colorAccent};
        &::after {
          border-bottom: 1px solid ${props => props.theme.colors.colorAccent};
        }
      `
    default:
      return ""
  }
}
const changeColorHelp = (props) => {
  switch (props.status) {
    case "error":
      return css`color: ${props => props.theme.colors.colorError};`
    case "warning":
      return css`color: ${props => props.theme.colors.colorNotify};`
    case "success":
      return css`color: ${props.theme.colors.colorAccent}`
    default:
      return ""
  }
}
const FormItem = styled.div`
  font-family: ${props => props.theme.fontFamily}, sans-serif;
  width: 100%;
  position: relative;
  height: 100%;
  overflow: hidden;
  & input::placeholder {
    opacity: 0;
  }
`
const InputContainer = styled.input`
  font-family: ${props => props.theme.fontFamily}, sans-serif;
  font-weight: 400;
  width: 100%;
  height: 32px;
  padding: 0;
  padding-top: ${props => props.visibleTitle ? '20px' : 0};
  font-size: 16px;
  color: ${props => props.theme.colors.colorText};
  border: none;
  outline: none;
  ${props => props.visibleTitle ? css`
    &:focus + label > span,
    &:valid + label > span {
      transform: translateY(-150%);
      font-size: 14px;
    }
  ` : css`
    &:focus + label > div,
    &:valid + label > div {
      opacity: 0
    }
  `}
  &:focus + label::after,
  &:valid + label::after {
    transform: translateX(0%);
  }
`
const Label = styled.label`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.colorTextSecondary};
  pointer-events: none;
  ${props => changeColorLabel(props)};
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -1px;
    height: 100%;
    width: 100%;
    border-bottom: 1px solid ${props => props.theme.colors.colorAccent};
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
  }
`
const LabelName = styled.span`
  position: absolute;
  bottom: 4px;
  left: 0;
  color: ${props => props.theme.colors.colorTextSecondary};
  transition: all 0.3s ease-in-out;
`
const Help = styled.div`
  font-family: ${props => props.theme.fontFamily}, sans-serif;
  font-weight: 400;
  font-size: 14px;
  margin-top: 4px;
  ${props => changeColorHelp(props)}
`
const Input = props => {
  const {
    placeholder,
    name,
    status,
    help,
    visibleTitle
  } = props;
  return (
    <>
      <FormItem>
        <InputContainer required {...props}></InputContainer>
        {visibleTitle ? (
          <Label htmlFor={name} status={status}>
            <LabelName>
              {placeholder}
            </LabelName>
          </Label>
        ) : (
          <Label htmlFor={name} status={status}>
            <LabelName as="div">
              {placeholder}
            </LabelName>
          </Label>
        )}
      </FormItem>
      <Help status={status}>
        {help}
      </Help>
    </>
  )
}

Input.propTypes = {
  value: PropTypes.any.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf([
      'email',
      'password',
      'tel',
      'text',
      'url',
    ]),
  name: PropTypes.string,
  status: PropTypes.oneOf(['error', 'success', 'warning','default']),
  help: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
  visibleTitle: PropTypes.bool
}

Input.defaultProps = {
  type: "text",
  status: "default",
  visibleTitle: true
}

export default Input;