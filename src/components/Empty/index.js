import React from 'react'
import classNames from 'classnames';
import PropTypes from "prop-types";
import Typography from "../Typography";

import './Empty.scss'

const Empty = props => {
    const {
        image,
        description,
        className
    } = props;
    return (
        <div className={classNames(className,{
            'empty':true
        })}>
            {image ? <div className="empty__image">{image}</div> : null}
            <Typography className="empty__description" type="text">{description}</Typography>
        </div>
    )
}

Empty.propTypes = {
    image: PropTypes.element,
    description: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default Empty
