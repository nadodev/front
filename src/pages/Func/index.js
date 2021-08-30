import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';
import { Link, useHistory } from 'react-router-dom';
import { FaEdit, FaUserCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';
import axios from '../../services/axios';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions';

import * as S from './styled';
import { Container } from '../../styles/GlobalStyles';
import { primaryColor } from '../../config/colors';

export default function Func({ match }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispath = useDispatch();

  const id = get(match, 'params.id', 0);
  const history = useHistory();
  const [name, setNome] = useState('');
  const [status, setStatus] = useState(false);
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [celular, setCelular] = useState('');
  const [conhecimentos, setConhecimentos] = useState('');
  const [photo, setPhoto] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const options = [{ value: 'ativo', label: 'ativo' }];
  async function handleSubmit(e) {
    e.preventDefault();
    let formsErros = false;

    if (name.length < 3 || name.length > 100) {
      formsErros = true;
      toast.error('Nome deve ter entre 3 e 100 caracteres');
    } else if (!isEmail(email)) {
      toast.error('Email invalido');
    }

    if (formsErros) return;
    setIsLoading(true);
    try {
      if (id) {
        await axios.put(`/func/update/${id}`, {
          name,
          email,
          celular,
          status,
          cpf,
          conhecimentos,
        });

        toast.success('Funcionario Editado com sucesso');

        setIsLoading(false);
      } else {
        await axios.post(`/func/`, {
          name,
          email,
          celular,
          status,
          cpf,
          conhecimentos,
        });

        toast.success('Funcionario Cadsatrado com sucesso');
        history.push(`/func/${id}/edit`);
      }
    } catch (error) {
      const status = get(error, 'response.status', 0);
      const data = get(error, 'response.data', {});
      const errors = get(data, 'errors', []);

      if (errors.length > 0) {
        errors.map((error) => toast.error(error));
        setIsLoading(false);
      } else {
        toast.error('erro desconhecido');
      }

      if (status === 401) {
        dispath(actions.loginFailure());
      }
    }
  }
  useEffect(() => {
    if (!id) return;
    async function getData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/func/${id}/edit`);
        const Photo = get(data, 'Photos[0].url', '');
        setPhoto(Photo);
        setNome(data.name);
        setEmail(data.email);
        setStatus(data.status);
        setCpf(data.cpf);
        setCelular(data.celular);
        setConhecimentos(data.conhecimentos);

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        const status = get(error, 'response.status', 0);
        const errors = get(error, 'response.data.errors', []);

        if (status === 400) errors.map((error) => toast.error(error));
        history.push('/');
      }
    }
    getData();
  }, [id]);
  return (
    <Container>
      <Loading isLoading={isLoading} />
      <S.Container>
        <h1>{id ? 'Editar Funcionario' : 'Cadastrar Funcionario'}</h1>

        {id && (
          <S.Profile>
            {photo ? (
              <img src={photo} alt={name} />
            ) : (
              <FaUserCircle size="100" />
            )}
            <Link to={`/fotos/${id}`}>
              <FaEdit size="20" color={primaryColor} />
            </Link>
          </S.Profile>
        )}

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
          {isLoggedIn ? (
            <div className="formControl">
              <div className="formControl2">
                <label htmlFor="conhecimentos">Status </label>
                <input
                  type="checkbox"
                  checked={status}
                  onChange={(e) => setStatus(!status)}
                />
                {status ? 'ativo' : 'inativo'}
              </div>
            </div>
          ) : (
            ''
          )}

          <button type="submit"> {id ? 'Editar' : 'Cadastrar'}</button>
        </S.Form>
      </S.Container>
    </Container>
  );
}
Func.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
