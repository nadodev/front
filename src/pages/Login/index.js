import React from 'react';
import { useDispatch } from 'react-redux';
import * as S from './styled';
import { Container } from '../../styles/GlobalStyles';
import * as exempleActions from '../../store/modules/exemple/actions';

export default function Login() {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(exempleActions.clicaBotaoRequest());
  }
  return (
    <Container>
      <S.Container>
        <small>hellow</small>
        <button type="button" onClick={handleClick}>
          Login
        </button>
      </S.Container>
    </Container>
  );
}
