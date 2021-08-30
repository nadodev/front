import React from 'react';
import { FaAngleRight, FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as S from './styled';
import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';

export default function Header() {
  const dispath = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const handleClickLogout = (e) => {
    e.preventDefault();
    dispath(actions.loginFailure());
    history.push('/');
  };

  return (
    <S.Container>
      <S.Logo>
        <h1> Manga Rosa</h1>
      </S.Logo>
      <S.Nav>
        <ul>
          <li>
            <Link to="/">
              <FaAngleRight />
              Inicio
            </Link>
          </li>
          {isLoggedIn ? (
            <>
              <li>
                <Link to="/Funcionarios">
                  <FaAngleRight />
                  Funcionarios
                </Link>
              </li>
              <li>
                <Link onClick={handleClickLogout} to="/login">
                  <FaSignInAlt />
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/func">
                  <FaAngleRight />
                  Cadastrar
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <FaAngleRight />
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </S.Nav>
    </S.Container>
  );
}
