import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string = "http://localhost:3000/api/courses";

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<any>(this.url);
  }
}
