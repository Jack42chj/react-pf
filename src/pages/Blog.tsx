import { useState } from "react";
import styled from "styled-components";
import BlogContent from "../components/BlogContent";
import { useQuery } from "@tanstack/react-query";
import { getBlogData } from "../apis/project-api";

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

const Container = styled.div`
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

const Blog = () => {
    const [hovered, setHovered] = useState<string | null>(null);
    const { data: list } = useQuery({
        queryKey: ["blog_data"],
        queryFn: async () => getBlogData(),
    });
    return (
        <Wrapper>
            <Container>
                {list &&
                    list.map((item) => (
                        <BlogContent
                            key={item.title}
                            data={item}
                            isHovered={hovered === item.title}
                            isOtherHovered={hovered !== null}
                            onHover={() => setHovered(item.title)}
                            onLeave={() => setHovered(null)}
                        />
                    ))}
            </Container>
        </Wrapper>
    );
};

export default Blog;
