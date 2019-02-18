import { Action } from './index';
import { User } from '../../shared/models/user';

export enum AppActions {
  REGISTER_SENT = '[App] register sent',
  REGISTER_SUCCESS = '[App] register success',
  REGISTER_FAILED = '[App] register failed',
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
