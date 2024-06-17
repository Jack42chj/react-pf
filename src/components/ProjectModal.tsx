import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import ProjectContent from "./ProjectContent";
import ProjectSkeleton from "./ProjectSkeleton";
import { getProjectData } from "../apis/project-api";
import Store from "../stores/store";

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    position: relative;
    width: 60%;
    height: 90vh;
    background-color: #f5f5f5;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    @media (max-width: 1025px) {
        flex-direction: column;
        width: 80%;
    }
`;

const CancleIcon = styled.div`
    cursor: pointer;
    position: absolute;
    top: 1%;
    right: 1%;
    z-index: 999;
    background-color: #f5f5f5;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;
    &:hover {
        background-color: rgba(0, 0, 0, 0.4);
    }
`;

const ProjectModal = () => {
    const { setCloseModal, title, isOpen } = Store();
    const { data: list, isLoading } = useQuery({
        queryKey: ["project_data", title],
        queryFn: async () => getProjectData(title),
    });

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (isOpen) {
                e.stopPropagation();
            }
        };

        const disableBodyScroll = () => {
            document.body.style.overflow = "hidden";
        };

        const enableBodyScroll = () => {
            document.body.style.overflow = "";
        };

        if (isOpen) {
            disableBodyScroll();
        } else {
            enableBodyScroll();
        }

        window.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, [isOpen]);

    const onClickClose = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isOpen && e.target === e.currentTarget) {
            setCloseModal();
        }
    };

    return (
        <Wrapper
            style={{ display: isOpen ? "flex" : "none" }}
            onClick={onClickClose}
        >
            <Container>
                {isLoading ? (
                    <ProjectSkeleton />
                ) : (
                    list && <ProjectContent list={list} title={title} />
                )}
                <CancleIcon onClick={setCloseModal}>
                    <img
                        src={"/svg/icons/cancle.svg"}
                        alt="x-icon"
                        width="20px"
                        height="20px"
                    />
                </CancleIcon>
            </Container>
        </Wrapper>
    );
};

export default ProjectModal;
