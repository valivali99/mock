import { Component, OnInit } from '@angular/core';
import { CalculationService } from '../services/calculation.service';

@Component({
  selector: 'app-display-calculation',
  templateUrl: './display-calculation.component.html',
  styleUrls: ['./display-calculation.component.scss']
})
export class DisplayCalculationComponent implements OnInit {

  subject: any;

  constructor(private calculationService: CalculationService) { }

  ngOnInit(): void {
    this.subject = this.calculationService.currentSubject$.value;
  }

}
