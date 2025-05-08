import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "react-scroll";

const bounce = keyframes`
  0%, 100% {
    transform: translate(-50%, 0);
  }
  50% {
    transform: translate(-50%, -10px);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(#252540, #141426, #00071e, #00071e);
`;

export const TextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
  transform: translate(-50%, -50%);
`;

export const Text = styled.div`
  text-align: center;

  &.job {
    margin-right: -16px;
    font-size: 24px;
    font-weight: bold;
    line-height: 18px;
    letter-spacing: 16px;
    color: #ffffff;

    @media (max-width: 1025px) {
      font-size: 14px;
    }
  }

  &.name {
    margin-right: -8px;
    font-family: "Times New Roman", Times, serif;
    font-size: 120px;
    letter-spacing: 8px;
    color: #ffffff;

    @media (max-width: 1025px) {
      font-size: 84px;
    }

    @media (max-width: 769px) {
      font-size: 52px;
    }
  }

  &.desc {
    font-size: 24px;
    font-weight: bold;
    color: #e4b783;
    word-spacing: 8px;

    @media (max-width: 1025px) {
      font-size: 16px;
    }
  }
`;

export const DownIcon = styled.div`
  position: absolute;
  bottom: 3%;
  left: 50%;
  transform: translateX(-50%);
  animation: ${bounce} 2s infinite;
  cursor: pointer;
`;

export const CustomLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  font-size: 18px;
  color: #fff;
  word-spacing: 10px;

  @media (max-width: 1025px) {
    gap: 16px;
    font-size: 16px;

    img {
      width: 24px;
      height: auto;
    }
  }
`;
