import React from "react";

import styled from "@emotion/styled";

interface BlogDataProps {
  title: string;
  date: string;
  desc: string;
  img: string;
  url: string;
}

const Picture = styled.div<{ $link: string }>`
  width: 100%;
  height: 240px;
  background-image: url(${(props) => props.$link});
  background-size: cover;
  background-position: center;

  @media (max-width: 1025px) {
    height: 150px;
  }

  @media (max-width: 480px) {
    height: 96px;
  }
`;

const Text = styled.div`
  &.title {
    font-size: 22px;
    font-weight: bold;
    color: #fff;
  }

  &.date {
    font-size: 14px;
    color: #a1a1aa;
  }

  &.desc {
    font-size: 16px;
    line-height: 20px;
    color: #a6b6c9;
  }
`;

const Bar = styled.div`
  width: 25%;
  height: 3px;
  background-color: #66d6df;
`;

const Wrapper = styled.div<{ $isHovered: boolean; $isOtherHovered: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  transition: 0.5s;
  cursor: pointer;
  opacity: ${(props) =>
    props.$isOtherHovered ? (props.$isHovered ? 1 : 0.4) : 1};
  &:hover {
  }
  &:hover ${Text} {
    &.title {
      color: #66d6df;
    }
  }
  &:hover ${Bar} {
    width: 100%;
    transition: 2s;
  }
  @media (max-width: 1025px) {
    width: 100%;
    ${Text} {
      &.title {
        font-size: 18px;
      }
      &.date,
      &.desc {
        display: none;
      }
    }
    ${Bar} {
      display: none;
    }
  }
`;

const BlogContent: React.FC<{
  data: BlogDataProps;
  isHovered: boolean;
  isOtherHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}> = ({ data, isHovered, isOtherHovered, onHover, onLeave }) => {
  const onClickLink = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <Wrapper
      onClick={() => onClickLink(data.url)}
      $isHovered={isHovered}
      $isOtherHovered={isOtherHovered}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <Picture $link={data.img} />
      <Text className="title">{data.title}</Text>
      <Text className="date">{data.date}</Text>
      <Bar />
      <Text className="desc">{data.desc}</Text>
    </Wrapper>
  );
};

export default BlogContent;
