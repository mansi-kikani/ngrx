import { Action, createReducer, on } from '@ngrx/store';
import { setLoadingSpinner, setErrorMessage } from './shared.actions';
import { initialState } from '../shared/shared.state';
export const sharedFeatureKey = 'shared';

export const sharedReducer = createReducer(
  initialState,

  on(setLoadingSpinner, (state, action) => {
    return {
      ...state,
      showLoading: action.status,
    }
  }),
  on(setErrorMessage, (state, action) => {
    return {
      ...state,
      errorMessage: action.message
    }
  })

);
