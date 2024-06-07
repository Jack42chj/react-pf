import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Project from "./pages/Project";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    font-family: "Pretendard", "Noto Sans KR", sans-serif;
  }
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #B0B0B0;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 173, 181, 0.1);
  }
`;

const App = () => {
    const [currentPage, setCurrentPage] = useState<number>(0);
    const totalPages = 5;

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();

            if (e.deltaY > 0) {
                if (currentPage < totalPages - 1) {
                    setCurrentPage(currentPage + 1);
                }
            } else if (e.deltaY < 0) {
                if (currentPage > 0) {
                    setCurrentPage(currentPage - 1);
                }
            }
        };

        window.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, [currentPage]);

    useEffect(() => {
        const posY = currentPage * window.innerHeight;
        window.scrollTo({ top: posY, behavior: "smooth" });
    }, [currentPage]);

    return (
        <>
            <GlobalStyles />
            <Home />
            <About />
            <Skills />
            <Project />
            <Contact />
        </>
    );
};

export default App;
