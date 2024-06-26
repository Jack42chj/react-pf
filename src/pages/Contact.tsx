import styled from "styled-components";
import ContactBtn from "../components/ContactButton";
import { motion } from "framer-motion";

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

const Text = styled(motion.div)`
    text-align: center;
    color: #ffffff;
    font-weight: bold;
    font-size: 96px;
    @media (max-width: 1025px) {
        font-size: 72px;
    }
    @media (max-width: 769px) {
        font-size: 32px;
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
        border-radius: 2px;
        height: 20px;
        width: auto;
        &:hover {
            transform: scale(1.2);
        }
        fill: #a1a1aa;
    }
`;

const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Contact = () => {
    const onClickLink = (name: string) => {
        let url = "";
        if (name === "velog") url = "https://velog.io/@hojinch99";
        else if (name === "github") url = "https://github.com/Jack42chj";
        else url = "https://www.linkedin.com/in/hojinchoi-jack42";
        window.open(url, "_blank");
    };
    return (
        <Wrapper id="contact">
            <Text
                initial="hidden"
                whileInView="visible"
                variants={textVariants}
            >
                저에 대해 궁금하신가요?
            </Text>
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
                <LinkItem onClick={() => onClickLink("linkedin")}>
                    <img
                        src="/svg/icons/linkedin.svg"
                        alt="linkedin-logo"
                        width="18px"
                        height="18px"
                    />
                </LinkItem>
            </Footer>
        </Wrapper>
    );
};

export default Contact;
