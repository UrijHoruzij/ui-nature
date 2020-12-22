import React from 'react'
import PropTypes from "prop-types";
import styled from "styled-components";

const changeColor = (props) => {
    switch (props.color) {
        case "accent":
            return props.theme.colors.colorAccent
        case "text":
            return props.theme.colors.colorText
        case "secondary":
            return props.theme.colors.colorTextSecondary
        case "contrast":
            return props.theme.colors.colorTextContrast
        default:
            return props.theme.colors.colorText
    }
}
const changeUppercase = (uppercase) => {
    if(uppercase){
        return "uppercase"
    }else{
        return "none"
    }
}

const changeDecoration = (decoration) => {
    switch (decoration) {
        case "overline":
            return "overline"
        case "underline":
            return "underline"
        case "line-through":
            return "line-through"
        default:
            return "none"
    }
}

const Wrapper = styled.div`
    font-family: ${props => props.theme.fontFamily}, sans-serif;
    border: none;
    outline: none;
    font-weight: 500;
    color: ${props => changeColor(props)};
    text-transform: ${ props => changeUppercase(props.uppercase) };
    text-decoration: ${ props => changeDecoration(props.decoration) };
`;

const H1 = styled(Wrapper)`
    font-size: 24px;
    line-height: 32px;
`;

const H2 = styled(Wrapper)`
    font-size: 20px;
    line-height: 28px;
`;

const H3 = styled(Wrapper)`
    font-size: 18px;
    line-height: 24px;
`;

const P = styled(Wrapper)`
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
`;
const Menu = styled(P)`
    margin: 0;
`

const Typography = props => {
    switch (props.type) {
        case 'h1':
            return <H1 as="h1" {...props}/>
        case 'h2':
            return <H2 as="h2" {...props}/>
        case 'h3':
            return <H3 as="h3" {...props}/>
        case 'text':
            return <P as="p" {...props}/>
        case 'menu':
            return <Menu as="p" {...props}/>
        default:
            return <P as="p" {...props}/>
    }
}

Typography.propTypes = {
    type: PropTypes.oneOf([
        'h1',
        'h2',
        'h3',
        'text',
        'menu'
    ]),
    color: PropTypes.oneOf([
        'accent',
        'text',
        'secondary',
        'contrast'
    ]),
    children: PropTypes.node,
    uppercase: PropTypes.bool,
    decoration: PropTypes.oneOf([
        'underline',
        'overline',
        'line-through',
    ]),
    className: PropTypes.string,
    style: PropTypes.object
}

Typography.defaultProps = {
    color: 'text',
}

export default Typography;