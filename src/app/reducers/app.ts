import { Member, User } from '../models/user';
import { Action } from '../actions';
import { AppActions } from '../actions/app';

export interface AppState {
  loggedInUser: User;
  isLoggedIn: boolean;
  loading: boolean;
}

export const initialState: AppState = {
  loggedInUser: null,
  isLoggedIn: false,
  loading: false,
};

export function appReducer(state: AppState = initialState, action: Action) {

  switch (action.type) {
    case AppActions.REGISTER_SENT:
      return {
        ...state,
        loading: true
      };
    case AppActions.REGISTER_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        loading: false
      };
    case AppActions.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        loggedInUser: action.payload
      };
    case AppActions.LOGIN_SENT:
      return {
        ...state,
        loading: true
      };
    case AppActions.LOGIN_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        loading: false
      };
    case AppActions.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        loggedInUser: action.payload
      };
    default: {
      return state;
    }
  }
}

export const _getLoggedInUser = (state: AppState) => state.loggedInUser;
export const _getIsLoading = (state: AppState) => state.loading;
export const _getIsLoggedIn = (state: AppState) => state.isLoggedIn;

