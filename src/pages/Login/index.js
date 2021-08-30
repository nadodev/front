import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/modules/auth/actions';
import Loading from '../../components/Loading';

import * as S from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Login(props) {
  const history = useHistory();
  const dispath = useDispatch();

  const prevPath = get(props, 'location.state.prevPath', '/funcionarios');
  const isLoading = useSelector((state) => state.auth.isLoading);
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const formsErros = false;

    if (password.length < 3 || password.length > 100) {
      toast.error('Senha deve ter entre 3 e 100 caracteres');
    } else if (!isEmail(email)) {
      toast.error('Email invalido');
    }

    if (formsErros) return;
    history.push('/funcionarios');
    dispath(actions.loginRequest({ email, password, prevPath }));
  }
  return (
    <Container>
      <S.Container>
        <Loading isLoading={isLoading} />
        <h1>Formulario Para Login</h1>
        <S.Form onSubmit={handleSubmit}>
          <div className="formControl">
            <label htmlFor="Email">Email </label>
            <input
              type="email"
              value={email}
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="formControl">
            <label htmlFor="Senha">Senha </label>
            <input
              type="password"
              value={password}
              placeholder="senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Entrar</button>
        </S.Form>
      </S.Container>
    </Container>
  );
}
