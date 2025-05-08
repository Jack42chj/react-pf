import styled from "@emotion/styled";

export const Picture = styled.div<{ $link: string }>`
  width: 100%;
  height: 240px;
  background-image: url(${(props) => props.$link});
  background-size: cover;
  background-position: center;

  @media (max-width: 1025px) {
    height: 150px;
  }

  @media (max-width: 480px) {
    height: 96px;
  }
`;

export const Text = styled.div`
  &.title {
    font-size: 22px;
    font-weight: bold;
    color: #fff;
  }

  &.date {
    font-size: 14px;
    color: #a1a1aa;
  }

  &.desc {
    font-size: 16px;
    line-height: 20px;
    color: #a6b6c9;
  }
`;

export const Bar = styled.div`
  width: 25%;
  height: 3px;
  background-color: #66d6df;
`;

export const Wrapper = styled.div<{
  $isHovered: boolean;
  $isOtherHovered: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  transition: 0.5s;
  cursor: pointer;
  opacity: ${(props) =>
    props.$isOtherHovered ? (props.$isHovered ? 1 : 0.4) : 1};
  &:hover {
  }
  &:hover ${Text} {
    &.title {
      color: #66d6df;
    }
  }
  &:hover ${Bar} {
    width: 100%;
    transition: 2s;
  }
  @media (max-width: 1025px) {
    width: 100%;
    ${Text} {
      &.title {
        font-size: 18px;
      }
      &.date,
      &.desc {
        display: none;
      }
    }
    ${Bar} {
      display: none;
    }
  }
`;
