import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ProjectBox from "./ProjectBox";
import styled from "styled-components";

const CustomSwiper = styled(Swiper)`
    .swiper-button-next,
    .swiper-button-prev {
        display: none;
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

const data = [
    { name: "COFFEEZIP" },
    { name: "BINZIP" },
    { name: "MUSTGO" },
    { name: "MOLBWA" },
    { name: "FUTBOLISTA" },
    { name: "PROFITTY" },
];

const SwiperSlider = () => {
    return (
        <CustomSwiper
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
                    <ProjectBox name={item.name} num={i + 1} />
                </SwiperSlide>
            ))}
        </CustomSwiper>
    );
};

export default SwiperSlider;
