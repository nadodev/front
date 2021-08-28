import styled from 'styled-components';
import { primaryColor, primaryDarkColor } from '../../config/colors';

export const Nav = styled.nav`
  background-color: ${primaryColor};
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
`;
