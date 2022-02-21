import { createSelector } from '@ngrx/store';

// const getError = (state: RootState): string => state.error;
const getUsersData = (state: any): any => {
  console.log(`state`, state);
  state.users;
};
// const getMapMode = (state: RootState): any => state.mode;

// const getStateError = createSelector(
//   (state: any) => state.rootState,
//   getError
// );

export const getUserData = createSelector((state) => state, getUsersData);
