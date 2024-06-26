import styled from "styled-components";
import ProjectModal from "../components/ProjectModal";
import SwiperSlider from "../components/Swiper";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: 100vh;
    background-color: #00071e;
    padding: 0px 20px;
    overflow: hidden;
`;

const Container = styled.div`
    width: 80%;
    top: 20%;
    display: flex;
    position: relative;
    gap: 40px;
    max-height: 100%;
    @media (max-width: 1025px) {
        width: 90%;
    }
`;

const Project = () => {
    return (
        <Wrapper id="project">
            <Container>
                <SwiperSlider />
            </Container>
            <ProjectModal />
        </Wrapper>
    );
};

export default Project;
