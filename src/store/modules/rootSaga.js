import { all } from 'redux-saga/effects';
import exemple from './exemple/sagas';

export default function* rootSaga() {
  return yield all([exemple]);
}
