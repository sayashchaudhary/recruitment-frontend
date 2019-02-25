import { Store } from '@ngrx/store';
import { getIsLoading, getIsLoggedIn, RootState } from '../reducers';
import { combineLatest, Observable } from 'rxjs';
import { User } from '../models/user';
import { filter, map, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterSent, RegisterSuccess } from '../actions/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppMiddleware {
  constructor(private store: Store<RootState>, private http: HttpClient, private router: Router) {
  }

  register(user: User) {
    console.log('[USER]', user);
    const isLoggedIn$ = this.store.select(getIsLoggedIn);
    const isLoading$ = this.store.select(getIsLoading);
    const status$ = combineLatest(isLoading$, isLoggedIn$).pipe(
      take(1),
      map(([loading, loggedIn]) => loading || loggedIn,),
      filter(status => !status));
    status$.subscribe(status => {
      this.store.dispatch(new RegisterSent());
      // const fd = new FormData();
      // fd.append('user',user);

      this.http.post('https://stark-fortress-71838.herokuapp.com/register', user).subscribe
      ((res:User) => {
        console.log('[response]', res);
        this.store.dispatch(new RegisterSuccess(res));
        this.router.navigate(['/instruction']);

      });
    });
  }

  getIsLoading(): Observable<boolean> {
    return this.store.select(getIsLoading);
  }
}
