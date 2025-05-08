import styled from "@emotion/styled";

export const CustomCursorWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 140px;
  border-radius: 100%;
  font-size: 20px;
  font-weight: bold;
  color: #00071e;
  text-align: center;
  white-space: wrap;
  background-color: #fefefe;
  transform: translate(-50%, -90%);
  transition: transform 0.1s ease-in-out;
  pointer-events: none;
`;
