import React, { useEffect } from "react";

import styled from "@emotion/styled";

const CustomCursorWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 140px;
  border-radius: 100%;
  font-size: 20px;
  font-weight: bold;
  color: #00071e;
  text-align: center;
  white-space: wrap;
  background-color: #fefefe;
  transform: translate(-50%, -90%);
  transition: transform 0.1s ease-in-out;
  pointer-events: none;
`;

const useCustomCursor = () => {
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
};

const CustomCursor: React.FC<{ text: string }> = ({ text }) => {
  useCustomCursor();

  return <CustomCursorWrapper id="custom-cursor">{text}</CustomCursorWrapper>;
};

export default CustomCursor;
