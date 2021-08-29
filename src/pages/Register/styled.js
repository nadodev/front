import styled from 'styled-components';
import { primaryColor, primaryDarkColor } from '../../config/colors';

export const Container = styled.div`
  color: ${primaryColor};
  margin-top: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    border-bottom: 1px solid #ccc;
    width: 400px;
    margin-bottom: 10px;
  }
`;
export const Form = styled.form`
  color: ${primaryColor};
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .formControl {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    label {
      display: block;
      position: relative;
    }
    input {
      width: 400px;
      height: 35px;
      padding-left: 10px;
      margin: 10px 0 10px 0;
      border-radius: 10px;
      border: 1px solid #e1e1e1;
      background-color: #eee;
    }
  }
  button {
    width: 200px;
    margin-top: 20px;
    color: white;
    transition: 0.5s;
    &:hover {
      background-color: ${primaryDarkColor};
    }
  }
`;
