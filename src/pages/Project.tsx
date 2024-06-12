import styled from "styled-components";
import ProjectBox from "../components/ProjectBox";
import ProjectModal from "../components/ProjectModal";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: 100vh;
    background-color: #00071e;
    padding: 0px 20px;
`;

const Container = styled.div`
    width: 78%;
    display: flex;
    margin-top: 200px;
    gap: 40px;
    overflow: auto;
`;

const data = [
    { name: "COFFEEZIP" },
    { name: "BINZIP" },
    { name: "MUSTGO" },
    { name: "MOLBWA" },
    { name: "FUTBOLISTA" },
    { name: "PROFITTY" },
];

const Project = () => {
    return (
        <Wrapper>
            <Container>
                {data.map((item, i) => (
                    <ProjectBox name={item.name} num={i + 1} key={item.name} />
                ))}
            </Container>
            <ProjectModal />
        </Wrapper>
    );
};

export default Project;
