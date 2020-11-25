import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Button.scss";

const Button = props => {
  const {
    type,
    className,
    style,
    children,
    icon,
    iconPosition,
    overlay,
    disabled,
    width,
    loading,
    rounded,
    onClick
  } = props;
  const classNameComponent = classNames("button", {
        "button__primary": type === "primary",
        "button__secondary": type === "secondary",
        "button__outline": type === "outline",
        "button__disabled": disabled,
        "button__rounded": rounded,
        "button__for-all-width": width
      },
      className)
  const content = () => (
    <>
      {
        (loading) ? (
          <span className="button__loading">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </span>
        ) : (
          icon && (iconPosition === "left") ? (
            <>
              <div className="button__icon button__icon--left">
                {icon}
              </div>
              {children}
            </>
          ) : icon && (iconPosition === "right") ? (
            <>
              {children}
              <div className="button__icon button__icon--right">
                {icon}
              </div>
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
      <button
        disabled={disabled}
        onClick={onClick}
        style={style}
        className={classNameComponent}
      >
        {
          (overlay) ? (
            <label 
              className="button__label-overlay"
            >
              {content()}
              <span className="button__overlay">
                {overlay}
              </span>
            </label>
          ) : ( 
            content()
          )
        }
      </button>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf([
      'primary',
      'secondary',
      'outline'
    ]),
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  overlay: PropTypes.element,
  disabled: PropTypes.bool,
  width: PropTypes.bool,
  loading: PropTypes.bool,
  rounded: PropTypes.bool
};

Button.defaultProps = {
  type: 'primary',
  iconPosition: 'left',
  loading: false
}

export default Button;