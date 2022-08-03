import { IAuth } from '../shared/models/auth.model';

export interface AppState {
  readonly auth: IAuth;
}
