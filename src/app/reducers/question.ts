import { Action } from '../actions';
import { Question } from '../models/question';
import { QuestionActions } from '../actions/questions';

export interface QuestionState {
  questions: Question[];
  isQuestionsLoading: boolean;
  isQuestionsLoaded: boolean;
}

export const initialState: QuestionState = {
  questions: null,
  isQuestionsLoaded: false,
  isQuestionsLoading: false
};

export function questionsReducer(state: QuestionState = initialState, action: Action) {

  switch (action.type) {
    case QuestionActions.FETCH_QUESTIONS:
      return {
        ...state,
        isQuestionsLoading: true
      };
    case QuestionActions.FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        isQuestionsLoaded: true,
        isQuestionsLoading: false
      };
    case QuestionActions.FETCH_QUESTIONS_FAILED:
      return {
        ...state,
        isQuestionsLoading: false
      };
  }
}

export const _getQuestions = (state: QuestionState) => state.questions;
export const _getIsQuestionsLoading = (state: QuestionState) => state.isQuestionsLoading;
export const _getIsQuestionsLoaded = (state: QuestionState) => state.isQuestionsLoaded;
