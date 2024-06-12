import styled from "styled-components";

const Image = styled.div`
    width: 55%;
    height: 100%;
    background-color: #d9d9d9;
    border-radius: 10px 0px 0px 10px;
    @media (max-width: 1025px) {
        width: 100%;
        height: 45%;
        border-radius: 10px 10px 0px 0px;
    }
`;

const DescWrapper = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    @media (max-width: 1025px) {
        width: 100%;
        height: 55%;
        gap: 12px;
    }
`;

const Text = styled.div`
    background-color: #d9d9d9;
    border-radius: 20px;
    width: 100%;
    height: 16px;
    &.title {
        width: 80%;
        height: 36px;
        @media (max-width: 1025px) {
            height: 24px;
        }
    }
    &.skill {
        margin-top: 16px;
        width: 60%;
        height: 36px;
        @media (max-width: 1025px) {
            height: 24px;
        }
    }
`;

const SkillBox = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
    flex-wrap: wrap;
`;

const Item = styled.div`
    height: 28px;
    width: 28px;
    border-radius: 100%;
    background-color: #d9d9d9;
`;

const ProjectSkeleton = () => {
    return (
        <>
            <Image />
            <DescWrapper>
                <Text className="title" />
                <Text />
                <Text />
                <Text />
                <Text />
                <Text className="skill" />
                <SkillBox>
                    <Item />
                    <Item />
                    <Item />
                </SkillBox>
            </DescWrapper>
        </>
    );
};

export default ProjectSkeleton;
