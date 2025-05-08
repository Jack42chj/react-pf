import styled from "@emotion/styled";

export const Image = styled.div`
  width: 55%;
  height: 100%;
  border-radius: 10px 0px 0px 10px;
  background-color: #d9d9d9;

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

  @media (max-width: 1025px) {
    gap: 12px;
    width: 100%;
    height: 55%;
  }
`;

export const Text = styled.div`
  width: 100%;
  height: 16px;
  border-radius: 20px;
  background-color: #d9d9d9;

  &.title {
    width: 80%;
    height: 36px;

    @media (max-width: 1025px) {
      height: 24px;
    }
  }

  &.skill {
    width: 60%;
    height: 36px;
    margin-top: 16px;

    @media (max-width: 1025px) {
      height: 24px;
    }
  }
`;

export const SkillBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
`;

export const Item = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 100%;
  background-color: #d9d9d9;
`;
