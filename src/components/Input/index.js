import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import './Input.scss'

const Input = props => {
  const {
    value,
    placeholder,
    disabled,
    type,
    name,
    status,
    style,
    help,
    isFocused,
    className,
    onChange,
  } = props;
  return (
    <>
      <div className="form-item">
        <input 
        className={classNames(className,{
          "input":true,
        })} 
        style={style} 
        type={type} 
        name={name} 
        onChange={onChange} 
        required 
        {...value ? value : null}
        {...disabled ? disabled : null}
        {...isFocused ? autofocus : null}
        {...props}
        />
        <label htmlFor={name} className={classNames({
          "label": true,
          "label-error": status === "error",
          "label-success": status === "success",
          "label-warning": status === "warning"
        })}>
          <span className="label-name">{placeholder}</span>
        </label>
      </div>
      <div className={
        classNames({
          "help":true,
          "help-error": status === "error",
          "help-success": status === "success",
          "help-warning": status === "warning"
        })}>
          {help}
        </div>
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
  status: PropTypes.oneOf(['error', 'success', 'warning']),
  help: PropTypes.string,
  isFocused: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
}

Input.defaultProps = {
  type: "text",
  variation: "promo"
}

export default Input;