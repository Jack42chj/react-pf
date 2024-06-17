import styled from "styled-components";
import { Link } from "react-scroll";
import Store from "../stores/store";

const Wrapper = styled.div`
    width: 100%;
    height: 144px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 10px;
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

const pages = [
    { id: "about", name: "ABOUT", page: 1 },
    { id: "skill", name: "SKILLS", page: 2 },
    { id: "home", name: "LOGO", page: 0 },
    { id: "project", name: "PROJECTS", page: 3 },
    { id: "contact", name: "CONTACTS", page: 4 },
];

const Header = () => {
    const { setCurrentPage } = Store();
    return (
        <Wrapper>
            {pages.map((item) => (
                <Link
                    to={item.id}
                    spy={true}
                    smooth={true}
                    onClick={() => setCurrentPage(item.page)}
                    key={item.page}
                >
                    {item.name === "LOGO" ? (
                        <img
                            src="/webp/logo/name.webp"
                            alt="name-logo"
                            width="202px"
                            height="128px"
                            style={{ cursor: "pointer" }}
                        />
                    ) : (
                        <NavItem>{item.name}</NavItem>
                    )}
                </Link>
            ))}
        </Wrapper>
    );
};

export default Header;
