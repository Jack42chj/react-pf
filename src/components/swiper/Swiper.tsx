import React from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { motion } from "framer-motion";
import { Navigation, Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";

import * as S from "./Swiper.styled";
import ProjectBox from "../project/box/ProjectBox";

const SwiperSlider = () => {
  const data = [
    { name: "COFFEEZIP" },
    { name: "BINZIP" },
    { name: "MUSTGO" },
    { name: "MOLBWA" },
    { name: "FUTBOLISTA" },
    { name: "PROFITTY" },
    { name: "PORTFOLIO" },
  ];

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
      {data.map((item, i) => (
        <SwiperSlide key={item.name}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={S.fadeInVariants}
          >
            <ProjectBox name={item.name} num={i + 1} />
          </motion.div>
        </SwiperSlide>
      ))}
    </S.CustomSwiper>
  );
};

export default SwiperSlider;
