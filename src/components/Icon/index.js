import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
import icons from './Icons/icons';

import './Icon.scss';

const Icon = props => {
    const {
        name,
        width,
        height,
        className,
        style,
        color
    } = props;
    return (
        <svg className={classNames("icon",{
            "icon__secondary": color === "secondary",
            "icon__contrast": color === "contrast",
            "icon__accent": color === "accent",
        },className)}
        style={style}
        width={width} 
        height={height} 
        viewBox="0 0 16 16"  
        xmlns="http://www.w3.org/2000/svg">
           {icons[name]}
        </svg>
    )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object
}; 

Icon.defaultProps = {
    width: "16",
    height: "16"
}
export default Icon
