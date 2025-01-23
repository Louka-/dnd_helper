import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Background, BackgroundDetails } from '../models/background.model';

const API_BACKGROUND = 'http://localhost:3000/backgrounds';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {

  constructor(
    private http: HttpClient
  ) { }

  getAllBackgrounds(): Observable<Background[]> {
    return this.http.get<Background[]>(`${API_BACKGROUND}/all`);
  }

  getBackgroundById(id: string): Observable<BackgroundDetails> {
    return this.http.get<BackgroundDetails>(`${API_BACKGROUND}/one/${id}`);
  }

}
