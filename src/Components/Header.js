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
import { Popover } from 'antd'
import 'antd/dist/antd.css';
import { EditOutlined, LogoutOutlined } from '@ant-design/icons'


const text = <div style={{ cursor: "pointer", marginTop: "10px" }}>Admin Access</div>;
const content = (
    <div>
        <p style={{ cursor: "pointer" }}><EditOutlined />  Edit Profile</p>
        <p style={{ cursor: "pointer" }}><LogoutOutlined />  Logout</p>
    </div>
);

const HeaderMainContainer = styled.div`
    display: flex;
    flex-direction: row;

`

const HeaderContainer = styled.div`
    background: transparent;
    display:  flex;
    flex-direction: row;
    height: 13vh;
    width: 50%;
    /* border: 1px black solid; */
    align-items: center;
    justify-content: flex-end;
`
const MainIcon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
`

const Icon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;  
`

const SettingTitle = styled.div`
    margin-left: 20px;
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
        <HeaderMainContainer>
            <HeaderContainer style={{ justifyContent: "flex-start" }}>
                <MainIcon style={{ height: "16px", width: "16px", marginLeft: "5%" }} src={ArrowIcon} />
                <MainIcon style={{ marginLeft: "7%" }} src={SettingsIcon} />
                <SettingTitle style={{ fontFamily: "DM Sans", color: "#232326" }}>
                    Settings
                </SettingTitle>
            </HeaderContainer>
            <HeaderContainer>
                <Icon onClick={() => alert('No Messages')} style={{ marginLeft: "57%", marginRight: "30px" }} src={MessagesIcon} />
                <Icon onClick={() => alert('No Questions')} style={{ marginRight: "30px" }} src={QuestionIcon} />
                <Icon onClick={() => alert('No Favorites')} style={{ marginRight: "30px" }} src={FavoritesIcon} />
                <Icon style={{ marginRight: "10px" }} src={Coins} />
                <CoinsCounter>50000</CoinsCounter>
                <Icon style={{ height: "8px", width: "8px", marginRight: "30px", marginLeft: "30px" }} src={DownIcon} />
                <Popover placement="bottomRight" title={text} content={content} trigger="click">
                    <Icon style={{ height: "40px", width: "40px", marginRight: "59px" }} src={ProfilePic} />
                </Popover>

            </HeaderContainer>
        </HeaderMainContainer>
    )
}

export default Header
