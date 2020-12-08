import React from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";

import './Image.scss'

const Image = props => {
    const {
        alt,
        width,
        height,
        src,
        className
    } = props;
    return (
        <div 
            className="image-container"
            style={{width:width+'px', height:height+'px'}}>
            <img 
                className={
                    classNames("image",className)
                }
                alt={alt}
                src={src}
            />
        </div>       
    )
}

Image.propTypes = {
    alt: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    src: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default Image
