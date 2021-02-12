import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-assembly',
  templateUrl: './assembly.component.html',
  styleUrls: ['./assembly.component.scss']
})
export class AssemblyComponent implements OnInit {

  @Input() assembly: any;
  hideComponents: boolean = false;
  hideSubassemblies: boolean = false;
  hideParts: boolean = false;
  hideSteps: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleExpansion() {
    this.hideComponents = !this.hideComponents;
  }

  toggleSubassemblies() {
    this.hideSubassemblies = !this.hideSubassemblies;
  }

  toggleParts() {
    this.hideParts = !this.hideParts;
  }

  toggleSteps() {
    this.hideSteps = !this.hideSteps;
  }
}
