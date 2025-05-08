import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styled from "@emotion/styled";
import { Swiper } from "swiper/react";

export const CustomSwiper = styled(Swiper)`
  .swiper-button-next,
  .swiper-button-prev {
    top: 25%;
    display: flex;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    color: #fff;
    opacity: 1;
  }
  .swiper-button-prev {
    left: 0px;
  }
  .swiper-button-next {
    right: 0px;
  }
  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 1.1rem !important;
    font-weight: 600 !important;
  }
  .swiper-pagination {
    bottom: 25%;
  }
  .swiper-pagination-bullet {
    background-color: #fff;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background-color: #66d6df;
  }
`;

export const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};
