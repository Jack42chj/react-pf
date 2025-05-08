import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 144px;
  margin-top: 10px;

  @media (max-width: 1025px) {
    margin-top: 0px;
  }

  @media (max-width: 481px) {
    display: none;
  }
`;

export const ItemImg = styled.div`
  cursor: pointer;

  @media (max-width: 1025px) {
    img {
      width: auto;
      height: 96px;
    }
  }

  @media (max-width: 691px) {
    img {
      width: auto;
      height: 72px;
    }
  }
`;

export const NavItem = styled.div`
  min-width: 128px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #acccee;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: #e4b783;
  }

  @media (max-width: 1025px) {
    font-size: 0.9rem;
  }

  @media (max-width: 691px) {
    min-width: 64px;
    font-size: 0.7rem;
  }
`;
