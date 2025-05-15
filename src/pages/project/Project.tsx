import React from "react";

import * as S from "./Project.styled";
import SwiperSlider from "../../components/swiper/Swiper";

const Project = () => {
  return (
    <S.Wrapper id="project">
      <S.Container>
        <SwiperSlider />
      </S.Container>
    </S.Wrapper>
  );
};

export default Project;
