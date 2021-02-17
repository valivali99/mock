import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string = "http://localhost:3000/api/courses";

  subject: any = {
    id: 0,
    type: ""
  };

  selectedSubject$ = new BehaviorSubject<any>(this.subject);

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<any>(this.url);
  }

  selectSubject(subject: any) {
    this.subject = subject.id;
    this.subject = subject.type;

    this.selectedSubject$.next(this.subject);
  }
}
