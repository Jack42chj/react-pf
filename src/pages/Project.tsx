import styled from "styled-components";
import ProjectBox from "../components/ProjectBox";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #00071e;
    overflow-x: auto;
    gap: 40px;
    padding: 0px 20px;
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
            {data.map((item, i) => (
                <ProjectBox name={item.name} num={i + 1} key={item.name} />
            ))}
        </Wrapper>
    );
};

export default Project;
