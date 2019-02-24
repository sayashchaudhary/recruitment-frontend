import { Store } from '@ngrx/store';
import { getIsLoading, getIsLoggedIn, RootState } from '../reducers';
import { combineLatest, Observable } from 'rxjs';
import { User } from '../models/user';
import { filter, map, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppMiddleware {
  constructor(private store: Store<RootState>) {
  }

  register(user: User) {
    const isLoggedIn$ = this.store.select(getIsLoggedIn);
    const isLoading$ = this.store.select(getIsLoading);
    const status$ = combineLatest(isLoading$, isLoggedIn$).pipe(
      take(1),
      map(([loading, loggedIn]) => loading || loggedIn,),
      filter(status => !status));
    status$.subscribe(status => {
      // TODO: Api call to register the user on backend!!!
    });
  }

  getIsLoading(): Observable<boolean> {
    return this.store.select(getIsLoading);
  }
}
