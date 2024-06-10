import styled from "styled-components";
import ModalControl from "../stores/ModalControl";
import { useStore } from "zustand";

const Line = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 4px;
    width: 44px;
    background-color: #66d6df;
`;

const Item = styled.div`
    position: absolute;
    font-size: 1.2rem;
    font-weight: bold;
    left: 50%;
    transform: translateX(-50%);
    &.project {
        bottom: 20%;
        color: #ffffff;
        letter-spacing: 8px;
    }
    &.num {
        bottom: 10%;
        color: #e4b783;
    }
`;

const Logo = styled.div`
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 100px;
    border-radius: 999%;
    background-color: #0f193b;
`;

const Picture = styled.div`
    width: 90%;
    margin-top: 16px;
    background-color: #1c2443;
    height: 0px;
    transition: 1s;
`;

const Wrapper = styled.div`
    cursor: pointer;
    position: relative;
    width: 330px;
    height: 440px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid rgb(28, 36, 67);
    background-color: #060c26;
    &:hover {
        height: 600px;
        background-color: #0f193b;
        border: 2px solid #0f1e56;
        transition: 1s;
    }
    &:hover ${Line} {
        width: 144px;
        transition: 1s;
    }
    &:hover ${Item} {
        &.num {
            color: #66d6df;
            transition: 1s;
        }
    }
    &:hover ${Logo} {
        opacity: 0;
        transition: 1s;
    }
    &:hover ${Picture} {
        height: 400px;
    }
`;

const ProjectBox: React.FC<{ name: string; num: number }> = ({ name, num }) => {
    const { setOpenModal } = useStore(ModalControl);
    return (
        <Wrapper onClick={() => setOpenModal(name)}>
            <Logo />
            <Picture />
            <Item className="project">{name}</Item>
            <Item className="num">0{num}</Item>
            <Line />
        </Wrapper>
    );
};

export default ProjectBox;
