import React from 'react'
import styled from 'styled-components'
import '../styles/index.css'
import { Select } from 'antd';
import 'antd/dist/antd.css';
import YearIcon from '../assets/Group 856.png'
import PopupModal from './PopupModal';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

const { Option } = Select;

const ScreenContainer = styled.div`
    display: flex;
    height:82vh;
    width:92vw;
    flex-direction: row;
    background-color: #FFFFFF;
    margin-right: 3vw;
    margin-bottom: 3vh;
    border-radius: 10px;
    box-shadow: -1px 4px 20px -6px rgba(0,0,0,0.2);
    scroll-behavior: smooth;
`

const ScreenNav = styled.div`
    display: flex;
    height: 100%;
    width: 16%;
    flex-direction: column;
    border-right: solid 0.5px rgba(0,0,0,0.1);
`

const NavOption = styled.div`
    display: flex; 
    margin-top:10px;   
    margin-left: 13%;
    margin-right: 10%;
    max-width: 70%;
    max-height: 25px;
    align-items: center;
    border-radius:6px;
    padding: 15px;
    text-align: left;
    font-weight: 500;
    font-size: 100%;
    letter-spacing: 0px;
    color: #232326;
    cursor: pointer;
    background-color: ${props => props.selected ? "#E1E6FF" : "transparent"};
    color: ${props => props.selected ? "#405CD2" : "#232326"};
    &:hover{
        background-color: #E1E6FF;
        color: #405CD2;
    }
`

const HolidayPanel = styled.div`
    display: flex;
    flex-direction: column;
    width: 87%;
    height: 84%;
    background-color: transparent;
    padding: 40px;
`

const RowDiv = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;   
`

const YearDiv = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;   
`

const OptionsDiv = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    align-content: center;   
`

const Icon = styled.img`
    margin-right: 20px;
    width: 20px;
    height: 20px;
    cursor: pointer;  
`

const TextDiv = styled.div`
    flex-direction: row;
    display: flex;
    text-align: left;
    font-weight: 700; 
    font-family: "DM Sans";
    font-size: 14px;
    align-items: center;
    cursor: pointer;
`

const ListDiv = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    height: 50px;   
`
const Screen = () => {
    return (
        <ScreenContainer>
            <ScreenNav>
                <NavOption style={{ fontFamily: "DM Sans", marginTop: "80px" }}>General</NavOption>
                <NavOption selected style={{ fontFamily: "DM Sans" }}>Holiday</NavOption>
                <NavOption style={{ fontFamily: "DM Sans" }}>Leave</NavOption>
            </ScreenNav>
            <HolidayPanel>
                <RowDiv>
                    <h1 style={{ fontWeight: "700", fontFamily: "DM Sans" }}>Holiday</h1>
                    <YearDiv>
                        <Icon src={YearIcon} />
                        <Select
                            showSearch
                            style={{ width: 100 }}
                            placeholder="Year">
                            <Option value="2021">2021</Option>
                            <Option value="2022">2022</Option>
                            <Option value="2023">2023</Option>
                            <Option value="2024">2024</Option>
                            <Option value="2025">2025</Option>
                            <Option value="2026">2026</Option>
                            <Option value="2027">2027</Option>
                            <Option value="2028">2028</Option>
                        </Select>
                    </YearDiv>
                </RowDiv>
                <RowDiv>
                    <h5 style={{ width: "50%", color: "#90919B", letterSpacing: "0px" }}>
                        Assign the holidays that you want to give to your employee for the year
                    </h5>
                </RowDiv>
                <RowDiv style={{ marginTop: "24px" }}>
                    <TextDiv style={{ color: "#232326", fontSize: "18px" }}>List</TextDiv>
                    <OptionsDiv>
                        <PopupModal />
                        <TextDiv style={{ color: "#90919B", marginLeft: "20px" }}>
                            Filter
                        </TextDiv>
                        <Select
                            style={{ marginLeft: "20px", width: 100 }}
                            placeholder="Select">
                            <Option value="All">All</Option>
                            <Option value="Ratha Yatra">Ratha Yatra</Option>
                            <Option value="Diwali">Diwali</Option>
                        </Select>
                    </OptionsDiv>
                </RowDiv>
                <ListDiv>
                    <TextDiv style={{ color: "#BBBBBF", fontSize: "14px" }}>Name</TextDiv>
                    <TextDiv style={{ marginLeft: "15%", color: "#BBBBBF", fontSize: "14px" }}>Type</TextDiv>
                    <TextDiv style={{ marginLeft: "50%", color: "#BBBBBF", fontSize: "14px" }}>Date</TextDiv>
                </ListDiv>
                <ListDiv style={{ borderTop: "1px solid #DFDFDF" }}>
                    <TextDiv style={{ color: "#151B30", fontSize: "14px" }}>Rath Yatra</TextDiv>
                    <TextDiv style={{ marginLeft: "12%", color: "#585A64", fontSize: "14px" }}>Optional</TextDiv>
                    <TextDiv style={{ marginLeft: "48%", color: "#151B30", fontSize: "14px" }}>12 July, 2021</TextDiv>
                    <EditOutlined style={{ marginLeft: "10%", color: "#ADAFB7", width: "20px", height: "20px" }} />
                    <DeleteOutlined style={{ marginLeft: "5%", color: "#ADAFB7", width: "20px", height: "20px" }} />
                </ListDiv>
                <ListDiv style={{ borderTop: "1px solid #DFDFDF" }}>
                    <TextDiv style={{ color: "#151B30", fontSize: "14px" }}>Rath Yatra</TextDiv>
                    <TextDiv style={{ marginLeft: "12%", color: "#585A64", fontSize: "14px" }}>Optional</TextDiv>
                    <TextDiv style={{ marginLeft: "48%", color: "#151B30", fontSize: "14px" }}>12 July, 2021</TextDiv>
                    <EditOutlined style={{ marginLeft: "10%", color: "#ADAFB7", width: "20px", height: "20px" }} />
                    <DeleteOutlined style={{ marginLeft: "5%", color: "#ADAFB7", width: "20px", height: "20px" }} />
                </ListDiv>
                <ListDiv style={{ borderTop: "1px solid #DFDFDF" }}>
                    <TextDiv style={{ color: "#151B30", fontSize: "14px" }}>Rath Yatra</TextDiv>
                    <TextDiv style={{ marginLeft: "12%", color: "#585A64", fontSize: "14px" }}>Optional</TextDiv>
                    <TextDiv style={{ marginLeft: "48%", color: "#151B30", fontSize: "14px" }}>12 July, 2021</TextDiv>
                    <EditOutlined style={{ marginLeft: "10%", color: "#ADAFB7", width: "20px", height: "20px" }} />
                    <DeleteOutlined style={{ marginLeft: "5%", color: "#ADAFB7", width: "20px", height: "20px" }} />
                </ListDiv>                <ListDiv style={{ borderTop: "1px solid #DFDFDF" }}>
                    <TextDiv style={{ color: "#151B30", fontSize: "14px" }}>Rath Yatra</TextDiv>
                    <TextDiv style={{ marginLeft: "12%", color: "#585A64", fontSize: "14px" }}>Optional</TextDiv>
                    <TextDiv style={{ marginLeft: "48%", color: "#151B30", fontSize: "14px" }}>12 July, 2021</TextDiv>
                    <EditOutlined style={{ marginLeft: "10%", color: "#ADAFB7", width: "20px", height: "20px" }} />
                    <DeleteOutlined style={{ marginLeft: "5%", color: "#ADAFB7", width: "20px", height: "20px" }} />
                </ListDiv>
                <ListDiv style={{ borderTop: "1px solid #DFDFDF" }}>
                    <TextDiv style={{ color: "#151B30", fontSize: "14px" }}>Rath Yatra</TextDiv>
                    <TextDiv style={{ marginLeft: "12%", color: "#585A64", fontSize: "14px" }}>Optional</TextDiv>
                    <TextDiv style={{ marginLeft: "48%", color: "#151B30", fontSize: "14px" }}>12 July, 2021</TextDiv>
                    <EditOutlined style={{ marginLeft: "10%", color: "#ADAFB7", width: "20px", height: "20px" }} />
                    <DeleteOutlined style={{ marginLeft: "5%", color: "#ADAFB7", width: "20px", height: "20px" }} />
                </ListDiv>
                <ListDiv style={{ borderTop: "1px solid #DFDFDF" }}>
                    <TextDiv style={{ color: "#151B30", fontSize: "14px" }}>Rath Yatra</TextDiv>
                    <TextDiv style={{ marginLeft: "12%", color: "#585A64", fontSize: "14px" }}>Optional</TextDiv>
                    <TextDiv style={{ marginLeft: "48%", color: "#151B30", fontSize: "14px" }}>12 July, 2021</TextDiv>
                    <EditOutlined style={{ marginLeft: "10%", color: "#ADAFB7", width: "20px", height: "20px" }} />
                    <DeleteOutlined style={{ marginLeft: "5%", color: "#ADAFB7", width: "20px", height: "20px" }} />
                </ListDiv>

            </HolidayPanel>
        </ScreenContainer>
    )
}

export default Screen
