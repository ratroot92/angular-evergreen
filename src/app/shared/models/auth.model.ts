export interface ILoginPayload {
  type: number | null;
  payload: string;
}

export interface IAuth {
  isAuthenticated: boolean;
  loginPayload: ILoginPayload;
}
