import React from 'react'
import PropTypes from "prop-types";
import styled from "styled-components"
import Typography from "../Typography";

const EmptyContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const EmptyImage = styled.div`
    max-width: 120px;
    max-height: 120px;
`
const EmptyDescription = styled(Typography)`
    margin: 0;
    margin-top: 8px;
`
const Empty = props => {
    const {
        image,
        description,
    } = props;
    return (
        <EmptyContainer {...props}>
            {image ? <EmptyImage>{image}</EmptyImage> : null}
            <EmptyDescription type="text">{description}</EmptyDescription>
        </EmptyContainer>
    )
}

Empty.propTypes = {
    image: PropTypes.element,
    description: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default Empty
