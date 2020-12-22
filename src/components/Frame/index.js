import React from 'react'
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.div`
    margin-right: 2px;
`
const Content = styled.div`
    width: 100%;
    height: ${props => props.height ? props.height : '100px'};
    min-height: 100px;
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-width: ${props => props.theme.colors.colorAccent};
    &::-webkit-scrollbar {
        width: 2px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: ${props => props.theme.radius};
        background: ${props => props.theme.colors.colorAccent}; 
    }
`
const Frame = (props) => {
    return (
        <Container>
            <Content {...props}>
                 {props.children}
            </Content>
        </Container>
    )
}

Frame.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    height: PropTypes.string,
}
export default Frame
