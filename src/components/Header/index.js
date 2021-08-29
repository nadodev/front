import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import * as S from './styled';

export default function Header() {
  return (
    <S.Container>
      <S.Logo>
        <h1> LOGO</h1>
      </S.Logo>
      <S.Nav>
        <ul>
          <li>
            <Link to="/">
              <FaAngleRight />
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/register">
              <FaAngleRight />
              Cadastrar
            </Link>
          </li>
          <li>
            <Link to="/funcionarios">
              <FaAngleRight />
              Funcionarios
            </Link>
          </li>
        </ul>
      </S.Nav>
    </S.Container>
  );
}
