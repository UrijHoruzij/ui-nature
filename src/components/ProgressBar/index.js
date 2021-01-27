import React from 'react'
import PropTypes from "prop-types";
import styled from "styled-components"

const changeColor = (props) => {
    if(props.background === 'white'){
        return props.theme.colors.colorBg
    }
    if(props.background === 'grey'){
        return props.theme.colors.colorBgSecondary
    }
}
const changeColorProgress = (props) => {
    if(props.type === 'success'){
        return props.theme.colors.colorAccent
    }
    if(props.type === 'error'){
        return props.theme.colors.colorError
    }
}
const calcWidth = (props) => {
    if(props.percent){
        return props.percent
    }else{
        return 1
    }
}
const Container = styled.div`
    position: relative;
    height: 4px;
    width: 100px;
    border-radius: ${props => props.theme.radius};
    background: ${props => changeColor(props)};
`
const Progress = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: ${props => calcWidth(props)}%;
    height: 100%;
    background: ${props => changeColorProgress(props)};
    border-radius: ${props => props.theme.radius};
`
const ProgressBar = (props) => {
    const {
        percent,
        type
    } = props;
    return (
        <Container {...props}>
            <Progress type={type} percent={percent}/>
        </Container>
    )
}

ProgressBar.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    background: PropTypes.oneOf([
        'white',
        'grey'
    ]),
    type: PropTypes.oneOf([
        'success',
        'error'
    ]),
    percent: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
}

ProgressBar.defaultProps = {
    type: 'success',
    background: 'grey'
}
export default ProgressBar