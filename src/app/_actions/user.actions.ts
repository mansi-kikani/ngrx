import { createAction, props } from '@ngrx/store';
import { UserData } from '../modal/user';

// export const login = createAction(
//   '[Login Page] Login',
//   props<{ user: User }>()
// );
export const userData = createAction(
  '[User Page] Success',
  props<{ users: UserData[] }>()
);
