import { createReducer, on } from '@ngrx/store';
import { login, logout } from './actions';

export const initialAthenticationStatus = false;

export const authenticateReducer = createReducer(
  initialAthenticationStatus,
  on(login, () => true),
  on(logout, () => false)
);
