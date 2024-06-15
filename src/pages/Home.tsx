import styled from "styled-components";
import Header from "../components/Header";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background: linear-gradient(#252540, #141426, #00071e, #00071e);
`;

const TextWrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    top: 50%;
    gap: 16px;
`;

const Text = styled.div`
    text-align: center;
    &.job {
        line-height: 18px;
        color: #ffffff;
        font-size: 24px;
        letter-spacing: 16px;
        font-weight: bold;
        @media (max-width: 1025px) {
            font-size: 14px;
        }
    }
    &.name {
        color: #ffffff;
        font-size: 128px;
        @media (max-width: 1025px) {
            font-size: 52px;
        }
    }
    &.desc {
        color: #e4b783;
        font-size: 24px;
        letter-spacing: 12px;
        font-weight: bold;
    }
`;

const Home = () => {
    return (
        <Wrapper>
            {/* <Header /> */}
            <TextWrapper>
                <Text className="job">FRONTEND DEVELOPER</Text>
                <Text className="name">CHOI HOJIN</Text>
                <Text className="desc">PORTFOLIO</Text>
            </TextWrapper>
        </Wrapper>
    );
};

export default Home;
