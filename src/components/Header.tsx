import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
    0% {
        transform: translateY(100%);
    }
    100% {
        transform: translateY(0%);
    }
`;

const Wrapper = styled.div`
    width: 100%;
    height: 144px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    animation: ${slideUp} 2s forwards;
`;

const NavItem = styled.div`
    cursor: pointer;
    color: #acccee;
    font-weight: bold;
    font-size: 1.2rem;
    &:hover {
        color: #e4b783;
    }
    @media (max-width: 1025px) {
        font-size: 0.9rem;
    }
`;

const Header = () => {
    return (
        <Wrapper>
            <NavItem>ABOUT</NavItem>
            <NavItem>SKILLS</NavItem>
            <NavItem>LOGO</NavItem>
            <NavItem>PROJECTS</NavItem>
            <NavItem>CONTACTS</NavItem>
        </Wrapper>
    );
};

export default Header;
