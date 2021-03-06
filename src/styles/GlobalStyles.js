import styled, { createGlobalStyle } from 'styled-components';
import { primaryColor, primaryDarkColor } from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}
body{
  background-color:${primaryDarkColor};
  font-family: 'Roboto', sans-serif;
}
a{text-decoration:none;}
ul{list-style:none;}
button{
  cursor:pointer;
  border: none;
  color:fff;
  background-color:${primaryColor};
  padding:8px 10px;
  border-radius:5px;
}
`;
export const Container = styled.section`
  max-width: 100%;
  width: 1150px;
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 50px auto;
`;
