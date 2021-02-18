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

  selectSubject(id: number, type: string) {
    this.subject.id = id;
    this.subject.type = type;

    this.selectedSubject$.next(this.subject);
  }

  selectEntity(id: number, type: string) {
    this.selectSubject(id, type);
  }

  getSelectedState(id: number, type: string) {
    let currentSelectedSubject = this.selectedSubject$.value;

    if ((currentSelectedSubject.type === type) && (currentSelectedSubject.id === id)) {
      return "selected";
    }
    return "not-selected";
  }

}
