import { Route } from '@angular/router';
import { RosterComponent } from './roster.component';
import { provideState } from '@ngrx/store';
import { rosterFeature } from './+state/roster.reducer';
import { provideEffects } from '@ngrx/effects';
import { RosterEffects } from './+state/roster.effects';

export const ROSTER_ROUTES: Route[] = [
  {
    path: '',
    component: RosterComponent,
    providers: [provideState(rosterFeature), provideEffects(RosterEffects)],
  },
];
