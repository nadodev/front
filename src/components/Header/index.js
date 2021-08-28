import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import * as S from './styled';

export default function Header() {
  return (
    <>
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
        </ul>
      </S.Nav>
    </>
  );
}
