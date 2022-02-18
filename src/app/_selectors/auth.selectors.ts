import { createSelector } from '@ngrx/store';

// const getError = (state: RootState): string => state.error;
const getData = (state:any): any => state.data;
// const getMapMode = (state: RootState): any => state.mode;

// const getStateError = createSelector(
//   (state: any) => state.rootState,
//   getError
// );

export const getUserData = createSelector(
  (state) => state,
  getData
);
