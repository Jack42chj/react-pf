import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #00071e;
`;

const Container = styled.div`
    width: 80%;
    height: 80vh;
    padding: 20px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    background-color: #060c26;
    border: 2px solid rgb(28, 36, 67);
    @media (max-width: 1025px) {
        flex-direction: column;
    }
`;

const MyPic = styled.div`
    position: relative;
    background-image: url("/me.webp");
    background-size: cover;
    background-position: center;
    max-width: 615px;
    width: 55%;
    height: 100%;
    @media (max-width: 1025px) {
        height: 50%;
        width: 100%;
    }
    &:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border: 10px solid rgba(0, 0, 0, 0.3);
        pointer-events: none;
        box-sizing: border-box;
    }
`;

const DescWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffffff;
`;

const About = () => {
    return (
        <Wrapper>
            <Container>
                <MyPic />
                <DescWrapper>
                    <div>About</div>
                </DescWrapper>
            </Container>
        </Wrapper>
    );
};

export default About;
