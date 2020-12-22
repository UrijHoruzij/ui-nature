import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components"

const ImageContainer = styled.div`
    display: flex;
    width: ${props => props.width ? props.width+'px' : '100%'};
    height: ${props => props.height ? props.height+'px' : '100%'};
`
const ImageWrapper = styled.img`
    width: 100%;
    height: 100%;
    border: none;
    border-radius: ${props => props.theme.radius};
    object-fit: cover;
`
const Image = props => {
    const {
        alt,
        src
    } = props;
    return (
        <ImageContainer {...props} >
            <ImageWrapper alt={alt} src={src}/>
        </ImageContainer>    
    )
}

Image.propTypes = {
    alt: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    src: PropTypes.string.isRequired,
    className: PropTypes.string,
    style: PropTypes.object
}

export default Image
