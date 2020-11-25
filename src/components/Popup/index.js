import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
import { Icon } from '../';

import './Popup.scss';
{
            // "popup-modal": type === "modal",
            // "popup-tooltip-image": type === "tooltip-image",
            // "popup-thumnail": type === "thumnail",
            // "popup-tooltip": type === "tooltip",
            // "popup-tooltip-close": type === "tooltip-close",
            // "popup-close": type === "modal-close", 
        }
const Popup = props => {
    const {
        type,
        onClose,
        children,
        className,
        style
    } = props;
    return (
        <div className={classNames("popup",className)}
        style={style}>
            { (type === "modal-close" || type === "tooltip-close") ?
                (
                    <div className="popup-close-btn" onClick={onClose}>
                        <Icon name="close"></Icon>
                    </div>
                ) :
                (
                    null
                )
            }
            {children}
        </div>
    )
}

Popup.propTypes = {
    type: PropTypes.oneOf([
        'tooltip-image',
        'thumnail',
        'tooltip',
        'tooltip-close',
        'modal-close',
        'modal',
        'popup'//
    ]),
    className: PropTypes.string,
    style: PropTypes.object
}

Popup.defaultProps = {
    type: "popup"
}

export default Popup;
