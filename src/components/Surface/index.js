import React from 'react'
import PropTypes from "prop-types";
import styled from "styled-components";

const SurfaceContainer = styled.div`
    border-radius: ${props => props.theme.radius};
    background-color: ${props => props.theme.colors.colorBg};
    padding: 8px;
    ${props => props.theme.shadow.popup};
    min-width: 80px;
    min-height: 80px;
    width: ${props => props.width ? props.width : '80px'};
    height: ${props => props.height ? props.height : '80px'};
`

const Surface = props => {
    return (
        <SurfaceContainer {...props}>
            {props.children}
        </SurfaceContainer>
    )
}

Surface.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
}

export default Surface
