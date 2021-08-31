import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
import styled from 'styled-components';

const TextDiv = styled.div`
    flex-direction: row;
    display: flex;
    text-align: left;
    font-weight: 700; 
    font-family: "DM Sans";
    font-size: 14px;
    align-items: center;
    cursor: pointer;
    color: #FEA101;
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
                width="1000px"
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

            </Modal>
        </>
    )
}

export default PopupModal
