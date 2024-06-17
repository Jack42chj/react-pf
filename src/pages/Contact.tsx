import styled from "styled-components";
import ContactBtn from "../components/ContactButton";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #00071e;
    gap: 40px;
    position: relative;
    padding: 0px 20px;
`;

const Text = styled.div`
    text-align: center;
    color: #ffffff;
    font-weight: bold;
    font-size: 72px;
    @media (max-width: 769px) {
        font-size: 28px;
    }
    &.mail {
        color: #a6b6c9;
        font-size: 20px;
    }
    &.desc {
        color: #a1a1aa;
        font-size: 20px;
    }
`;

const Footer = styled.div`
    width: 100%;
    position: absolute;
    bottom: 3%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

const LinkItem = styled.div`
    cursor: pointer;
    img {
        height: 20px;
        width: auto;
        &:hover {
            transform: scale(1.2);
        }
        fill: #a1a1aa;
    }
`;

const Contact = () => {
    const onClickLink = (name: string) => {
        let url = "";
        if (name === "velog") {
            url = "https://velog.io/@hojinch99/posts";
        } else url = "https://github.com/Jack42chj";
        window.open(url, "_blank");
    };
    return (
        <Wrapper id="contact">
            <Text>저에 대해 궁금하신가요?</Text>
            <Text className="mail">hojinch99@gmail.com</Text>
            <ContactBtn />
            <Footer>
                <Text className="desc">&#169; 2024 Choi Hojin</Text>
                <LinkItem onClick={() => onClickLink("github")}>
                    <img
                        src="/svg/icons/github.svg"
                        alt="github-logo"
                        width="18px"
                        height="18px"
                    />
                </LinkItem>
                <LinkItem onClick={() => onClickLink("velog")}>
                    <img
                        src="/svg/icons/velog.svg"
                        alt="velog-logo"
                        width="18px"
                        height="18px"
                    />
                </LinkItem>
            </Footer>
        </Wrapper>
    );
};

export default Contact;
