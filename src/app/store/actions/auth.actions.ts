import { Action } from '@ngrx/store';
import { IAuth, ILoginPayload } from 'src/app/shared/models/auth.model';

export const SET_IS_AUTHENTICATED = '[AUTH] SET_IS_AUTHENTICATED';
export const SET_LOGIN_PAYLOAD = '[AUTH] SET_LOGIN_PAYLOAD';

export class SetIsAuthenticated implements Action {
  readonly type = SET_IS_AUTHENTICATED;
  constructor(public payload: boolean) {}
}

export class SetLoginPayload implements Action {
  readonly type = SET_LOGIN_PAYLOAD;
  constructor(public payload: ILoginPayload) {}
}

export type Actions = SetIsAuthenticated | SetLoginPayload;
