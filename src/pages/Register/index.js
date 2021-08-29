/* eslint-disable import/no-duplicates */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';
import { useHistory } from 'react-router-dom';
import * as S from './styled';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';

export default function Registrar() {
  const history = useHistory();
  const [name, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [celular, setCelular] = useState('');
  const [conhecimentos, setConhecimentos] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    let formsErros = false;
    if (name.length < 3 || name.length > 100) {
      formsErros = true;
      toast.error('Nome deve ter entre 3 e 100 caracteres');
    } else if (password.length < 3 || password.length > 100) {
      toast.error('Senha deve ter entre 3 e 100 caracteres');
    } else if (!isEmail(email)) {
      toast.error('Email invalido');
    }
    if (formsErros) return;

    try {
      await axios.post('/func', {
        name,
        email,
        password,
        celular,
        cpf,
        conhecimentos,
      });

      toast.success('Seu cadastro foi efetuado com sucesso');
      history.push('/');
    } catch (error) {
      const errors = get(error, 'response.data.errors', []);
      errors.map((error) => toast.error(error));
    }
  }
  return (
    <Container>
      <S.Container>
        <h1>Formulario Para Cadastro</h1>
        <S.Form onSubmit={handleSubmit}>
          <div className="formControl">
            <label htmlFor="Nome">Nome </label>
            <input
              type="text"
              value={name}
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
            <label htmlFor="Senha">Senha </label>
            <input
              type="password"
              value={password}
              placeholder="senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="formControl">
            <label htmlFor="CPF">CPF </label>
            <InputMask
              type="text"
              mask="999.999.999-99"
              value={cpf}
              placeholder="CPF"
              onChange={(e) => setCpf(e.target.value)}
            />
          </div>
          <div className="formControl">
            <label htmlFor="Celular">Celular </label>
            <InputMask
              mask="(99)99999-9999"
              type="text"
              value={celular}
              placeholder="Celular"
              onChange={(e) => setCelular(e.target.value)}
            />
          </div>
          <div className="formControl">
            <label htmlFor="conhecimentos">Conhecimentos </label>
            <input
              type="text"
              value={conhecimentos}
              placeholder="Conhecimentos"
              onChange={(e) => setConhecimentos(e.target.value)}
            />
          </div>
          <button type="submit">Cadastrar</button>
        </S.Form>
      </S.Container>
    </Container>
  );
}
