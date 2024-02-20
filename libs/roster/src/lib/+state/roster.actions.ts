import { createAction, props } from '@ngrx/store';
import { RosterUser } from '../models/roster.model';

export const loadUsers = createAction('[Roster] Load Users');
export const loadUsersSuccess = createAction(
  '[Roster] Load Users Success',
  props<{ users: RosterUser[] }>()
);
