import  { Action } from './index';
import { User } from '../models/user';
import { Member } from '../models/user';

export enum AppActions {
  REGISTER_SENT = '[App] register sent',
  REGISTER_SUCCESS = '[App] register success',
  REGISTER_FAILED = '[App] register failed',
  LOGIN_SENT = '[App] login sent',
  LOGIN_SUCCESS = '[App] login success',
  LOGIN_FAILED = '[App] login failed'
}

export class RegisterSent implements Action {
  readonly type = AppActions.REGISTER_SENT;
}

export class RegisterFailed implements Action {
  readonly type = AppActions.REGISTER_FAILED;
}

export class RegisterSuccess implements Action {
  readonly type = AppActions.REGISTER_SUCCESS;

  constructor(public payload: User) {
  }
}

export class LogInSent implements Action{
  readonly type = AppActions.LOGIN_SENT;
}

export class LogInFailed implements Action{
  readonly type = AppActions.LOGIN_FAILED;
}

export class LogInSuccess implements Action {
  readonly type = AppActions.LOGIN_SUCCESS;

  constructor(public payload: Member) {
  }
}

