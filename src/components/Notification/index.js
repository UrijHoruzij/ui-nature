import React from 'react'
import PropTypes from "prop-types";
import classNames from "classnames";

import './Notification.scss';

const Notification = props => {
    const {
        type,
        text,
        onClose,
        position,
    } = props;
    return (
        <div>
            
        </div>
    )
}

Notification.propTypes = {
    type: PropTypes.oneOf([
        "error",
        "success",
        "warning"
    ]),
    text: PropTypes.string,
    onClose: PropTypes.func,
    position: PropTypes.oneOf([
        "left-top",
        "left-center",
        "left-bottom",
        "center-top",
        "center-center",
        "center-bottom",
        "right-top",
        "right-center",
        "right-bottom"
    ])
}

Notification.defaultProps = {
    type: "success",
    position: "right-top"
}
export default Notification
