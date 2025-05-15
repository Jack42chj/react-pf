import React from "react";

import * as S from "./ProjectModal.styled";
import useModal from "../../../hooks/useModal";
import { useGetProjectDetail } from "../../../services/project";

interface ProjectModalProps {
  projectId: string;
}

const ProjectModal = React.forwardRef<HTMLDialogElement, ProjectModalProps>(
  ({ projectId }, ref) => {
    const { data } = useGetProjectDetail(projectId);

    const { handleModalClose } = useModal();

    const onClickLink = (url: string) => (): void => {
      window.open(url, "", "noopener, noreferrer");
    };

    return (
      <S.Modal
        ref={ref}
        aria-haspopup="true"
        aria-labelledby="modal"
        aria-modal="true"
        tabIndex={0}
      >
        {data ? (
          <>
            <S.Image $link={data!.image} />
            <S.DescWrapper>
              <S.Title $color={data!.color}>{data!.title}</S.Title>
              <S.Text className="spec">{data!.description}</S.Text>
              <S.Text className="desc">
                {data!.startDate} ~ {data!.endDate}
              </S.Text>
              <S.Text className="desc">{data!.role}</S.Text>
              <S.Text className="subtitle">💡 프로젝트 설명</S.Text>
              <S.Text className="desc_spc">{data!.introduction}</S.Text>
              <S.Text className="subtitle">📜 개발 주요 사항</S.Text>
              <S.Text
                className="desc_spc"
                dangerouslySetInnerHTML={{
                  __html: data!.explanation,
                }}
              ></S.Text>
              <S.Text className="subtitle">⚙️ 기술 스택</S.Text>
              <S.SkillBox>
                {data!.skills.split(",").map((item: string) => {
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
                {data!.github && (
                  <S.LinkItem onClick={onClickLink(data!.github)}>
                    <img
                      src="/svg/stack/github.svg"
                      alt="github-logo"
                      width="36px"
                      height="36px"
                    />
                    Github
                  </S.LinkItem>
                )}
                {data!.velog && (
                  <S.LinkItem onClick={onClickLink(data!.velog)}>
                    <img
                      src="/svg/stack/velog.svg"
                      alt="velog-logo"
                      width="18px"
                      height="18px"
                    />
                    Velog
                  </S.LinkItem>
                )}
                {data!.url && (
                  <S.LinkItem onClick={onClickLink(data!.url)}>
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
            <S.CloseButton type="button" onClick={handleModalClose}>
              <img
                src={"/svg/icons/cancle.svg"}
                alt="x-icon"
                width="20px"
                height="20px"
              />
            </S.CloseButton>
          </>
        ) : (
          1
        )}
      </S.Modal>
    );
  },
);

ProjectModal.displayName = "ProjectModal";
export default ProjectModal;
