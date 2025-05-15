import React from "react";

import { Link } from "react-scroll";

import * as S from "./MoveTopButton.styled";
import { usePaginationStore } from "../../../stores/pagination";

const MoveTopButton = () => {
  const { setCurrentPage } = usePaginationStore();

  return (
    <Link to="home" spy={true} smooth={true} onClick={() => setCurrentPage(0)}>
      <S.Wrapper>
        <img src="/svg/icons/up.svg" alt="up-icon" width="24px" height="24px" />
        TOP
      </S.Wrapper>
    </Link>
  );
};

export default MoveTopButton;
