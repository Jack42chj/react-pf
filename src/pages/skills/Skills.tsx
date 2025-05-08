import React, { useState } from "react";

import * as S from "./Skills.styled";
import CustomCursor from "../../components/cursor/CustomCursor";

const Skills = () => {
  const [cursorText, setCursorText] = useState<string>("");

  const handleMouseEnter =
    (name: string) =>
    (e: React.MouseEvent<HTMLDivElement>): void => {
      setCursorText(name);
    };

  const handleMouseLeave = (): void => {
    setCursorText("");
  };

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

  return (
    <>
      {cursorText && <CustomCursor text={cursorText} />}
      <S.Wrapper id="skill">
        <S.ItemWrapper>
          {data.map((item) => (
            <S.Item
              key={item.name}
              onMouseEnter={handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                className={item.svg}
                src={`/svg/skills/${item.svg}.svg`}
                alt={item.name}
                width={item.w}
                height={item.h}
              />
            </S.Item>
          ))}
        </S.ItemWrapper>
      </S.Wrapper>
    </>
  );
};

export default Skills;
