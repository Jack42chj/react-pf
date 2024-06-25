import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import styled from "styled-components";
import ProjectBox from "./ProjectBox";
import { motion } from "framer-motion";

const CustomSwiper = styled(Swiper)`
    .swiper-button-next,
    .swiper-button-prev {
        display: flex;
        color: #fff;
        top: 25%;
        opacity: 1;
        height: 50px;
        width: 50px;
        border-radius: 50px;
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

const data = [
    { name: "COFFEEZIP" },
    { name: "BINZIP" },
    { name: "MUSTGO" },
    { name: "MOLBWA" },
    { name: "FUTBOLISTA" },
    { name: "PROFITTY" },
    { name: "PORTFOLIO" },
];

const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

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
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInVariants}
                    >
                        <ProjectBox name={item.name} num={i + 1} />
                    </motion.div>
                </SwiperSlide>
            ))}
        </CustomSwiper>
    );
};

export default SwiperSlider;
