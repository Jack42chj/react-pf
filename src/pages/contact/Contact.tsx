import React from "react";

import * as S from "./Contact.styled";
import ContactBtn from "../../components/button/contact/ContactButton";

const Contact = () => {
  const onClickLink =
    (name: string) =>
    (e: React.MouseEvent<HTMLDivElement>): void => {
      let url = "";
      if (name === "velog") url = "https://velog.io/@hojinch99";
      else if (name === "github") url = "https://github.com/Jack42chj";
      else url = "https://www.linkedin.com/in/hojinchoi-jack42";
      window.open(url, "_blank");
    };

  return (
    <S.Wrapper id="contact">
      <S.Text initial="hidden" whileInView="visible" variants={S.textVariants}>
        저에 대해 궁금하신가요?
      </S.Text>
      <S.Text className="mail">hojinch99@gmail.com</S.Text>
      <ContactBtn />
      <S.Footer>
        <S.Text className="desc">&#169; 2024 Choi Hojin</S.Text>
        <S.LinkItem onClick={onClickLink("github")}>
          <img
            src="/svg/icons/github.svg"
            alt="github-logo"
            width="18px"
            height="18px"
          />
        </S.LinkItem>
        <S.LinkItem onClick={onClickLink("velog")}>
          <img
            src="/svg/icons/velog.svg"
            alt="velog-logo"
            width="18px"
            height="18px"
          />
        </S.LinkItem>
        <S.LinkItem onClick={onClickLink("linkedin")}>
          <img
            src="/svg/icons/linkedin.svg"
            alt="linkedin-logo"
            width="18px"
            height="18px"
          />
        </S.LinkItem>
      </S.Footer>
    </S.Wrapper>
  );
};

export default Contact;
