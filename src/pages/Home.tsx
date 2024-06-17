import styled, { keyframes } from "styled-components";
import Header from "../components/Header";
import { Link } from "react-scroll";
import Store from "../stores/store";

const bounce = keyframes`
  0%, 100% {
    transform: translate(-50%, 0);
  }
  50% {
    transform: translate(-50%, -10px);
  }
`;

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
        margin-right: -16px;
    }
    &.name {
        color: #ffffff;
        font-size: 120px;
        font-family: "Times New Roman", Times, serif;
        letter-spacing: 8px;
        margin-right: -8px;
        @media (max-width: 1025px) {
            font-size: 84px;
        }
        @media (max-width: 769px) {
            font-size: 52px;
        }
    }
    &.desc {
        color: #e4b783;
        font-size: 24px;
        word-spacing: 8px;
        font-weight: bold;
        @media (max-width: 1025px) {
            font-size: 16px;
        }
    }
`;

const DownIcon = styled.div`
    cursor: pointer;
    position: absolute;
    left: 50%;
    bottom: 3%;
    transform: translateX(-50%);
    animation: ${bounce} 2s infinite;
`;

const CustomLink = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    word-spacing: 10px;
    color: #fff;
    font-size: 18px;
    @media (max-width: 1025px) {
        font-size: 16px;
        gap: 16px;
        img {
            width: 24px;
            height: auto;
        }
    }
`;

const Home = () => {
    const { setCurrentPage } = Store();
    return (
        <Wrapper id="home">
            <Header />
            <TextWrapper>
                <Text className="job">FRONTEND DEVELOPER</Text>
                <Text className="name">CHOI HOJIN</Text>
                <Text className="desc">P O R T F O L I O</Text>
            </TextWrapper>
            <DownIcon>
                <CustomLink
                    to="about"
                    spy={true}
                    smooth={true}
                    onClick={() => setCurrentPage(1)}
                >
                    S T A R T
                    <img
                        src="/webp/down.webp"
                        alt="down-icon"
                        width="32px"
                        height="36.5px"
                    />
                </CustomLink>
            </DownIcon>
        </Wrapper>
    );
};

export default Home;
