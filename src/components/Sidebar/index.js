import React from 'react'
import PropTypes from "prop-types";
import styled, { css } from "styled-components"

const Container = styled.div`
    width: 320px;
    max-width: 320px;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 0;
    ${props => props.background ? css`
        background-image: url(${props.background})
    ` : ''}
`
const Color = styled.div`
    width: 100%;
    height: 100%;
    z-index: 1;
    ${props => props.color ? css`
        background-color: ${props.color};
    ` : ''}
`
const Blur = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;
    ${props => props.blur ? css`
        backdrop-filter: blur(${props.theme.blur});;
    ` : ''}
`
const Sidebar = props => {
    const {
        children,
        color,
        blur
    } = props;
    return (
        <Container {...props}>
            <Color color={color}>
                <Blur blur={blur}>
                    {children}
                </Blur>
            </Color>
        </Container>
    )
}

Sidebar.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  background: PropTypes.string,
  color: PropTypes.string,
  blur: PropTypes.bool
}

export default Sidebar
