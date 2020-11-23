import React from 'react'
import PropTypes from "prop-types";
import classNames from "classnames";

import './Typography.scss';

const Typography = props => {
    const {
        type,
        children,
        color,
        uppercase,
        className,
        style
    } = props;
    const classNameComponent = classNames({
        "typography": true,
        "typography__h1": type === "h1",
        "typography__h2": type === "h2",
        "typography__h3": type === "h3",
        "typography_text": type === "text",
        "typography__uppercase": uppercase,
        "typography__color-accent": color === "accent",
        "typography__color-text": color === "text",
        "typography__color-text-secondary": color === "secondary",
        "typography__color-text-contrast": color === "contrast",
        className
      })
      switch (type) {
            case 'h1':
                return <h1 style={style} className={classNameComponent}>{children}</h1>
            case 'h2':
                return <h2 style={style} className={classNameComponent}>{children}</h2>
            case 'h3':
                return <h3 style={style} className={classNameComponent}>{children}</h3>
            case 'text':
                return <p style={style} className={classNameComponent}>{children}</p>
            default:
                return <p style={style} className={classNameComponent}>{children}</p>
      }
}

Typography.propTypes = {
    type: PropTypes.oneOf([
        'h1',
        'h2',
        'h3',
        'text',
    ]),
    color: PropTypes.oneOf([
        'accent',
        'text',
        'secondary',
        'contrast'
    ]),
    children: PropTypes.node,
    uppercase: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.string
}

Typography.defaultProps = {
    color: "text"
}

export default Typography;