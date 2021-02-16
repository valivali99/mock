import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  subject: any = {
    name: "",
    cost: 0
  };

  currentSubject$ = new BehaviorSubject<any>(this.subject);

  constructor() { }

  setCurrentSubject(name: string, cost: number) {
    this.subject.name = name;
    this.subject.cost = cost;

    this.currentSubject$.next(this.subject);
  }

}
