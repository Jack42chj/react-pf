import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #00071e;
`;

const Container = styled.div`
    width: 75%;
    height: 80vh;
    padding: 20px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    background-color: #060c26;
    border: 2px solid rgb(28, 36, 67);
    @media (max-width: 769px) {
        flex-direction: column;
        width: 90%;
        height: 90vh;
        overflow-y: auto;
    }
`;

const MyPic = styled.div`
    position: relative;
    background-image: url("/me.webp");
    background-size: cover;
    background-position: center;
    max-width: 615px;
    width: 60%;
    height: 100%;
    right: 3%;

    @media (max-width: 769px) {
        height: 50%;
        width: 100%;
        right: 0;
        min-height: 200px;
    }
    &:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border: 10px solid rgba(0, 0, 0, 0.3);
        pointer-events: none;
        box-sizing: border-box;
    }
`;

const DescWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color: #ffffff;
    gap: 40px;
    @media (max-width: 1025px) {
        gap: 20px;
    }
`;

const Text = styled.div`
    font-weight: bold;
    &.ename {
        color: #e4b783;
        font-size: 18px;
        letter-spacing: 6px;
    }
    &.kname {
        color: #e4b783;
        font-size: 36px;
        letter-spacing: 12px;
    }
    &.title {
        color: #fff;
        font-size: 44px;
        @media (max-width: 1025px) {
            font-size: 24px;
        }
    }
    &.desc {
        color: #a6b6c9;
        font-size: 16px;
        line-height: 30px;
        @media (max-width: 1025px) {
            font-size: 14px;
        }
    }
    &.info {
        font-weight: bold;
        color: #a6b6c9;
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 12px;
    }
`;

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (max-width: 1025px) {
        gap: 12px;
    }
`;

const About = () => {
    return (
        <Wrapper>
            <Container>
                <MyPic />
                <DescWrapper>
                    <Text className="ename">CHOI HOJIN</Text>
                    <Text className="kname">최호진</Text>
                    <InfoWrapper>
                        <Text className="info">
                            <img
                                src="svg/icons/person.svg"
                                alt="person-icon"
                                width="20px"
                                height="20px"
                            />
                            1999.03.25 Seoul
                        </Text>
                        <Text className="info">
                            <img
                                src="svg/icons/phone.svg"
                                alt="phone-icon"
                                width="20px"
                                height="20px"
                            />
                            +82 010-5064-8771
                        </Text>
                        <Text className="info">
                            <img
                                src="svg/icons/mail.svg"
                                alt="mail-icon"
                                width="20px"
                                height="20px"
                            />
                            hojinch99@gmail.com
                        </Text>
                        <Text className="info">
                            <img
                                src="svg/icons/github.svg"
                                alt="github-icon"
                                width="20px"
                                height="20px"
                            />
                            https://github.com/Jack42chj
                        </Text>
                        <Text className="info">
                            <img
                                src="svg/icons/velog.svg"
                                alt="velog-icon"
                                width="20px"
                                height="20px"
                            />
                            https://velog.io/@hojinch99/posts
                        </Text>
                    </InfoWrapper>
                    <Text className="title">소통하며 함께 성장하는 개발자</Text>
                    <Text className="desc">
                        신입 프론트엔드 개발자를 준비하고 있는 최호진입니다.
                        <br />
                        제가 생각하는 개발은 가독성과 유지보수성이 높은 코드를
                        작성하는 것입니다.
                        <br />
                        항상 위와 같은 목표를 잡고 개발에 임하고 있으며 새로운
                        것을 배우는데 관심이 많습니다.
                        <br />
                        이를 통해 배운 것에 대한 생각을 정리하고 사람들과 경험을
                        공유하기 위해 블로그를 운영하고 있습니다.
                        <br />
                        지식을 체계적으로 정리하고, 다른 개발자들과 소통하며
                        함께 성장하는 개발자가 되고싶습니다.
                    </Text>
                </DescWrapper>
            </Container>
        </Wrapper>
    );
};

export default About;
