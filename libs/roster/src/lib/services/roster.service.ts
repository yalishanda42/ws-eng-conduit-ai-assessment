import { Injectable } from '@angular/core';
import { RosterUser } from '../models/roster.model';
import { Observable, of } from 'rxjs';
import { ApiService } from '@realworld/core/http-client';

@Injectable({
  providedIn: 'root',
})
export class RosterService {
  constructor(private apiService: ApiService) {}

  getUsers(): Observable<RosterUser[]> {
    return this.apiService.get('/users');
  }
}
