import { AUTH_STATE_NAME } from '../auth/state/auth.selectors';
import { SHARED_STATE_NAME } from '../shared/shared.selectors';
import { authReducer } from '../auth/state/auth.reducer';
import { AuthState } from '../auth/state/auth.state';
import { SharedState } from '../shared/shared.state';
import { sharedReducer } from '../shared/shared.reducer';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

export interface AppState {
    [AUTH_STATE_NAME]: AuthState;
    [SHARED_STATE_NAME]: SharedState;
    router: RouterReducerState;
}

export const appReducer = {
    [AUTH_STATE_NAME]: authReducer,
    [SHARED_STATE_NAME]: sharedReducer,
    router: routerReducer
};
