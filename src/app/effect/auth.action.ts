import { createAction, props } from '@ngrx/store';
import { User } from '../users-list/user';

export interface AuthCredentials {
  email: string;
  password: string;
}

export const login = createAction(
  '[Auth] Login',
  props<{ credentials: AuthCredentials }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: User }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: User }>()
);
