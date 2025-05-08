import React, { useState } from "react";

import { useQuery } from "@tanstack/react-query";

import * as S from "./Blog.styled";
import { getBlogData } from "../../apis/project-api";
import BlogContent from "../../components/blog/BlogContent";

const Blog = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const { data: list } = useQuery({
    queryKey: ["blog_data"],
    queryFn: async () => getBlogData(),
  });

  return (
    <S.Wrapper id="blog">
      <S.Container
        initial="hidden"
        whileInView="visible"
        variants={S.parentsVariants}
      >
        {list &&
          list.map((item) => (
            <S.Box key={item.title} variants={S.childVariants}>
              <BlogContent
                data={item}
                isHovered={hovered === item.title}
                isOtherHovered={hovered !== null}
                onHover={() => setHovered(item.title)}
                onLeave={() => setHovered(null)}
              />
            </S.Box>
          ))}
      </S.Container>
    </S.Wrapper>
  );
};

export default Blog;
