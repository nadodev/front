import styled from 'styled-components';

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
  }
  .Content {
    padding: 10px;
    width: 100%;
    display: flex;
    border-bottom: 1px dashed #1111;
    align-items: center;
    justify-content: space-between;
    align-content: space-between;
    .imgContainer {
      text-align: center;
      width: 20%;
      svg {
      }
    }
    .funcName {
      width: 20%;
    }
    .conhecimentos {
      width: 20%;
      p {
        font-size: 12px;
        font-style: italic;
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
    }
  }
`;
