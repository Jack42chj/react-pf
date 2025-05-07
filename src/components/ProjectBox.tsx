import React from "react";

import styled from "@emotion/styled";

import Store from "../stores/store";

const Line = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 44px;
  height: 4px;
  background-color: #66d6df;
  transform: translateX(-50%);
`;

const Item = styled.div`
  position: absolute;
  left: 50%;
  font-size: 1.2rem;
  font-weight: bold;
  transform: translateX(-50%);

  &.project {
    bottom: 20%;
    letter-spacing: 8px;
    color: #ffffff;
  }

  &.num {
    bottom: 10%;
    color: #e4b783;
  }
`;

const Logo = styled.div<{ $link: string }>`
  position: absolute;
  bottom: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  background-image: url(${(props) => `/webp/logo/${props.$link}.webp`});
  background-repeat: no-repeat;
  background-position: center;
  transform: translateX(-50%);
  transition: opacity 1s;
`;

const Picture = styled.div<{ $link: string }>`
  width: 90%;
  height: 0px;
  margin-top: 16px;
  background-image: url(${(props) => `/webp/poster/${props.$link}.webp`});
  background-position: center;
  transition: 1s;
`;

const Triangle = styled.div`
  position: absolute;
  top: 5%;
  transition: opacity 1s;
`;

const Circle = styled.div`
  position: absolute;
  top: 63%;
  width: 6px;
  height: 6px;
  border-radius: 100%;
  background-color: #8798d4;
  transition: opacity 1s;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  height: 440px;
  border: 2px solid rgb(28, 36, 67);
  background-color: #060c26;
  cursor: pointer;

  &:hover {
    height: 600px;
    border: 2px solid #0f1e56;
    background-color: #0f193b;
    transition: 1s;
  }

  &:hover ${Line} {
    width: 144px;
    transition: 1s;
  }

  &:hover ${Item} {
    &.num {
      color: #66d6df;
      transition: 1s;
    }
  }

  &:hover ${Logo}, &:hover ${Triangle}, &:hover ${Circle} {
    opacity: 0;
  }

  &:hover ${Picture} {
    height: 400px;
  }
`;

const ProjectBox: React.FC<{ name: string; num: number }> = ({ name, num }) => {
  const { setOpenModal } = Store();

  return (
    <Wrapper onClick={() => setOpenModal(name)}>
      <Triangle>
        <img
          alt="triangle-icon"
          src="/svg/icons/triangle.svg"
          width="24px"
          height="24px"
        />
      </Triangle>
      <Circle />
      <Logo $link={name.toLowerCase()} />
      <Picture $link={name.toLowerCase()} />
      <Item className="project">{name}</Item>
      <Item className="num">0{num}</Item>
      <Line />
    </Wrapper>
  );
};

export default ProjectBox;
