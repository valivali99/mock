import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartsService {

  urlApi = "http://localhost:3000/api/parts"

  constructor(
    private http: HttpClient,
  ) { }

  getTaskById(partId: number): Observable<any> {
    return this.http.get<any>(`${this.urlApi}/${partId}`);
  }
}