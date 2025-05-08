import React from "react";

import * as S from "./ProjectContent.skeleton.styled";

const ProjectContentSkeleton = () => {
  return (
    <>
      <S.Image />
      <S.DescWrapper>
        <S.Text className="title" />
        <S.Text />
        <S.Text />
        <S.Text />
        <S.Text />
        <S.Text className="skill" />
        <S.SkillBox>
          <S.Item />
          <S.Item />
          <S.Item />
        </S.SkillBox>
      </S.DescWrapper>
    </>
  );
};

export default ProjectContentSkeleton;
