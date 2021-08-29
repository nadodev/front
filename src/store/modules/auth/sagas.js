/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';
import { get } from 'lodash';
import * as actions from './actions';
import axios from '../../../services/axios';
import * as types from '../types';

// eslint-disable-next-line require-yield
function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/tokens', payload);
    yield put(actions.loginSuccess({ ...response.data }));
    toast.success('Login efetuado com sucesso');
    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    <Redirect to="/funcionarios" />;
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
export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
