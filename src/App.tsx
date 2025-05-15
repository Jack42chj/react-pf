import React, { useEffect } from "react";

import { css, Global } from "@emotion/react";
import emotionReset from "emotion-reset";

import MoveTopButton from "./components/button/moveTop/MoveTopButton";
import Modal from "./components/modal/Modal";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Project from "./pages/project/Project";
import Skills from "./pages/skills/Skills";
import { useModalStore } from "./stores/modal";
import { usePaginationStore } from "./stores/pagination";

const globalStyles = css`
  ${emotionReset};
  * {
    box-sizing: border-box;
  }
  body {
    overflow-y: auto;
    font-family: "Pretendard", "Noto Sans KR", sans-serif;
  }
  dialog {
    border: 0;
    padding: 0;
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
  const { isOpen, currentPage, setCurrentPage } = usePaginationStore();
  const { modals } = useModalStore();
  const totalPages = 6;

  useEffect(() => {
    if (modals.length > 0) return;

    const handleWheel = (e: WheelEvent) => {
      if (modals.length === 0) {
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
  }, [currentPage, modals.length]);

  useEffect(() => {
    const posY = currentPage * window.innerHeight;
    window.scrollTo({ top: posY, behavior: "smooth" });
  }, [currentPage]);

  return (
    <>
      <Modal />
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
