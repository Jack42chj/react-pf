import React, { useState } from "react";

import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

import { getBlogData } from "../apis/project-api";
import BlogContent from "../components/BlogContent";

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
  overflow: hidden;
  background-color: #00071e;
`;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 30px;
  width: 80%;
  @media (max-width: 1025px) {
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    width: 95%;
  }
`;

const Box = styled(motion.div)`
  width: 25%;
  @media (max-width: 1025px) {
    width: 100%;
  }
`;

const parentsVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.5 },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Blog = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const { data: list } = useQuery({
    queryKey: ["blog_data"],
    queryFn: async () => getBlogData(),
  });

  return (
    <Wrapper id="blog">
      <Container
        initial="hidden"
        whileInView="visible"
        variants={parentsVariants}
      >
        {list &&
          list.map((item) => (
            <Box key={item.title} variants={childVariants}>
              <BlogContent
                data={item}
                isHovered={hovered === item.title}
                isOtherHovered={hovered !== null}
                onHover={() => setHovered(item.title)}
                onLeave={() => setHovered(null)}
              />
            </Box>
          ))}
      </Container>
    </Wrapper>
  );
};

export default Blog;
