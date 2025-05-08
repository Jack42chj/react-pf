import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 100%;
  height: 100vh;
  padding: 0px 20px;
  background-color: #00071e;
`;

export const Text = styled(motion.div)`
  font-size: 96px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;

  &.mail {
    font-size: 20px;
    color: #a6b6c9;
  }

  &.desc {
    font-size: 20px;
    color: #a1a1aa;
  }

  @media (max-width: 1025px) {
    font-size: 72px;
  }

  @media (max-width: 769px) {
    font-size: 32px;
  }
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 3%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  transform: translateX(-50%);
`;

export const LinkItem = styled.div`
  cursor: pointer;

  img {
    width: auto;
    height: 20px;
    border-radius: 2px;
    fill: #a1a1aa;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};
