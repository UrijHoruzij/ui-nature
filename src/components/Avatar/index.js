import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import tinycolor from "tinycolor2";

import "./Avatar.scss";


const getCorrectIndex = (number) => {
  if (number > 255) {
    return 255;
  }
  if (number < 0) {
    return 0;
  }
  return number > 255 ? 255 : number < 0 ? 0 : number;
};

const generateAvatar = (hash) => {
  const [r, g, b] = hash.substr(hash.length - 3, 3).split("").map((char) => getCorrectIndex(char.charCodeAt(0)));
  return {
    color: tinycolor({ r, g, b }).lighten(12).saturate(120).toHexString(),
  };
};

const Avatar = props => {
  const { 
    id,
    avatar,
    fullname,
    size,
    onClick,
    className,
    style,
    isOnline
  } = props;
  const { color } = id ? generateAvatar(id) : "";
  const firstChar = fullname ? fullname[0].toUpperCase() : "";
  return (
    <div
      className={classNames(
        "avatar",
        {
          "avatar--small": size === "small",
          "avatar--medium": size === "medium",
          "avatar--large": size === "large",
        },
        className
      )}
      style={style}
      onClick={onClick}
    >
      {avatar ? (
        <img
          className={classNames("avatar__img", {
            "avatar__img--small": size === "small",
            "avatar__img--medium": size === "medium",
            "avatar__img--large": size === "large",
          })}
          src={avatar}
          alt={fullname}
        />
      ) : (
        <div
          className={classNames("avatar--symbol", {
            "avatar--symbol-small": size === "small",
            "avatar--symbol-medium": size === "medium",
            "avatar--symbol-large": size === "large",
          })}
          style={{
            background: `${color}`,
          }}
        >
          {firstChar}
        </div>
      )}
      {isOnline && (
        <div
          className={classNames("avatar__is-online", {
            "avatar__is-online--small": size === "small",
            "avatar__is-online--medium": size === "medium",
            "avatar__is-online--large": size === "large",
          })}
        ></div>
      )}
    </div>
  );
};


Avatar.propTypes = {
  fullname: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
  avatar: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  isOnline: PropTypes.bool
};


export default Avatar;
