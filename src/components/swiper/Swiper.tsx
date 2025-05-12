import React from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { motion } from "framer-motion";
import { Navigation, Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";

import * as S from "./Swiper.styled";
import { useGetProjects } from "../../services/project";
import ProjectBox from "../project/box/ProjectBox";

const SwiperSlider = () => {
  const { data } = useGetProjects();

  return (
    <S.CustomSwiper
      modules={[Navigation, Pagination]}
      rewind={true}
      navigation={true}
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        1810: {
          slidesPerView: 4,
        },
        1360: {
          slidesPerView: 3,
        },
        910: {
          slidesPerView: 2,
        },
      }}
    >
      {data?.map((item, i) => (
        <SwiperSlide key={item.projectId}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={S.fadeInVariants}
          >
            <ProjectBox data={item} index={i + 1} />
          </motion.div>
        </SwiperSlide>
      ))}
    </S.CustomSwiper>
  );
};

export default SwiperSlider;
