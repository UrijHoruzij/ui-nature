import React from 'react'
import PropTypes from "prop-types";
import classNames from "classnames";

import './Surface.scss';
const Surface = props => {
    const {
        className,
        style,
        children,
        width,
        height
    } = props;
    return (
        <div className={classNames("surface",className)} 
            style={Object.assign({width: width,height: height},style)}>
            {children}
        </div>
    )
}

Surface.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    width: PropTypes.string,
    height: PropTypes.string
}

export default Surface
