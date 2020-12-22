import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components"

const FormContainer = styled.form``
const Form = props => {
    return (
        <FormContainer {...props}>
            {props.children}
        </FormContainer>
    )
}

Form.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.object,
    onSubmit: PropTypes.func
}

export default Form
