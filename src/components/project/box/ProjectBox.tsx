import React from "react";

import * as S from "./ProjectBox.styled";
import Store from "../../../stores/store";

interface ProjectBoxProps {
  name: string;
  num: number;
}

const ProjectBox = ({ name, num }: ProjectBoxProps) => {
  const { setOpenModal } = Store();

  return (
    <S.Wrapper onClick={() => setOpenModal(name)}>
      <S.Triangle>
        <img
          alt="triangle-icon"
          src="/svg/icons/triangle.svg"
          width="24px"
          height="24px"
        />
      </S.Triangle>
      <S.Circle />
      <S.Logo $link={name.toLowerCase()} />
      <S.Picture $link={name.toLowerCase()} />
      <S.Item className="project">{name}</S.Item>
      <S.Item className="num">0{num}</S.Item>
      <S.Line />
    </S.Wrapper>
  );
};

export default ProjectBox;
