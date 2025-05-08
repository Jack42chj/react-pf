import React, { useEffect } from "react";

import { css, Global } from "@emotion/react";
import emotionReset from "emotion-reset";

import MoveTopButton from "./components/button/moveTop/MoveTopButton ";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Store from "./stores/store";

const globalStyles = css`
  ${emotionReset};
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
    border-radius: 10px;
    background: #b0b0b0;
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 173, 181, 0.1);
  }
`;

const App = () => {
  const { isOpen, currentPage, setCurrentPage } = Store();
  const totalPages = 6;

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isOpen) {
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
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [currentPage, isOpen]);

  useEffect(() => {
    const posY = currentPage * window.innerHeight;
    window.scrollTo({ top: posY, behavior: "smooth" });
  }, [currentPage]);

  return (
    <>
      <Global styles={globalStyles} />
      <Home />
      <About />
      <Skills />
      <Project />
      <Blog />
      <Contact />
      {currentPage !== 0 && isOpen !== true && <MoveTopButton />}
    </>
  );
};

export default App;
