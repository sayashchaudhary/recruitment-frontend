import { Store } from '@ngrx/store';
import { getIsLoading, getIsLoggedIn, RootState } from '../reducers';
import { combineLatest, Observable } from 'rxjs';
import { User } from '../models/user';
import { filter, map, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterFailed, RegisterSent, RegisterSuccess } from '../actions/app';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { environment } from '../../environments/environment';
import { Constants } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class AppMiddleware {

  private errorMessage = 'Something went wrong. Please try again.';
  private alreadyRegisteredMessage = 'You are already rgistered with same roll number or email id!';

  constructor(private store: Store<RootState>,
              private http: HttpClient,
              private router: Router,
              private snackbar: MatSnackBar) {
  }

  register(user: User) {
    const isLoggedIn$ = this.store.select(getIsLoggedIn);
    const isLoading$ = this.store.select(getIsLoading);
    const status$ = combineLatest(isLoading$, isLoggedIn$).pipe(
      take(1),
      map(([loading, loggedIn]) => loading || loggedIn),
      filter(status => !status));
    status$.subscribe(status => {
      this.store.dispatch(new RegisterSent());
      this.http.post(`${environment.baseUrl}/register`, user).subscribe
      ((res: any) => {
        if (res._id) {
          this.store.dispatch(new RegisterSuccess(res));
          localStorage.setItem(Constants.USER_ID, res._id);
          this.router.navigate(['/instruction']);
        } else {
          this.store.dispatch(new RegisterFailed());
          if (res.errors) {
            if (res.errors.email || res.errors.rollNo) {
              this.snackbar.open(this.alreadyRegisteredMessage);
              return;
            }
          }
          else {
            this.snackbar.open(this.errorMessage);
          }
        }
      });
    });
  }

  getIsLoading(): Observable<boolean> {
    return this.store.select(getIsLoading);
  }
}
