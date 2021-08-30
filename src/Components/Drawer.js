import React from 'react'
import styled from 'styled-components'
import MenuIcon from '../assets/Group 618.png'
import AssistantIcon from '../assets/Group 620.png'
import ProfileIcon from '../assets/Group 622.png'
import SettingsIcon from '../assets/Path 1974.png'

const DrawerContainer = styled.div`
    background: transparent;
    display:  flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 7%;
    /* border: 1px black solid; */
`
const IconContainer = styled.div`
    background: transparent;
    display:  flex;
    flex-direction: row;
    align-items: center;
    height: 62px;
    width: 95%;
    border-left: ${props => props.selected ? "solid black 5px" : "solid transparent 5px"};
    cursor: pointer;
    /* border: 1px black solid; */
`
const Icon = styled.img`
    margin-left: 30%;
    width: 24px;
    height: 24px;
    opacity:1;
`
const Drawer = () => {
    return (
        <DrawerContainer>
            <IconContainer selected style={{ marginTop: "105px" }}>
                <Icon src={MenuIcon} />
            </IconContainer>
            <IconContainer style={{ marginTop: "10px" }}>
                <Icon src={AssistantIcon} />
            </IconContainer>
            <IconContainer style={{ marginTop: "10px" }}>
                <Icon src={ProfileIcon} />
            </IconContainer>
            <IconContainer style={{ marginTop: "10px" }}>
                <Icon src={SettingsIcon} />
            </IconContainer>
        </DrawerContainer>
    )
}

export default Drawer
