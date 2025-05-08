import styled from "@emotion/styled";

export const Image = styled.div<{ $link: string }>`
  width: 55%;
  height: 100%;
  border-radius: 10px 0px 0px 10px;
  background-image: url(${(props) => props.$link});
  background-size: cover;
  background-position: center;

  @media (max-width: 1025px) {
    width: 100%;
    height: 45%;
    border-radius: 10px 10px 0px 0px;
  }
`;

export const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 45%;
  height: 100%;
  padding: 20px;
  overflow-y: auto;

  @media (max-width: 1025px) {
    gap: 12px;
    width: 100%;
    height: 55%;
  }
`;

export const Title = styled.div<{ $color: string }>`
  font-size: 36px;
  font-weight: bold;
  letter-spacing: 8px;
  color: ${(props) => props.$color};

  @media (max-width: 1025px) {
    font-size: 24px;
  }
`;

export const Text = styled.div`
  &.subtitle {
    font-size: 24px;
    font-weight: bold;

    @media (max-width: 1025px) {
      font-size: 18px;
    }
  }

  &.spec {
    font-size: 16px;
    font-weight: bold;
  }

  &.desc {
    font-size: 14px;
  }

  &.desc_spc {
    font-size: 16px;
    line-height: 32px;

    @media (max-width: 1025px) {
      line-height: 24px;
    }
  }
`;

export const SkillBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
`;

export const SkillItem = styled.div`
  .img {
    border-radius: 10px;
  }
`;

export const LinkItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
  background-color: #d9d9d9;
  cursor: pointer;
  img {
    width: auto;
    height: 20px;
  }
  &:hover {
    transform: scale(1.05);
  }
`;
