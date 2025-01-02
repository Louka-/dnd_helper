import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Race, RaceDetails } from '../models/race.model';

const API_RACES = 'http://localhost:3000/races';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  constructor(
    private http: HttpClient
  ) { }

  getAllRaces(): Observable<Race[]> {
    return this.http.get<Race[]>(`${API_RACES}/all`);
  }

  getRaceById(id: string): Observable<RaceDetails> {
    return this.http.get<RaceDetails>(`${API_RACES}/one/${id}`);
  }

}
