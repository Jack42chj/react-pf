import React from "react";

import * as S from "./ProjectContent.styled";

interface ProjectContentProps {
  list: {
    role: string;
    date: string;
    desc: string;
    desc_spc: string;
    intro: string;
    skill: string;
    git_link: string;
    v_link: string;
    web_link: string;
    img: string;
    colour: string;
  };
  title: string;
}

const ProjectContent = ({ list, title }: ProjectContentProps) => {
  const onClickLink =
    (url: string) =>
    (e: React.MouseEvent<HTMLDivElement>): void => {
      window.open(url, "_blank");
    };

  return (
    <>
      <S.Image $link={list.img} />
      <S.DescWrapper>
        <S.Title $color={list.colour}>{title}</S.Title>
        <S.Text className="spec">{list.desc}</S.Text>
        <S.Text className="desc">{list.date}</S.Text>
        <S.Text className="desc">{list.role}</S.Text>
        <S.Text className="subtitle">💡 프로젝트 설명</S.Text>
        <S.Text className="desc_spc">{list.intro}</S.Text>
        <S.Text className="subtitle">📜 개발 주요 사항</S.Text>
        <S.Text
          className="desc_spc"
          dangerouslySetInnerHTML={{
            __html: list.desc_spc,
          }}
        ></S.Text>
        <S.Text className="subtitle">⚙️ 기술 스택</S.Text>
        <S.SkillBox>
          {list.skill.split(",").map((item: string) => {
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
          {list.git_link && (
            <S.LinkItem onClick={onClickLink(list.git_link)}>
              <img
                src="/svg/stack/github.svg"
                alt="github-logo"
                width="36px"
                height="36px"
              />
              Github
            </S.LinkItem>
          )}
          {list.v_link && (
            <S.LinkItem onClick={onClickLink(list.v_link)}>
              <img
                src="/svg/stack/velog.svg"
                alt="velog-logo"
                width="18px"
                height="18px"
              />
              Velog
            </S.LinkItem>
          )}
          {list.web_link && (
            <S.LinkItem onClick={onClickLink(list.web_link)}>
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
