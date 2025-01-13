import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subrace } from '../models/subrace.model';

const API_SUBRACES = 'http://localhost:3000/subraces';

@Injectable({
  providedIn: 'root'
})
export class SubraceService {

  constructor(
    private http: HttpClient
  ) { }

  getSubraceById(id: string): Observable<Subrace> {
    return this.http.get<Subrace>(`${API_SUBRACES}/one/${id}`);
  }

}
