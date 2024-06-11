import styled from "styled-components";
import ModalControl from "../stores/ModalControl";
import { useQuery } from "@tanstack/react-query";
import { getProjectData } from "../apis/project-api";

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
    position: absolute;
    width: 60%;
    height: 90vh;
    background-color: #f5f5f5;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
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
    padding: 6px;
    &:hover {
        background-color: rgba(0, 0, 0, 0.4);
    }
`;

const Image = styled.div`
    width: 60%;
    height: 100%;
    background-color: #d9d9d9;
    border-radius: 10px 0px 0px 10px;
`;

const DescWrapper = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    overflow-y: auto;
`;

const Text = styled.div`
    &.title {
        font-weight: bold;
        font-size: 36px;
        letter-spacing: 8px;
    }
    &.subtitle {
        font-size: 24px;
        font-weight: bold;
    }
    &.desc {
        font-size: 14px;
    }
    &.desc_spc {
        font-size: 16px;
        line-height: 32px;
    }
`;

const SkillBox = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
    flex-wrap: wrap;
`;

const SkillItem = styled.div`
    .img {
        border-radius: 10px;
    }
`;

const LinkItem = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    gap: 8px;
    padding: 8px 16px;
    background-color: #d9d9d9;
    border-radius: 20px;
    img {
        height: 20px;
        width: auto;
    }
    &:hover {
        transform: scale(1.05);
    }
`;

const ProjectModal = () => {
    const { setCloseModal, title, isOpen } = ModalControl();
    const { data: list } = useQuery({
        queryKey: ["project_data", title],
        queryFn: async () => getProjectData(title),
    });
    const onClickClose = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isOpen && e.target === e.currentTarget) {
            setCloseModal();
        }
    };
    const onClickLink = (url: string) => {
        window.open(url, "_blank");
    };
    return (
        <Wrapper
            style={{ display: isOpen ? "flex" : "none" }}
            onClick={onClickClose}
        >
            <Container>
                {list && (
                    <>
                        <Image></Image>
                        <DescWrapper>
                            <Text className="title">{title}</Text>
                            <Text className="desc">
                                {list.date} {list.desc}
                            </Text>
                            <Text className="subtitle">프로젝트 설명</Text>
                            <Text className="desc_spc">{list.intro}</Text>
                            <Text className="subtitle">개발 주요 사항</Text>
                            <Text
                                className="desc_spc"
                                dangerouslySetInnerHTML={{
                                    __html: list.desc_spc,
                                }}
                            ></Text>
                            <Text className="subtitle">기술 스택</Text>
                            <SkillBox>
                                {list.skill.split(",").map((item: string) => {
                                    const Skill = item.trim();
                                    let logo = Skill.split("-")[0];
                                    if (logo === "zustand")
                                        logo = "furrynetwork";
                                    if (logo === "kakaomapapi") logo = "kakao";
                                    return (
                                        <SkillItem key={item}>
                                            <img
                                                style={{ borderRadius: "20px" }}
                                                alt={Skill}
                                                src={`https://img.shields.io/badge/${Skill}?style=for-the-badge&logo=${logo}&logoColor=white`}
                                            />
                                        </SkillItem>
                                    );
                                })}
                            </SkillBox>
                            <Text className="subtitle">Link</Text>
                            <SkillBox>
                                {list.git_link && (
                                    <LinkItem
                                        onClick={() =>
                                            onClickLink(list.git_link)
                                        }
                                    >
                                        <img
                                            src="/svg/stack/github.svg"
                                            alt="github-logo"
                                            width="36px"
                                            height="36px"
                                        />
                                        Github
                                    </LinkItem>
                                )}
                                {list.v_link && (
                                    <LinkItem
                                        onClick={() => onClickLink(list.v_link)}
                                    >
                                        <img
                                            src="/svg/stack/velog.svg"
                                            alt="velog-logo"
                                            width="18px"
                                            height="18px"
                                        />
                                        Velog
                                    </LinkItem>
                                )}
                                {list.web_link && (
                                    <LinkItem
                                        onClick={() =>
                                            onClickLink(list.web_link)
                                        }
                                    >
                                        <img
                                            src="/svg/stack/vercel.svg"
                                            alt="vercel-logo"
                                            width="18px"
                                            height="18px"
                                        />
                                        Demo
                                    </LinkItem>
                                )}
                            </SkillBox>
                        </DescWrapper>
                    </>
                )}
                <CancleIcon onClick={setCloseModal}>
                    <img
                        src={"/svg/icons/cancle.svg"}
                        alt="x-icon"
                        width="24px"
                        height="24px"
                    />
                </CancleIcon>
            </Container>
        </Wrapper>
    );
};

export default ProjectModal;
