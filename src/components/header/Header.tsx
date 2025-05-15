import React from "react";

import { Link } from "react-scroll";

import * as S from "./Header.styled";
import { usePaginationStore } from "../../stores/pagination";

const Header = () => {
  const { setCurrentPage } = usePaginationStore();

  const pages = [
    { id: "about", name: "ABOUT", page: 1 },
    { id: "skill", name: "SKILLS", page: 2 },
    { id: "home", name: "LOGO", page: 0 },
    { id: "project", name: "PROJECTS", page: 3 },
    { id: "blog", name: "BLOG", page: 4 },
  ];

  return (
    <S.Wrapper>
      {pages.map((item) => (
        <Link
          to={item.id}
          spy={true}
          smooth={true}
          onClick={() => setCurrentPage(item.page)}
          key={item.page}
        >
          {item.name === "LOGO" ? (
            <S.ItemImg>
              <img
                src="/webp/logo/name.webp"
                alt="name-logo"
                width="135px"
                height="128px"
              />
            </S.ItemImg>
          ) : (
            <S.NavItem>{item.name}</S.NavItem>
          )}
        </Link>
      ))}
    </S.Wrapper>
  );
};

export default Header;
