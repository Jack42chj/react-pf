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
    width: 90%;
    display: flex;
    justify-content: center;
    margin-top: 200px;
    gap: 40px;
`;

const data = [
    { name: "PROFITTY" },
    { name: "FUTBOLISTA" },
    { name: "MOLBWA" },
    { name: "MUSTGO" },
    { name: "BINZIP" },
    { name: "COFFEEZIP" },
];

const Project = () => {
    return (
        <Wrapper>
            <Container>
                {data.map((item, i) => (
                    <ProjectBox name={item.name} num={i + 1} key={item.name} />
                ))}
                <ProjectModal />
            </Container>
        </Wrapper>
    );
};

export default Project;
