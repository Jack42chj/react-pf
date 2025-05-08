import React from "react";

import styled from "@emotion/styled";
import { motion } from "framer-motion";

import ContactBtn from "../components/button/contact/ContactButton";

const Wrapper = styled.div`
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

const Text = styled(motion.div)`
  font-size: 96px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  @media (max-width: 1025px) {
    font-size: 72px;
  }
  @media (max-width: 769px) {
    font-size: 32px;
  }
  &.mail {
    font-size: 20px;
    color: #a6b6c9;
  }
  &.desc {
    font-size: 20px;
    color: #a1a1aa;
  }
`;

const Footer = styled.div`
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

const LinkItem = styled.div`
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

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Contact = () => {
  const onClickLink = (name: string) => {
    let url = "";
    if (name === "velog") url = "https://velog.io/@hojinch99";
    else if (name === "github") url = "https://github.com/Jack42chj";
    else url = "https://www.linkedin.com/in/hojinchoi-jack42";
    window.open(url, "_blank");
  };
  return (
    <Wrapper id="contact">
      <Text initial="hidden" whileInView="visible" variants={textVariants}>
        저에 대해 궁금하신가요?
      </Text>
      <Text className="mail">hojinch99@gmail.com</Text>
      <ContactBtn />
      <Footer>
        <Text className="desc">&#169; 2024 Choi Hojin</Text>
        <LinkItem onClick={() => onClickLink("github")}>
          <img
            src="/svg/icons/github.svg"
            alt="github-logo"
            width="18px"
            height="18px"
          />
        </LinkItem>
        <LinkItem onClick={() => onClickLink("velog")}>
          <img
            src="/svg/icons/velog.svg"
            alt="velog-logo"
            width="18px"
            height="18px"
          />
        </LinkItem>
        <LinkItem onClick={() => onClickLink("linkedin")}>
          <img
            src="/svg/icons/linkedin.svg"
            alt="linkedin-logo"
            width="18px"
            height="18px"
          />
        </LinkItem>
      </Footer>
    </Wrapper>
  );
};

export default Contact;
