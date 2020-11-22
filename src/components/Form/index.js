import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";

import './Form.scss';

function Form({
    className,
    children,
    style,
    onSubmit
}) {
    return (
        <form style={style} className={classNames({
            "form":true,
            className
        })} onSubmit={onSubmit}>
            {children}
        </form>
    )
}

Form.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.object,
    onSubmit: PropTypes.func
}

export default Form
