import React from 'react'
import styled from 'styled-components'
import ArrowIcon from '../assets/Group 646.png'
import SettingsIcon from '../assets/Settings.png'
import FavoritesIcon from '../assets/Layer 2-2.png'
import MessagesIcon from '../assets/Layer 2-1.png'
import QuestionIcon from '../assets/Layer 2.png'
import Coins from '../assets/coins.png'
import ProfilePic from '../assets/Group 815.png'
import DownIcon from '../assets/angle down.png'
import '../styles/index.css'

const HeaderContainer = styled.div`
    background: transparent;
    display:  flex;
    height: 105px;
    width: 100%;
    /* border: 1px black solid; */
    align-items: center;
`
const Icon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
`

const SettingTitle = styled.div`
    margin-left: 10px;
    width: 78px;
    height: 29px;
    text-align: left;
    letter-spacing: 0px;
    color: #232326;
    opacity: 1;
    font-size: 20px;
    font-weight: 600;
`

const CoinsCounter = styled.div`
    text-align: left;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    letter-spacing: 0px;
    font-size:16px;
    color: #F4B844;
    opacity: 1;
    margin-left: 0px;
`
const Header = () => {
    return (
        <HeaderContainer>
            <Icon style={{ marginLeft: "45px" }} src={ArrowIcon} />
            <Icon style={{ marginLeft: "70px" }} src={SettingsIcon} />
            <SettingTitle style={{ fontFamily: "DM Sans", color: "#232326" }}>
                Setting
            </SettingTitle>
            <Icon style={{ marginLeft: "57%", marginRight: "30px" }} src={MessagesIcon} />
            <Icon style={{ marginRight: "30px" }} src={QuestionIcon} />
            <Icon style={{ marginRight: "30px" }} src={FavoritesIcon} />
            <Icon style={{ marginRight: "10px" }} src={Coins} />
            <CoinsCounter>50000</CoinsCounter>
            <Icon style={{ height: "8px", width: "8px", marginRight: "30px", marginLeft: "30px" }} src={DownIcon} />
            <Icon style={{ height: "40px", width: "40px", marginRight: "30px" }} src={ProfilePic} />

        </HeaderContainer>
    )
}

export default Header
