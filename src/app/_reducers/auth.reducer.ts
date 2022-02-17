import { Actions } from '@ngrx/effects';
import { createReducer, on, State } from '@ngrx/store';
import { User } from '../modal/user';
import { login } from '../_actions/login.actions';
import { signup } from '../_actions/signup.actions';
export const initialState :User[] = [];

const _counterReducer = createReducer(
  initialState,
  on(signup, (state, { user }) => {
    return [user];
  })
);

export function authReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
