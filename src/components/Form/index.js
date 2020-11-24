import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";

import './Form.scss';

const Form = props => {
    const   {
        className,
        children,
        style,
        onSubmit
    } = props;
    return (
        <form 
            style={style} 
            className={classNames(className,{
                "form":true,
            })} 
            onSubmit={onSubmit}
            {...props}>
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
