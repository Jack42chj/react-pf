import { Link } from "react-scroll";
import styled, { keyframes } from "styled-components";
import Store from "../stores/store";

const bounce = keyframes`
 0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const Wrapper = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 48px;
    height: 48px;
    border-radius: 8px;
    font-size: 12px;
    font-weight: bold;
    color: #e4b783;
    bottom: 5%;
    right: 5%;
    z-index: 999;
    border: 2px solid #a6b6c9;
    background-color: #0f193b;
    @media (max-width: 1025px) {
        bottom: 8%;
        right: 10%;
    }
    &:hover {
        background-color: #0f1e56;
        animation: ${bounce} 1.5s infinite;
    }
`;

const TopButton = () => {
    const { setCurrentPage } = Store();
    return (
        <Link
            to="home"
            spy={true}
            smooth={true}
            onClick={() => setCurrentPage(0)}
        >
            <Wrapper>
                <img
                    src="/svg/icons/up.svg"
                    alt="up-icon"
                    width="24px"
                    height="24px"
                />
                TOP
            </Wrapper>
        </Link>
    );
};

export default TopButton;
