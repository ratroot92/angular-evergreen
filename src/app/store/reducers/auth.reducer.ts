import { IAuth } from 'src/app/shared/models/auth.model';
import * as AuthActions from '../actions/auth.actions';

const initialState: IAuth = {
  isAuthenticated: false,
  loginPayload: {
    type: null,
    payload: '',
  },
};

export function authReducer(state = initialState, action: AuthActions.Actions) {
  switch (action.type) {
    case AuthActions.SET_IS_AUTHENTICATED:
      return { ...state, isAuthenticated: action.payload };
    case AuthActions.SET_LOGIN_PAYLOAD:
      return { ...state, loginPayload: action.payload };
    default:
      return { ...state };
  }
}
