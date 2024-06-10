import styled from "styled-components";

const BtnWrapper = styled.div`
    cursor: pointer;
    width: 160px;
    height: 50px;
    background-color: transparent;
    border: 1px solid #ffffff;
    color: #ffffff;
    font-size: 12px;
    letter-spacing: 8px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 8px;
    overflow: hidden;
    position: relative;
    z-index: 0;
    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: #e4b783;
        transform: translateX(-100%);
        transition: transform 1s ease;
        z-index: -1;
    }
    &:hover {
        color: #0f193b;
        border-color: #e4b783;
        &:before {
            transform: translateX(0);
        }
    }
`;

const BtnLine = styled.div`
    position: absolute;
    width: 3px;
    height: 42px;
    background-color: #e4b783;
    left: 2%;
`;

const sendMail = () => {
    window.location.href = "mailto:hojinch99@gmail.com";
};

const ContactBtn = () => {
    return (
        <BtnWrapper onClick={sendMail}>
            <BtnLine />
            CONTACT
        </BtnWrapper>
    );
};

export default ContactBtn;
