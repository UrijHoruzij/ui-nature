import React, {useState} from 'react'
import PropTypes from "prop-types"
import styled from "styled-components"
import {Icon,Typography} from "../"

const ContainerItem = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
    &:not(:first-child){
        margin-top: 8px;
    }
`
const IconItem = styled(Icon)`
    width: 16px;
    height: 16px;
    margin-right: 4px;
    margin-left: 6px;
`
const ActivItem = styled.div`
    width: 2px;
    height: 24px;
    background: ${props => props.activ ? props.theme.colors.colorAccent : 'transparent'};
    margin-right: 4px;
    transition: all .3s ease-in-out;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const Menu = (props) => {
    const {
        menu,
        activItem
    } = props;
    const [activ, setActiv] = useState(activItem);
    const handleChangeActiv = (handleClick,id) => {
        handleClick();
        setActiv(id);
    }
    return (
        <Container {...props}>
            {menu.map(item =>
                <ContainerItem
                    key={item.name}
                    onClick={() => handleChangeActiv(item.onClick,item.id)}
                >
                    <ActivItem {...activ === item.id ? {activ: true} : ''}/>
                    {item.icon ? (
                        <IconItem name={item.icon}/>
                    ): '' }
                    <Typography type="menu">
                        {item.name}
                    </Typography>
                </ContainerItem>
            )}
        </Container>
    )
}

Menu.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    menu: PropTypes.array,
    activItem: PropTypes.number
}

export default Menu
