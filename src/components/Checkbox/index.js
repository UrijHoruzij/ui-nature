import React, {useState} from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {Icon} from '../'

const changeColor = (props) => {
    if(props.activ && !props.disabled){
        return css`border: 1px solid  ${props.theme.colors.colorAccent}`
    }
    if((props.activ && props.disabled) || (!props.activ && props.disabled)){
        return css`border: 1px solid ${props.theme.colors.colorTextSecondary}`
    }
    if(!props.activ && !props.disabled){
        return css`border: 1px solid ${props.theme.colors.colorText}`
    }
}
const Container = styled.div`
    display: flex;
    align-items: center;
`
const Label = styled.label`
    cursor: pointer;
    position: relative;
    outline: none;
    background: ${props => props.theme.colors.colorBg};
    ${props => changeColor(props)};
    border-radius: ${props => props.theme.radius};
    width: 16px;
    height: 16px;
    display: flex;
    justify-content: center;
    span{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
    }
`
const Input = styled.input.attrs({
  type: "checkbox",
})`
    display: none;
    &:checked + ${Label}{
        span{
            opacity: 100%;
        } 
    }
`
const Content = styled.label`
    margin-left: 8px;
    font-size: 16px;
    font-family: ${props => props.theme.fontFamily}, sans-serif;
    color: ${props => props.disabled ? props.theme.colors.colorTextSecondary : props.theme.colors.colorText};
    cursor: pointer;
`
const IconWrapper = styled(Icon)`
    stroke: ${props => props.theme.colors.colorText};
    fill: ${props => props.theme.colors.colorText};
`
const CheckBox = (props) => {
    const {name, checked, style,className, disabled} = props;
    const [activ, setActiv] = useState(!!checked);
    const handleChange = (props) => {
        if(props.onChange){
            props.onChange()
        }
        if(!props.disabled){
            setActiv(!activ);
        }
    }
    return (
        <Container {...style} {...className}>
            <Input id={name} name={name} defaultChecked={activ} onChange={() => handleChange(props)} disabled={disabled} />
            <Label htmlFor={name} {...activ ? {activ: true} : ''} disabled={disabled}>
                <span>
                    <IconWrapper name="check" width="16" height="16" />
                </span>
            </Label>
            <Content htmlFor={name} disabled={disabled}>Checkbox</Content>
        </Container>
        
    )
}

CheckBox.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    disabled: PropTypes.bool
}
export default CheckBox
