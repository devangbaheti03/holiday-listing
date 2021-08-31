import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
import styled from 'styled-components';
import { Input, DatePicker, Select } from 'antd';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};


const { Option } = Select;



const TextDiv = styled.div`
    flex-direction: row;
    display: inline;
    text-align: left;
    font-weight: 400; 
    font-family: "DM Sans";
    font-size: 14px;
    align-items: center;
    cursor: pointer;
    color: #FEA101;
    letter-spacing: 0px;
`

const ModalContainer = styled.div`
    display: flex;
    flex-direction: row;
    height:100%;
    width:100%;
    justify-content: space-between;
`

const ModalSubContainer = styled.div`
    display: flex;
    flex-direction: column;
    height:100%;
    width:50%;
    margin-left: 3%;
`

const TextCategoryDiv = styled.div`
    display: flex;
    flex-direction: row;
    text-align:left;
    font-family: "DM Sans";
    font-size: 14px;
    align-items: center;
    letter-spacing: 0px;

`

const PopupModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <>
            <TextDiv onClick={showModal}>
                + Add New
            </TextDiv>
            <Modal
                bodyStyle={{ height: "400px" }}
                width="50%"
                title="Add New Holiday"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button
                        style={{ backgroundColor: "#40D2AC" }}
                        key="submit"
                        type="primary"
                        onClick={handleOk}>
                        Save
                    </Button>
                ]}
            >

                <ModalContainer style={{ borderRadius: "20px" }}>
                    <ModalSubContainer style={{ borderRight: "1px solid rgba(0,0,0,0.2)" }}>
                        <TextCategoryDiv style={{ marginLeft: "3%", marginTop: "15%", color: "#232326" }}>Name</TextCategoryDiv>
                        <Input style={{ width: "80%", borderBottom: "1px solid rgba(0,0,0,0.1)", color: "#232326" }} placeholder="Holiday Name" bordered={false} />
                        <TextCategoryDiv style={{ marginLeft: "3%", marginTop: "7%", color: "#232326" }}>Date</TextCategoryDiv>
                        <DatePicker style={{ width: "80%", borderBottom: "1px solid rgba(0,0,0,0.1)", color: "#232326" }} bordered={false} />
                        <TextCategoryDiv style={{ marginLeft: "3%", marginTop: "7%", color: "#232326" }}>Type</TextCategoryDiv>
                        <Select
                            bordered={false}
                            style={{ width: "80%" }}
                            placeholder="Select type">
                            <Option value="Optional">Optional</Option>
                            <Option value="Compulsory">Compulsory</Option>
                            <Option value="Maternity">Maternity</Option>
                            <Option value="BankMandated">Bank Mandated</Option>
                        </Select>
                    </ModalSubContainer>
                    <ModalSubContainer >
                        <TextDiv style={{ marginLeft: "3%", marginTop: "15%", color: "#90919B" }}>Download Sample in <TextDiv backgroundColor="#fff5e4" color="#fff5e4" fontSize="14px" font="DM Sans">.csv format</TextDiv> file to ensure that you have the correct file ready to import</TextDiv>
                        <br></br>
                        <br></br>
                        <Dragger style={{ borderRadius: "10px", border: "2px dashed #BBBBBF", background: "#F5F5F5" }} {...props}>
                            <p style={{ color: "#BBBBBF", fontSize: "40px" }}>
                                <InboxOutlined />
                            </p>
                            <p style={{ color: "#BBBBBF", fontSize: "14px" }} >Drag and drop CSV file</p>
                            <p style={{ color: "#BBBBBF", fontSize: "14px" }}> or Click here to upload</p>
                        </Dragger>
                    </ModalSubContainer>
                </ModalContainer>

            </Modal>
        </>
    )
}

export default PopupModal
