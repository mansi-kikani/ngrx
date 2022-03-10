import { User } from '../../models/user';
import { createAction, props } from '@ngrx/store';
export const LOGIN = '[auth page] Auth login';
export const LOGIN_SUCCESS = '[auth page] login Success';
export const LOGIN_FAIL = '[auth page] login Fail';

export const SIGNUP = '[auth page] Auth signup';
export const SIGNUP_SUCCESS = '[auth page] signup success';
export const AUTO_LOGIN_ACTION = '[auth page] auto login';
export const LOGOUT_ACTION = '[auth page] logout';

export const login = createAction(
  LOGIN,
  props<{ email: string; password: string }>()
);
export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ user: User; redirect: boolean }>()
);

export const signup = createAction(
  SIGNUP,
  props<{ email: string; password: string }>()
);

export const signupSuccess = createAction(
  SIGNUP_SUCCESS,
  props<{ user: User; redirect: boolean }>()
);

export const autoLogin = createAction(AUTO_LOGIN_ACTION);

export const autoLogout = createAction(LOGOUT_ACTION);
