import React from 'react'
import PropTypes from "prop-types";
import classNames from "classnames";

import './Sidebar.scss';

const Sidebar = props => {
    const {
        className,
        style,
        children,
        background,
        color,
        blur
    } = props;
    return (
        <div className={classNames("sidebar",className)} 
            style={Object.assign({backgroundImage: `url(${background})`},style)}>
            <div className="sidebar__color" style={{backgroundColor:color}}>
                <div className="sidebar__blurred" style={{backdropFilter:`blur(${blur})`}}>
                    {children}       
                </div>
            </div>    
        </div>
    )
}

Sidebar.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  background: PropTypes.string,
  color: PropTypes.string,
  blur: PropTypes.string
}

export default Sidebar
