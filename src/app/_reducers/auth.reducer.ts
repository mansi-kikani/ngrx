import { createReducer, on, State } from '@ngrx/store';
import { User } from '../modal/user';
import { login } from '../_actions/login.actions';
import { signup } from '../_actions/signup.actions';
export const initialState :User[] = [];

const _authReducer = createReducer(
  initialState,
  on(signup, (state, { user }) => {
    return [user];
  }),
  on(login, (state, { user }) => {
    console.log(`user`, user)
    return [user];
  })
);

export function authReducer(state: any, action: any) {
  return _authReducer(state, action);
}
