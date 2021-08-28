import React from 'react';
import * as S from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Registrar() {
  return (
    <Container>
      <S.Container>
        <small>Registrar</small>
        <button type="button">Cadastrar</button>
      </S.Container>
    </Container>
  );
}
