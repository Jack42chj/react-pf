import React from "react";

import * as S from "./ContactButton.styled";

const ContactBtn = () => {
  const sendMail = (): void => {
    window.location.href = "mailto:hojinch99@gmail.com";
  };

  return (
    <S.BtnWrapper onClick={sendMail}>
      <S.BtnLine />
      CONTACT
    </S.BtnWrapper>
  );
};

export default ContactBtn;
