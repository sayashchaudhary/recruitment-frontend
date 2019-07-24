import { Question } from '../models/user';
import { Action } from '../actions';
import { AppActions } from '../actions/app';

export interface AppState {
  _getQuestions: Question[];
}

export const initialState: AppState = {
  _getQuestions : null,
};

export function appReducer(state: AppState = initialState, action: Action) {

  switch (action.type) {
    case AppActions._getQUESTIONS:
      return {
        ...state,
        _getQuestions: action.payload,
        isLoading: false
      };
  }
}
export const _getQuestions = (state: AppState) => state._getQuestions;
