import React from "react";

import * as S from "./ProjectContent.styled";
import type { GetProjectDetailModel } from "../../../types/project";

interface ProjectContentProps {
  data: GetProjectDetailModel;
}

const ProjectContent = ({ data }: ProjectContentProps) => {
  const onClickLink =
    (url: string) =>
    (e: React.MouseEvent<HTMLDivElement>): void => {
      window.open(url, "_blank");
    };

  return (
    <>
      <S.Image $link={data.image} />
      <S.DescWrapper>
        <S.Title $color={data.color}>{data.title}</S.Title>
        <S.Text className="spec">{data.description}</S.Text>
        <S.Text className="desc">
          {data.startDate} ~ {data.endDate}
        </S.Text>
        <S.Text className="desc">{data.role}</S.Text>
        <S.Text className="subtitle">💡 프로젝트 설명</S.Text>
        <S.Text className="desc_spc">{data.introduction}</S.Text>
        <S.Text className="subtitle">📜 개발 주요 사항</S.Text>
        <S.Text
          className="desc_spc"
          dangerouslySetInnerHTML={{
            __html: data.explanation,
          }}
        ></S.Text>
        <S.Text className="subtitle">⚙️ 기술 스택</S.Text>
        <S.SkillBox>
          {data.skills.split(",").map((item: string) => {
            const Skill = item.trim();
            let logo = Skill.split("-")[0];
            if (logo === "zustand") logo = "furrynetwork";
            if (logo === "kakaomapapi") logo = "kakao";
            return (
              <S.SkillItem key={item}>
                <img
                  style={{ borderRadius: "20px" }}
                  alt={Skill}
                  src={`https://img.shields.io/badge/${Skill}?style=for-the-badge&logo=${logo}&logoColor=white`}
                />
              </S.SkillItem>
            );
          })}
        </S.SkillBox>
        <S.Text className="subtitle">🔗 Link</S.Text>
        <S.SkillBox>
          {data.github && (
            <S.LinkItem onClick={onClickLink(data.github)}>
              <img
                src="/svg/stack/github.svg"
                alt="github-logo"
                width="36px"
                height="36px"
              />
              Github
            </S.LinkItem>
          )}
          {data.velog && (
            <S.LinkItem onClick={onClickLink(data.velog)}>
              <img
                src="/svg/stack/velog.svg"
                alt="velog-logo"
                width="18px"
                height="18px"
              />
              Velog
            </S.LinkItem>
          )}
          {data.url && (
            <S.LinkItem onClick={onClickLink(data.url)}>
              <img
                src="/svg/stack/vercel.svg"
                alt="vercel-logo"
                width="18px"
                height="18px"
              />
              Demo
            </S.LinkItem>
          )}
        </S.SkillBox>
      </S.DescWrapper>
    </>
  );
};

export default ProjectContent;
