import { User } from '../modal/user';
import { createAction, props } from '@ngrx/store';

export const signup = createAction(
  '[Signup Page] Signup',
  props<{ user: User }>()
);
