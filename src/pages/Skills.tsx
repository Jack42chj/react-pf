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
    { name: "HTML5", w: "64px", h: "64px", svg: "html" },
    { name: "CSS3", w: "64px", h: "64px", svg: "css" },
    { name: "JavaScript", w: "64px", h: "64px", svg: "js" },
    { name: "TypeScript", w: "64px", h: "64px", svg: "ts" },
    { name: "React.js", w: "64px", h: "64px", svg: "react" },
    { name: "Next.js", w: "120px", h: "72px", svg: "next" },
    { name: "Git", w: "64px", h: "64px", svg: "git" },
    { name: "Github", w: "64px", h: "64px", svg: "github" },
    { name: "MySQL", w: "140px", h: "72px", svg: "mysql" },
    { name: "Redux", w: "64px", h: "64px", svg: "redux" },
    { name: "Zustand", w: "92px", h: "72px", svg: "zustand" },
    { name: "Tanstack Query", w: "71px", h: "64px", svg: "query" },
    { name: "React Router", w: "110px", h: "60px", svg: "router" },
    { name: "Axios", w: "219px", h: "32px", svg: "axios" },
    { name: "Styled Components", w: "123px", h: "56px", svg: "sc" },
    { name: "Material UI", w: "75px", h: "64px", svg: "mui" },
    { name: "Tailwind CSS", w: "322px", h: "40px", svg: "tailwind" },
    { name: "Supabase", w: "267px", h: "56px", svg: "supabase" },
];

const Item = styled.div`
    &:hover {
        cursor: none;
        img {
            mix-blend-mode: difference;
        }
    }
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
    @media (max-width: 375px) {
        img {
            height: 32px;
            width: auto;
        }
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
            <Wrapper id="skill">
                <ItemWrapper>
                    {data.map((item) => (
                        <Item
                            key={item.name}
                            onMouseEnter={() => handleMouseEnter(item.name)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img
                                className={item.svg}
                                src={`/svg/skills/${item.svg}.svg`}
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
