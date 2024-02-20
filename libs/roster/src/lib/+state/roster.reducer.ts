import { createFeature, createReducer, on } from '@ngrx/store';
import { RosterUser } from '../models/roster.model';
import { loadUsersSuccess } from './roster.actions';

export interface RosterState {
  users: RosterUser[];
}

export const initialState: RosterState = {
  users: [],
};

export const rosterReducer = createReducer(
  initialState,
  on(loadUsersSuccess, (state, { users }) => ({ ...state, users }))
);

export const rosterFeature = createFeature({
  name: 'roster',
  reducer: rosterReducer,
});
