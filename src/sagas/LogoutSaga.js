import { put, call } from 'redux-saga/effects';
import logoutActions from '../actions/LogoutAction';
import routeToPathAction from '../actions/RouteToPathAction';
import { callFetchApi } from '../services/api';
import { apiUrls } from '../utils/constants';

export default function* logoutSaga(action) {
  try {
    const response = yield call(callFetchApi, apiUrls.logout, {}, 'GET', action.payload);
    if (response.data !== undefined && response.status === 200) {
      yield put({
        type: routeToPathAction.ROUTE_TO_PATH,
        payload: { path: '/' },
      });
      yield put({
        type: logoutActions.LOGOUT_SUCCESS,
      });
    } else {
      yield put({
        type: logoutActions.LOGOUT_FAILURE,
        response: 'Unauthorized',
      });
    }
  } catch (e) {
    yield put({
      type: logoutActions.LOGOUT_FAILURE,
      response: 'Unauthorized',
    });
  }
}
