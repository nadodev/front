import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { primaryColor } from '../../config/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  h1 {
    margin-top: 20px;
  }
`;
export const Func = styled.div`
  background: #eee;
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 10px 10px 0 0;
  img {
    border-radius: 30px;
    width: 50px;
    height: 50px;
    margin: 0 20px;
    @media (max-width: 500px) {
      margin: 0;
    }
  }
  .Content {
    padding: 10px;
    width: 100%;
    display: flex;
    border-bottom: 1px dashed #1111;
    align-items: center;
    justify-content: space-between;
    align-content: flex-start;
    .imgContainer {
      width: 20%;
      @media (max-width: 500px) {
        width: 10%;
      }
    }
    .funcName {
      width: 20%;
      @media (max-width: 500px) {
        width: 10%;
      }
    }
    .conhecimentos {
      width: 20%;
      p {
        font-size: 12px;
        font-style: italic;
      }
      @media (max-width: 500px) {
        width: 10%;
      }
    }
    .status {
      width: 100px;
      .ativo {
        color: green;
        font-weight: bold;
      }
      .inativo {
        color: red;
        font-weight: bold;
      }
      svg {
        color: ${primaryColor};
        margin-left: 10px;
      }
      @media (max-width: 500px) {
        font-size: 13px;
        width: 50px;
      }
    }
  }
`;
export const Links = styled(Link)``;
