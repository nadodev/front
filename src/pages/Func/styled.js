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
    font-size: 20px;
    text-align: center;
    width: 400px;
    margin-bottom: 20px;
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
    input[type='checkbox'] {
      width: 50px;
      height: 20px;
      padding-left: 10px;
      margin: 10px 0 10px 0;
      border-radius: 10px;
      border: 1px solid #e1e1e1;
      background-color: #eee;
    }
    .formControl2 {
      background: #eee;
      padding: 0px 10px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
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
export const Profile = styled.div`
  min-height: 100px;

  img {
    width: 150px;
    border-radius: 100px;
  }
`;
