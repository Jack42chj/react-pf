import React from "react";

import * as S from "./Project.styled";
import ProjectModal from "../../components/modal/ProjectModal";
import SwiperSlider from "../../components/swiper/Swiper";

const Project = () => {
  return (
    <S.Wrapper id="project">
      <S.Container>
        <SwiperSlider />
      </S.Container>
      <ProjectModal />
    </S.Wrapper>
  );
};

export default Project;
