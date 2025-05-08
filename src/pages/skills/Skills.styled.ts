import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 0px 32px;
  background-color: #00071e;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 60px;
  width: 100%;
  max-width: 900px;

  @media (max-width: 769px) {
    gap: 40px;
  }
`;

export const Item = styled.div`
  &:hover {
    cursor: none;

    img {
      mix-blend-mode: difference;
    }
  }

  @media (max-width: 769px) {
    img {
      width: auto;
      height: 40px;

      &.tailwind {
        width: auto;
        height: 28px;
      }

      &.router {
        width: auto;
        height: 32px;
      }

      &.axios {
        width: auto;
        height: 24px;
      }
    }
  }

  @media (max-width: 375px) {
    img {
      width: auto;
      height: 32px;
    }
  }
`;
