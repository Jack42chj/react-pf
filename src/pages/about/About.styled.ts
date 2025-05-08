import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #00071e;
`;

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 75%;
  height: 80vh;
  border: 2px solid rgb(28, 36, 67);
  padding: 20px;
  background-color: #060c26;

  @media (max-width: 769px) {
    flex-direction: column;
    width: 90%;
    height: 90vh;
    overflow-y: auto;
  }
`;

export const MyPic = styled(motion.div)`
  position: relative;
  right: 3%;
  width: 60%;
  height: 100%;
  max-width: 615px;
  background-image: url("/webp/me.webp");
  background-size: cover;
  background-position: center;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 10px solid rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    pointer-events: none;
  }

  @media (max-width: 769px) {
    right: 0;
    min-height: 200px;
    width: 100%;
    height: 50%;
  }
`;

export const DescWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  width: 100%;
  color: #ffffff;

  @media (max-width: 1025px) {
    gap: 20px;
  }
`;

export const Text = styled.div`
  font-weight: bold;

  &.ename {
    font-size: 18px;
    letter-spacing: 6px;
    color: #e4b783;
  }

  &.kname {
    font-size: 36px;
    letter-spacing: 12px;
    color: #e4b783;
  }

  &.title {
    font-size: 36px;
    color: #fff;

    @media (max-width: 1025px) {
      font-size: 24px;
    }
  }

  &.desc {
    font-size: 16px;
    line-height: 30px;
    color: #a6b6c9;

    @media (max-width: 1025px) {
      font-size: 14px;
    }
  }

  &.info {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 16px;
    font-weight: bold;
    color: #a6b6c9;

    @media (max-width: 1025px) {
      font-size: 14px;
    }
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1025px) {
    gap: 12px;
  }
`;

export const parentsVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.5, duration: 1 },
  },
};

export const pictureVariants = {
  hidden: { height: "20%", y: 50 },
  visible: { height: "100%", y: 0, transition: { duration: 1 } },
};

export const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 2 } },
};
