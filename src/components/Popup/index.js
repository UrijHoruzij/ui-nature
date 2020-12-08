import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Icon } from "../";

import "./Popup.scss";

const Popup = (props) => {
  const { visible, type, onClose, children, className, style, border } = props;
  return visible ? (
    <div
      className={classNames("popup", className, {
        "popup--border": border,
        "popup--visible": visible,
      })}
      style={style}
    >
      <div className="popup-content">
        {type === "popup-close" ? (
          <div className="popup-close-btn" onClick={onClose}>
            <Icon name="close"></Icon>
          </div>
        ) : null}
        {children}
      </div>
    </div>
  ) : null;
};

Popup.propTypes = {
  type: PropTypes.oneOf(["popup-close", "popup"]),
  className: PropTypes.string,
  style: PropTypes.object,
  onClose: PropTypes.func,
  visible: PropTypes.bool,
  border: PropTypes.bool,
};

Popup.defaultProps = {
  type: "popup",
};

export default Popup;
