import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadUsers, loadUsersSuccess } from './roster.actions';
import { RosterService } from '../services/roster.service';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class RosterEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      switchMap(() => this.rosterService.getUsers()),
      map(users => loadUsersSuccess({ users }))
    )
  );

  constructor(
    private actions$: Actions,
    private rosterService: RosterService
  ) {}
}
