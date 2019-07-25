import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { getIsQuestionsLoaded, getIsQuestionsLoading, RootState } from '../reducers';
import { combineLatest, throwError } from 'rxjs';
import { catchError, filter, map, switchMap, take } from 'rxjs/operators';
import { HttpService } from '../services/http.service';
import { Question } from '../models/question';
import { FetchQuestionsFailed, FetchQuestionsSuccess } from '../actions/questions';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class QuestionsMiddleware {
  constructor(private store: Store<RootState>,
              private httpService: HttpService,
              private router: Router) {

  }

  fetchQuestions() {
    let isQuestionsLoading$ = this.store.select(getIsQuestionsLoading);
    let isQuestionsLoaded$ = this.store.select(getIsQuestionsLoaded);
    combineLatest(isQuestionsLoaded$, isQuestionsLoading$).pipe(
      take(1),
      map(([isLoaded, isLoading]) => isLoaded || isLoading),
      filter(res => !res),
      switchMap(() => this.httpService.get('/questions')),
      catchError(err => throwError(err))
    ).subscribe((res: Question[]) => {
      if (res && res.length > 0) {
        this.router.navigate(['instructions']);
        this.store.dispatch(new FetchQuestionsSuccess(res));
      } else {
        this.store.dispatch(new FetchQuestionsFailed());
      }
    }, (err) => {
      console.log('[Error Questions]', err);
    });
  }

  getIsQuestionsLoading() {
    return this.store.select(getIsQuestionsLoading);
  }
}
