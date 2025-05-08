import React from "react";

import * as S from "./BlogContent.styled";

interface BlogContentProps {
  data: {
    title: string;
    date: string;
    desc: string;
    img: string;
    url: string;
  };
  isHovered: boolean;
  isOtherHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const BlogContent = ({
  data,
  isHovered,
  isOtherHovered,
  onHover,
  onLeave,
}: BlogContentProps) => {
  const onClickLink = (url: string): void => {
    window.open(url, "_blank");
  };

  return (
    <S.Wrapper
      onClick={() => onClickLink(data.url)}
      $isHovered={isHovered}
      $isOtherHovered={isOtherHovered}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <S.Picture $link={data.img} />
      <S.Text className="title">{data.title}</S.Text>
      <S.Text className="date">{data.date}</S.Text>
      <S.Bar />
      <S.Text className="desc">{data.desc}</S.Text>
    </S.Wrapper>
  );
};

export default BlogContent;
