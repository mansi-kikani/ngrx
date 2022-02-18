import { User } from '../modal/user';
import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Login Page] Login',
  props<{ user: User }>()
);
export const invokeLoginAPI = createAction('[Login Page] Invoke Login');
export const LoginError = createAction('[Login Page] Error', props<{ error: any }>());
export const LoginSuccess = createAction('[Login Page] Success', props<{ data: any }>());