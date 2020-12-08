import React from 'react'
import PropTypes from "prop-types";
import classNames from "classnames";
import { Icon } from '../';
import './Tooltip.scss';

const Tooltip = props => {
    const {
        type,
        position,
        children,
        info,
        onClose,
        visible
    } = props;
    return (
        <div className={classNames("tooltip",{
            "tooltip-left": position === "left",
            "tooltip-right": position === "right",
            "tooltip-top": position === "top",
            "tooltip-bottom": position === "bottom",
            "tooltip-close": type === "tooltip-close" && visible
        })}>
            {children}
            <div className={classNames("tooltip-content",{
                "tooltip-content-close": type === "tooltip-close",
            })}>
                { (type === "tooltip-close") ?
                    (
                        <div className="tooltip-content-close-btn" onClick={onClose}>
                            <Icon name="close"></Icon>
                        </div>
                    ) :
                    (
                        null
                    )
                }
                {info}
            </div>
        </div>
    )
}

Tooltip.propTypes = {
    type: PropTypes.oneOf([
        "tooltip",
        "tooltip-close"
    ]),
    position: PropTypes.oneOf([
        "left",
        "right",
        "top",
        "bottom"
    ]),
    info: PropTypes.node,
    children: PropTypes.node,
    onClose: PropTypes.func,
    visible: PropTypes.bool
}

Tooltip.defaultProps = {
    type: "tooltip",
    position: "top",
    visible: false
}
export default Tooltip
