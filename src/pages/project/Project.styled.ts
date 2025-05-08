import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 0px 20px;
  overflow: hidden;
  background-color: #00071e;
`;

export const Container = styled.div`
  position: relative;
  top: 20%;
  display: flex;
  gap: 40px;
  width: 80%;
  max-height: 100%;

  @media (max-width: 1025px) {
    width: 90%;
  }
`;
