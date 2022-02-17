import { Actions } from '@ngrx/effects';
import { createReducer, on, State } from '@ngrx/store';
import { login } from '../_actions/login.actions';
import { signup } from '../_actions/signup.actions';
export const initialState = {
  email: '',
  password: '',
  firstname: '',
  lastname: '',
};

const _counterReducer = createReducer(
  initialState,
  // on(login, (state) => state + 1),
  on(signup, (state, { user }) => ({
    ...state,
    user,
  }))
);

export function authReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
