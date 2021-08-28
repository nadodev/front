import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as S from './styled';

export default function Header() {
  const botaoClicado = useSelector((state) => state.exemple.botaoClicado);
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
          {botaoClicado ? 'clicaod' : 'nao clicado'}
        </ul>
      </S.Nav>
    </>
  );
}
