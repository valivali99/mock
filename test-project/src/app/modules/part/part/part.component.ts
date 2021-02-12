import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.scss']
})
export class PartComponent implements OnInit {

  @Input() part: any;
  hideComponents: boolean = false;
  hideMaterials: boolean = false;
  hideSteps: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleExpansion() {
    this.hideComponents = !this.hideComponents;
  }

  toggleMaterials() {
    this.hideMaterials = !this.hideMaterials;
  }

  toggleSteps() {
    this.hideSteps = !this.hideSteps;
  }

}
