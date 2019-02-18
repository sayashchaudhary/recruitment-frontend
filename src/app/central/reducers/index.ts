import { _getIsLoading, _getIsLoggedIn, _getLoggedInUser, appReducer, AppState } from './app';
import { RootState } from '../../root-reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State {
  app: AppState;
}

export interface AppRootState extends RootState {
  app: AppState;
}

export const appRootReducer = {
  app: appReducer,
};

export const getAppRootState = createFeatureSelector<State>('app');

export const getAppState = createSelector(
  getAppRootState,
  (state) => state.app
);

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
