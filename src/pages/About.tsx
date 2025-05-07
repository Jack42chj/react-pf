import React from "react";

import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #00071e;
`;

const Container = styled(motion.div)`
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

const MyPic = styled(motion.div)`
  position: relative;
  right: 3%;
  width: 60%;
  height: 100%;
  max-width: 615px;
  background-image: url("/webp/me.webp");
  background-size: cover;
  background-position: center;

  @media (max-width: 769px) {
    right: 0;
    min-height: 200px;
    width: 100%;
    height: 50%;
  }
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
`;

const DescWrapper = styled(motion.div)`
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

const Text = styled.div`
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

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 1025px) {
    gap: 12px;
  }
`;

const parentsVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.5, duration: 1 },
  },
};

const pictureVariants = {
  hidden: { height: "20%", y: 50 },
  visible: { height: "100%", y: 0, transition: { duration: 1 } },
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 2 } },
};

const About = () => {
  return (
    <Wrapper id="about">
      <Container
        initial="hidden"
        whileInView="visible"
        variants={parentsVariants}
      >
        <MyPic variants={pictureVariants} />
        <DescWrapper variants={textVariants}>
          <Text className="ename">CHOI HOJIN</Text>
          <Text className="kname">최호진</Text>
          <InfoWrapper>
            <Text className="info">
              <img
                src="svg/icons/person.svg"
                alt="person-icon"
                width="20px"
                height="20px"
              />
              1999.03.25 Seoul
            </Text>
            <Text className="info">
              <img
                src="svg/icons/phone.svg"
                alt="phone-icon"
                width="20px"
                height="20px"
              />
              +82 010-5064-8771
            </Text>
            <Text className="info">
              <img
                src="svg/icons/mail.svg"
                alt="mail-icon"
                width="20px"
                height="20px"
              />
              hojinch99@gmail.com
            </Text>
            <Text className="info">
              <img
                src="svg/icons/github.svg"
                alt="github-icon"
                width="20px"
                height="20px"
              />
              https://github.com/Jack42chj
            </Text>
            <Text className="info">
              <img
                src="svg/icons/velog.svg"
                alt="velog-icon"
                width="20px"
                height="20px"
              />
              https://velog.io/@hojinch99
            </Text>
          </InfoWrapper>
          <Text className="title">" 화이팅 넘치는 긍정 에너지! "</Text>
          <Text className="desc">
            안녕하십니까! 신입 프론트엔드 개발자를 준비하고 있는 최호진입니다.
            <br />
            문제를 직면할 때 부정적으로 받아들이기보다는 긍정적으로 바라보려
            합니다.
            <br />
            긍정적인 마음가짐과 강한 의지력이 있다면 어떤 어려움도 해결할 수
            있으며
            <br />
            그 과정을 통해 한층 더 성장할 수 있다고 믿습니다.
            <br />
            주변 사람들에게도 긍정 에너지를 전파하여 함께 성장할 수 있는 환경을
            만드는 것이 제 목표입니다.
          </Text>
        </DescWrapper>
      </Container>
    </Wrapper>
  );
};

export default About;
