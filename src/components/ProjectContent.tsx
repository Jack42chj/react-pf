import React from "react";

import styled from "@emotion/styled";

interface ListProps {
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
}

const Image = styled.div<{ $link: string }>`
  width: 55%;
  height: 100%;
  border-radius: 10px 0px 0px 10px;
  background-image: url(${(props) => props.$link});
  background-size: cover;
  background-position: center;

  @media (max-width: 1025px) {
    width: 100%;
    height: 45%;
    border-radius: 10px 10px 0px 0px;
  }
`;

const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 45%;
  height: 100%;
  padding: 20px;
  overflow-y: auto;

  @media (max-width: 1025px) {
    gap: 12px;
    width: 100%;
    height: 55%;
  }
`;

const Title = styled.div<{ $color: string }>`
  font-size: 36px;
  font-weight: bold;
  letter-spacing: 8px;
  color: ${(props) => props.$color};

  @media (max-width: 1025px) {
    font-size: 24px;
  }
`;

const Text = styled.div`
  &.subtitle {
    font-size: 24px;
    font-weight: bold;

    @media (max-width: 1025px) {
      font-size: 18px;
    }
  }

  &.spec {
    font-size: 16px;
    font-weight: bold;
  }

  &.desc {
    font-size: 14px;
  }

  &.desc_spc {
    font-size: 16px;
    line-height: 32px;

    @media (max-width: 1025px) {
      line-height: 24px;
    }
  }
`;

const SkillBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
`;

const SkillItem = styled.div`
  .img {
    border-radius: 10px;
  }
`;

const LinkItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
  background-color: #d9d9d9;
  cursor: pointer;
  img {
    width: auto;
    height: 20px;
  }
  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectContent: React.FC<{ list: ListProps; title: string }> = ({
  list,
  title,
}) => {
  const onClickLink = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <>
      <Image $link={list.img} />
      <DescWrapper>
        <Title $color={list.colour}>{title}</Title>
        <Text className="spec">{list.desc}</Text>
        <Text className="desc">{list.date}</Text>
        <Text className="desc">{list.role}</Text>
        <Text className="subtitle">💡 프로젝트 설명</Text>
        <Text className="desc_spc">{list.intro}</Text>
        <Text className="subtitle">📜 개발 주요 사항</Text>
        <Text
          className="desc_spc"
          dangerouslySetInnerHTML={{
            __html: list.desc_spc,
          }}
        ></Text>
        <Text className="subtitle">⚙️ 기술 스택</Text>
        <SkillBox>
          {list.skill.split(",").map((item: string) => {
            const Skill = item.trim();
            let logo = Skill.split("-")[0];
            if (logo === "zustand") logo = "furrynetwork";
            if (logo === "kakaomapapi") logo = "kakao";
            return (
              <SkillItem key={item}>
                <img
                  style={{ borderRadius: "20px" }}
                  alt={Skill}
                  src={`https://img.shields.io/badge/${Skill}?style=for-the-badge&logo=${logo}&logoColor=white`}
                />
              </SkillItem>
            );
          })}
        </SkillBox>
        <Text className="subtitle">🔗 Link</Text>
        <SkillBox>
          {list.git_link && (
            <LinkItem onClick={() => onClickLink(list.git_link)}>
              <img
                src="/svg/stack/github.svg"
                alt="github-logo"
                width="36px"
                height="36px"
              />
              Github
            </LinkItem>
          )}
          {list.v_link && (
            <LinkItem onClick={() => onClickLink(list.v_link)}>
              <img
                src="/svg/stack/velog.svg"
                alt="velog-logo"
                width="18px"
                height="18px"
              />
              Velog
            </LinkItem>
          )}
          {list.web_link && (
            <LinkItem onClick={() => onClickLink(list.web_link)}>
              <img
                src="/svg/stack/vercel.svg"
                alt="vercel-logo"
                width="18px"
                height="18px"
              />
              Demo
            </LinkItem>
          )}
        </SkillBox>
      </DescWrapper>
    </>
  );
};

export default ProjectContent;
