import React from "react";

import * as S from "./Home.styled";
import Header from "../../components/header/Header";
import { usePaginationStore } from "../../stores/pagination";

const Home = () => {
  const { setCurrentPage } = usePaginationStore();

  return (
    <S.Wrapper id="home">
      <Header />
      <S.TextWrapper>
        <S.Text className="job">FRONTEND DEVELOPER</S.Text>
        <S.Text className="name">CHOI HOJIN</S.Text>
        <S.Text className="desc">P O R T F O L I O</S.Text>
      </S.TextWrapper>
      <S.DownIcon>
        <S.CustomLink
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
        </S.CustomLink>
      </S.DownIcon>
    </S.Wrapper>
  );
};

export default Home;
