import styled from "styled-components";
import ModalControl from "../stores/ModalControl";
import { useStore } from "zustand";

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    position: absolute;
    width: 60%;
    height: 90vh;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
`;

const CancleIcon = styled.div`
    cursor: pointer;
    position: absolute;
    top: 1%;
    left: 0.5%;
    z-index: 999;
    background-color: #ffffff;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px;
    &:hover {
        background-color: rgba(0, 0, 0, 0.4);
    }
`;

const Image = styled.div`
    width: 60%;
    height: 100%;
    background-color: #d9d9d9;
    border-radius: 10px 0px 0px 10px;
`;

const DescWrapper = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`;

const Text = styled.div`
    color: #000;
    font-size: 20px;
    font-weight: bold;
`;

const ProjectModal = () => {
    const { setCloseModal, title, isOpen } = useStore(ModalControl);
    const onClickClose = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isOpen && e.target === e.currentTarget) {
            setCloseModal();
        }
    };
    return (
        <Wrapper
            style={{ display: isOpen ? "flex" : "none" }}
            onClick={onClickClose}
        >
            <Container>
                <Image></Image>
                <DescWrapper>
                    <Text>{title}</Text>
                    <Text>{title}</Text>
                </DescWrapper>
                <CancleIcon onClick={setCloseModal}>
                    <img
                        src={"/svg/icons/cancle.svg"}
                        alt="x-icon"
                        width="20px"
                        height="20px"
                    />
                </CancleIcon>
            </Container>
        </Wrapper>
    );
};

export default ProjectModal;
