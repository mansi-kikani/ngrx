import { User } from '../modal/user';
import { createAction, props } from '@ngrx/store';

export const signup = createAction(
  '[Signup Page] Signup',
  props<{ user: User }>()
);
export const invokeSignupAPI = createAction('[Signup Page] Invoke Signup');
export const SignupError = createAction('[Signup Page] Error', props<{ error: any }>());
export const SignupSuccess = createAction('[Signup Page] Success', props<{ data: any }>());