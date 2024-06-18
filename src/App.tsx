import { useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Store from "./stores/store";
import TopButton from "./components/TopButton";

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
            <GlobalStyles />
            <Home />
            <About />
            <Skills />
            <Project />
            <Blog />
            <Contact />
            {currentPage !== 0 && isOpen !== true && <TopButton />}
        </>
    );
};

export default App;
