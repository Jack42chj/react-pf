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
  overflow: hidden;
  background-color: #00071e;
`;

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 30px;
  width: 80%;
  @media (max-width: 1025px) {
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    width: 95%;
  }
`;

export const Box = styled(motion.div)`
  width: 25%;
  @media (max-width: 1025px) {
    width: 100%;
  }
`;

export const parentsVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.5 },
  },
};

export const childVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
