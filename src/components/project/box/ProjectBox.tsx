import React from "react";

import * as S from "./ProjectBox.styled";
import Store from "../../../stores/store";
import type { GetProjectsModel } from "../../../types/project";

interface ProjectBoxProps {
  data: GetProjectsModel["data"][number];
  index: number;
}

const ProjectBox = ({ data, index }: ProjectBoxProps) => {
  const { setOpenModal } = Store();

  const handleModalOpen = (e: React.MouseEvent<HTMLDivElement>): void => {
    setOpenModal(data.projectId);
  };

  return (
    <S.Wrapper onClick={handleModalOpen}>
      <S.Triangle>
        <img
          alt="triangle-icon"
          src="/svg/icons/triangle.svg"
          width="24px"
          height="24px"
        />
      </S.Triangle>
      <S.Circle />
      <S.Logo $link={data.title.toLowerCase()} />
      <S.Picture $link={data.title.toLowerCase()} />
      <S.Item className="project">{data.title}</S.Item>
      <S.Item className="num">0{index}</S.Item>
      <S.Line />
    </S.Wrapper>
  );
};

export default ProjectBox;
