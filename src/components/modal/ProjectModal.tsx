import React, { useEffect } from "react";

import { useQuery } from "@tanstack/react-query";

import * as S from "./ProjectModal.styled";
import { getProjectData } from "../../apis/project-api";
import Store from "../../stores/store";
import ProjectContent from "../project/content/ProjectContent";
import ProjectContentSkeleton from "../project/skeleton/ProjectContent.skeleton";

const ProjectModal = () => {
  const { setCloseModal, title, isOpen } = Store();
  const { data: list, isLoading } = useQuery({
    queryKey: ["project_data", title],
    queryFn: async () => getProjectData(title),
  });

  useEffect(() => {
    const handleWheel = (e: WheelEvent): void => {
      if (isOpen) {
        e.stopPropagation();
      }
    };

    const disableBodyScroll = (): void => {
      document.body.style.overflow = "hidden";
    };

    const enableBodyScroll = (): void => {
      document.body.style.overflow = "";
    };

    if (isOpen) {
      disableBodyScroll();
    } else {
      enableBodyScroll();
    }

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isOpen]);

  const onClickClose = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (isOpen && e.target === e.currentTarget) {
      setCloseModal();
    }
  };

  return (
    <S.Wrapper
      style={{ display: isOpen ? "flex" : "none" }}
      onClick={onClickClose}
    >
      <S.Container>
        {isLoading ? (
          <ProjectContentSkeleton />
        ) : (
          list && <ProjectContent list={list} title={title} />
        )}
        <S.CancleIcon onClick={setCloseModal}>
          <img
            src={"/svg/icons/cancle.svg"}
            alt="x-icon"
            width="20px"
            height="20px"
          />
        </S.CancleIcon>
      </S.Container>
    </S.Wrapper>
  );
};

export default ProjectModal;
