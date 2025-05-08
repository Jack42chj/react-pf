import styled from "@emotion/styled";

export const BtnWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 50px;
  border: 1px solid #ffffff;
  padding-left: 8px;
  overflow: hidden;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 8px;
  color: #ffffff;
  background-color: transparent;
  cursor: pointer;
  z-index: 0;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #e4b783;
    transform: translateX(-100%);
    transition: transform 1s ease;
    z-index: -1;
  }

  &:hover {
    color: #0f193b;
    border-color: #e4b783;

    &:before {
      transform: translateX(0);
    }
  }
`;

export const BtnLine = styled.div`
  position: absolute;
  left: 2%;
  width: 3px;
  height: 42px;
  background-color: #e4b783;
`;
