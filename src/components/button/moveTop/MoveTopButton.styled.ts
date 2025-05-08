import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const bounce = keyframes`
 0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  right: 5%;
  bottom: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border: 2px solid #a6b6c9;
  border-radius: 8px;
  font-size: 12px;
  font-weight: bold;
  color: #e4b783;
  background-color: #0f193b;
  cursor: pointer;
  z-index: 999;

  @media (max-width: 1025px) {
    right: 10%;
    bottom: 8%;
  }

  &:hover {
    background-color: #0f1e56;
    animation: ${bounce} 1.5s infinite;
  }
`;
