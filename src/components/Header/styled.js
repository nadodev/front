import styled from 'styled-components';
import { primaryColor, primaryDarkColor } from '../../config/colors';

export const Container = styled.header`
  background-color: ${primaryColor};
  max-width: 100%;
  justify-content: space-around;
  align-items: center;
  display: flex;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Nav = styled.nav`
  margin: 0 30px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;

    li {
      margin-left: 10px;

      a {
        display: flex;
        color: white;
        font-family: sans-serif;
        transition: 0.3s;
        &:hover {
          color: ${primaryDarkColor};
        }
        svg {
          margin-right: 5px;
        }
      }
    }
  }

  @media (max-width: 500px) {
    max-width: 100%;
    li {
      a {
        font-size: 14px;
      }
    }
  }
`;

export const Logo = styled.div`
  margin: 0 30px;
  h1 {
    font-size: 30px;
  }
  @media (max-width: 500px) {
    margin-top: 20px;
    max-width: 100%;
    h1 {
      font-size: 20px;
    }
  }
`;
