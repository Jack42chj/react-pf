import React, { useState } from "react";

import * as S from "./Blog.styled";
import BlogContent from "../../components/blog/BlogContent";
import { useGetBlogs } from "../../services/blog";

const Blog = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  const { data } = useGetBlogs();

  return (
    <S.Wrapper id="blog">
      <S.Container
        initial="hidden"
        whileInView="visible"
        variants={S.parentsVariants}
      >
        {data?.map((item) => (
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
