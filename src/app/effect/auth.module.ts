import { provideEffects } from '@ngrx/effects';
import { AuthEffects } from './auth.effect';

export const appConfig = [
  provideEffects(AuthEffects)
];
