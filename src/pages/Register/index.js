import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import * as S from './styled';
import { Container } from '../../styles/GlobalStyles';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions';

export default function Registrar() {
  const dispath = useDispatch();

  const id = useSelector((state) => state.auth.user.id);
  const nomeUser = useSelector((state) => state.auth.user.nome);
  const emailUser = useSelector((state) => state.auth.user.email);
  const passwordUser = useSelector((state) => state.auth.user.password);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    let formsErros = false;

    if (nome.length < 3 || nome.length > 100) {
      formsErros = true;
      toast.error('Nome deve ter entre 3 e 100 caracteres');
    }
    if (!isEmail(email)) {
      toast.error('Email invalido');
    }

    if (!id && (password.length < 6 || password.length > 50)) {
      formsErros = true;
      toast.error('Senha deve ter entre 3 e 50 caracteres');
    }

    if (formsErros) return true;

    dispath(actions.registerRequest({ id, nome, email, password }));
  }

  useEffect(() => {
    if (!id) return;
    setNome(nomeUser);
    setEmail(emailUser);
    setPassword(passwordUser);
  }, [nomeUser, emailUser, passwordUser]);

  return (
    <Container>
      <S.Container>
        <Loading isLoading={isLoading} />
        <h1> {id ? 'Editar dados ' : 'Formulario Para Cadastro'}</h1>
        <S.Form onSubmit={handleSubmit}>
          <div className="formControl">
            <label htmlFor="Nome">Nome </label>
            <input
              type="text"
              value={nome}
              placeholder="Nome"
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
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
            <label htmlFor="Email">Senha </label>
            <input
              type="password"
              value={password}
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">{id ? 'Salvar' : 'Criar Conta'}</button>
        </S.Form>
      </S.Container>
    </Container>
  );
}
