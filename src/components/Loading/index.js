import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function Loading({ isLoading }) {
  if (!isLoading) return <></>;
  return (
    <S.Container>
      <div />
      <span>Carregando...</span>
    </S.Container>
  );
}
Loading.defaultProps = {
  isLoading: false,
};
Loading.propTypes = {
  isLoading: PropTypes.bool,
};
