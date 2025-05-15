import React from "react";

import * as S from "./ProjectBox.styled";
import useModal from "../../../hooks/useModal";
import type { GetProjectsModel } from "../../../types/project";
import ProjectModal from "../../modal/project/ProjectModal";

interface ProjectBoxProps {
  data: GetProjectsModel["data"][number];
  index: number;
}

const ProjectBox = ({ data, index }: ProjectBoxProps) => {
  const { modalRef, handleModalOpen } = useModal();

  return (
    <S.Wrapper
      onClick={handleModalOpen(
        <ProjectModal ref={modalRef} projectId={data.projectId} />,
      )}
    >
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
