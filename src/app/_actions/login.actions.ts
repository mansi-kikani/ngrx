import { createAction, props } from '@ngrx/store';
import { User } from '../modal/user';

export const login = createAction(
  '[Login Page] Login',
  props<{ payload: User[] }>()
);
