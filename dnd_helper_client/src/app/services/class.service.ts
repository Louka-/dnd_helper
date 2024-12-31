import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Class, ClassDetails } from '../models/class.model';

const API_CLASSES = 'http://localhost:3000/classes';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(
    private http: HttpClient
  ) { }

  getAllClasses(): Observable<Class[]> {
    return this.http.get<Class[]>(`${API_CLASSES}/all`);
  }

  getClassById(id: string): Observable<ClassDetails> {
    return this.http.get<ClassDetails>(`${API_CLASSES}/one/${id}`);
  }

}
