import styled from "styled-components";
import CustomCursor from "../components/CustomCursor";
import { useState } from "react";

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #00071e;
    padding: 0px 32px;
`;

const ItemWrapper = styled.div`
    display: flex;
    width: 100%;
    max-width: 900px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 60px;
    @media (max-width: 769px) {
        gap: 40px;
    }
`;

const data = [
    { name: "HTML5", w: "72px", h: "72px", svg: "html" },
    { name: "CSS3", w: "72px", h: "72px", svg: "css" },
    { name: "JavaScript", w: "72px", h: "72px", svg: "js" },
    { name: "TypeScript", w: "72px", h: "72px", svg: "ts" },
    { name: "React.js", w: "72px", h: "72px", svg: "react" },
    { name: "Next.js", w: "120px", h: "72px", svg: "next" },
    { name: "Git", w: "72px", h: "72px", svg: "git" },
    { name: "Github", w: "72px", h: "72px", svg: "github" },
    { name: "MySQL", w: "140px", h: "72px", svg: "mysql" },
    { name: "Redux", w: "72px", h: "72px", svg: "redux" },
    { name: "Zustand", w: "92px", h: "72px", svg: "zustand" },
    { name: "Tanstack Query", w: "80px", h: "72px", svg: "query" },
    { name: "React Router", w: "117px", h: "64px", svg: "router" },
    { name: "Axios", w: "246px", h: "36px", svg: "axios" },
    { name: "Styled Components", w: "72px", h: "72px", svg: "sc" },
    { name: "Material UI", w: "84px", h: "72px", svg: "mui" },
    { name: "Tailwind CSS", w: "322px", h: "40px", svg: "tailwind" },
];

const Item = styled.div`
    @media (max-width: 769px) {
        img {
            height: 40px;
            width: auto;
            &.tailwind {
                height: 28px;
                width: auto;
            }
            &.router {
                height: 32px;
                width: auto;
            }
            &.axios {
                height: 24px;
                width: auto;
            }
        }
    }
    &:hover {
        cursor: none;
    }
`;

const Skills = () => {
    const [cursorText, setCursorText] = useState<string>("");

    const handleMouseEnter = (name: string) => {
        setCursorText(name);
    };

    const handleMouseLeave = () => {
        setCursorText("");
    };

    return (
        <>
            {cursorText && <CustomCursor text={cursorText} />}
            <Wrapper>
                <ItemWrapper>
                    {data.map((item) => (
                        <Item
                            key={item.name}
                            onMouseEnter={() => handleMouseEnter(item.name)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img
                                className={item.svg}
                                src={`/svg/${item.svg}.svg`}
                                alt={item.name}
                                width={item.w}
                                height={item.h}
                            />
                        </Item>
                    ))}
                </ItemWrapper>
            </Wrapper>
        </>
    );
};

export default Skills;
