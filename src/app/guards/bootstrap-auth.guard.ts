import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Constants } from '../utils/constants';
import {Store} from '@ngrx/store';
import {getIsBootstrap, RootState} from '../reducers';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class BootstrapAuthGuard implements CanActivate {
  isBootstrap: boolean;
  constructor(private store: Store<RootState>,
              private router: Router,
  ) {
    const isBootstrap = this.store.select(getIsBootstrap);
    isBootstrap.subscribe((bootstrap => this.isBootstrap = bootstrap));
    }
    canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (!localStorage.getItem(Constants.AUTH_TOKEN)) {
        this.router.navigate(['/instruction']);
        return false;
      }
      return true;
    }
  }

