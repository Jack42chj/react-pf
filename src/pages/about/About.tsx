import React from "react";

import * as S from "./About.styled";

const About = () => {
  return (
    <S.Wrapper id="about">
      <S.Container
        initial="hidden"
        whileInView="visible"
        variants={S.parentsVariants}
      >
        <S.MyPic variants={S.pictureVariants} />
        <S.DescWrapper variants={S.textVariants}>
          <S.Text className="ename">CHOI HOJIN</S.Text>
          <S.Text className="kname">최호진</S.Text>
          <S.InfoWrapper>
            <S.Text className="info">
              <img
                src="svg/icons/person.svg"
                alt="person-icon"
                width="20px"
                height="20px"
              />
              1999.03.25 Seoul
            </S.Text>
            <S.Text className="info">
              <img
                src="svg/icons/phone.svg"
                alt="phone-icon"
                width="20px"
                height="20px"
              />
              +82 010-5064-8771
            </S.Text>
            <S.Text className="info">
              <img
                src="svg/icons/mail.svg"
                alt="mail-icon"
                width="20px"
                height="20px"
              />
              hojinch99@gmail.com
            </S.Text>
            <S.Text className="info">
              <img
                src="svg/icons/github.svg"
                alt="github-icon"
                width="20px"
                height="20px"
              />
              https://github.com/Jack42chj
            </S.Text>
            <S.Text className="info">
              <img
                src="svg/icons/velog.svg"
                alt="velog-icon"
                width="20px"
                height="20px"
              />
              https://velog.io/@hojinch99
            </S.Text>
          </S.InfoWrapper>
          <S.Text className="title">" 화이팅 넘치는 긍정 에너지! "</S.Text>
          <S.Text className="desc">
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
          </S.Text>
        </S.DescWrapper>
      </S.Container>
    </S.Wrapper>
  );
};

export default About;
