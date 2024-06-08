import { useEffect } from "react";
import styled from "styled-components";

const CustomCursorWrapper = styled.div`
    position: fixed;
    pointer-events: none;
    width: 140px;
    height: 140px;
    border-radius: 100%;
    text-align: center;
    background: #fefefe;
    color: #00071e;
    font-size: 22px;
    font-weight: bold;
    transition: transform 0.1s ease-in-out;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: wrap;
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
