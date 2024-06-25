import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getBlogData } from "../apis/project-api";
import BlogContent from "../components/BlogContent";
import { motion } from "framer-motion";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #00071e;
    gap: 40px;
    position: relative;
    padding: 0px 20px;
    overflow: hidden;
`;

const Container = styled(motion.div)`
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 30px;
    @media (max-width: 1025px) {
        flex-direction: column;
        justify-content: center;
        width: 95%;
        gap: 20px;
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
