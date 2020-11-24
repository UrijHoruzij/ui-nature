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
            style={{width:width+'px', height:height+'px'}}>
            <img 
                className={
                    classNames(className,{
                        "image": true
                    })
                }
                alt={alt}
                src={src}
            />
        </div>       
    )
}

Image.propTypes = {
    alt: PropTypes.string,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default Image
