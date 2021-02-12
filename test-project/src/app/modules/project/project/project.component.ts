import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() project: any;
  hideComponents: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleExpansion() {
    this.hideComponents = !this.hideComponents;
  }
}
