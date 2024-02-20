import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadUsers } from './+state/roster.actions';
import { RosterUser } from './models/roster.model';
import { selectUsers } from './+state/roster.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'realworld-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class RosterComponent implements OnInit {
  users$ = this.store.select(selectUsers);

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadUsers());
  }
}
