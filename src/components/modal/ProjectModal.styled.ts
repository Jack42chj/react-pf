import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 60%;
  height: 90vh;
  border-radius: 10px;
  background-color: #f5f5f5;
  @media (max-width: 1025px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const CancleIcon = styled.div`
  position: absolute;
  top: 1%;
  right: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  padding: 4px;
  background-color: #f5f5f5;
  cursor: pointer;
  z-index: 999;
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;
