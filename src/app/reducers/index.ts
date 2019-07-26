import { _getIsLoading, _getIsLoggedIn, _getLoggedInUser, appReducer, AppState } from './app';
import { ActionReducerMap, createSelector } from '@ngrx/store';
import { _getQuestions, _getIsQuestionsLoaded, _getIsQuestionsLoading, questionsReducer, QuestionState } from './question';

export interface RootState {
  app: AppState;
  questions: QuestionState;
}

export const appRootReducer: ActionReducerMap<RootState> = {
  app: appReducer,
  questions: questionsReducer
};


export const getAppState = (state: RootState) => state.app;
export const getQuestionState = (state: RootState) => state.questions;

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

export const getQuestions = createSelector(
  getQuestionState,
  _getQuestions
);

export const getIsQuestionsLoaded = createSelector(
  getQuestionState,
  _getIsQuestionsLoaded
);

export const getIsQuestionsLoading = createSelector(
  getQuestionState,
  _getIsQuestionsLoading
);
