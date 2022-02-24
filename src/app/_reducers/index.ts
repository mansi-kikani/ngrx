import { bookReducer, BookState } from './user.reducer';
import { authReducer, AuthState } from './auth.reducer';

import { MetaReducer } from '@ngrx/store';
const reducers = {
  book: bookReducer,
  auth: authReducer,
};

interface AppState {
  book: BookState;
  auth: AuthState;
}

export { reducers, AppState };

export const metaReducers: MetaReducer<AppState>[] =  [];
