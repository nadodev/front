/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import * as actions from './actions';
import axios from '../../../services/axios';
import * as types from '../types';
import history from '../../../services/history';

// eslint-disable-next-line require-yield
function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/tokens', payload);
    yield put(actions.loginSuccess({ ...response.data }));
    toast.success('Login efetuado com sucesso');

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    history.push(payload.prevPath);
  } catch (e) {
    toast.error('Usuario ou senha invalida');
    yield put(actions.loginFailure());
  }
}
function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}
function* registerRequest({ payload }) {
  const { id, nome, email, password } = payload;

  try {
    if (id) {
      yield call(axios.put, '/editar', {
        email,
        nome,
        password: password || undefined,
      });
      toast.success('Conta alterada com sucesso');
      yield put(actions.registerUpdateSuccess({ nome, email, password }));
    } else {
      yield call(axios.post, '/user', {
        email,
        nome,
        password,
      });
      toast.success('Conta Criada com sucesso');
      yield put(actions.registerCreateSuccess({ nome, email, password }));
      history.push('/funcionarios');
    }
  } catch (err) {
    const errors = get(err, 'response.data.errors', []);
    const status = get(err, 'response.status', 0);

    if (status === 401) {
      toast.error('VOce precisa fazer login novamente');
      yield put(actions.loginFailure());
      return history.push(payload.prevPath);
    }
    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('erro desconhecido');
    }
    return yield put(actions.registerFailure());
  }
}
export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
