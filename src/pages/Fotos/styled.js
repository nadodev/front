import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Container = styled.div`
  color: ${primaryColor};
  text-align: center;
`;
export const Form = styled.form`
  display: flex;
  justify-content: center;
  label {
    border-radius: 100px;
    width: 170px;
    height: 170px;
    display: flex;
    margin: 30px auto;
    cursor: pointer;
    border: 1px dashed ${primaryColor};
    justify-content: center;
    align-items: center;

    img {
      width: 165px;
      height: 165px;
      border-radius: 100px;
    }
  }
  input {
    display: none;
  }
`;
