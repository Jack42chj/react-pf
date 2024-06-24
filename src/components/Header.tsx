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
    @media (max-width: 1025px) {
        margin-top: 0px;
    }
    @media (max-width: 481px) {
        display: none;
    }
`;

const ItemImg = styled.div`
    cursor: pointer;
    @media (max-width: 1025px) {
        img {
            width: auto;
            height: 96px;
        }
    }
    @media (max-width: 691px) {
        img {
            width: auto;
            height: 72px;
        }
    }
`;

const NavItem = styled.div`
    cursor: pointer;
    color: #acccee;
    font-weight: bold;
    text-align: center;
    font-size: 1.2rem;
    min-width: 128px;
    &:hover {
        color: #e4b783;
    }
    @media (max-width: 1025px) {
        font-size: 0.9rem;
    }
    @media (max-width: 691px) {
        min-width: 64px;
        font-size: 0.7rem;
    }
`;

const pages = [
    { id: "about", name: "ABOUT", page: 1 },
    { id: "skill", name: "SKILLS", page: 2 },
    { id: "home", name: "LOGO", page: 0 },
    { id: "project", name: "PROJECTS", page: 3 },
    { id: "blog", name: "BLOG", page: 4 },
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
                        <ItemImg>
                            <img
                                src="/webp/logo/name.webp"
                                alt="name-logo"
                                width="135px"
                                height="128px"
                            />
                        </ItemImg>
                    ) : (
                        <NavItem>{item.name}</NavItem>
                    )}
                </Link>
            ))}
        </Wrapper>
    );
};

export default Header;
