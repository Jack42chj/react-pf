import React, { useEffect } from "react";

import * as S from "./CustomCursor.styled";

interface CustomCursorProps {
  text: string;
}

const CustomCursor = ({ text }: CustomCursorProps) => {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");

    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <S.CustomCursorWrapper id="custom-cursor">{text}</S.CustomCursorWrapper>
  );
};

export default CustomCursor;
