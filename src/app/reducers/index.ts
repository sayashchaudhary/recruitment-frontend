import { _getIsLoading, _getIsLoggedIn, _getLoggedInUser, appReducer, AppState } from './app';
import { ActionReducerMap, createSelector } from '@ngrx/store';

export interface RootState {
  app: AppState;
}

export const appRootReducer:ActionReducerMap<RootState>= {
  app: appReducer,
};


export const getAppState = (state:RootState) => state.app;

export const getLoggedInUser = createSelector(
  getAppState,
  _getLoggedInUser
);

export const getIsLoading = createSelector(
  getAppState,
  _getIsLoading
);

export const getIsLoggedIn = createSelector(
  getAppState,
  _getIsLoggedIn
);
