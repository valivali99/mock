import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatExpansionPanelHeader } from '@angular/material/expansion';
import { CalculationService } from '../../services/calculation.service';

@Component({
  selector: 'app-assembly',
  templateUrl: './assembly.component.html',
  styleUrls: ['./assembly.component.scss']
})
export class AssemblyComponent implements OnInit {

  @ViewChild("panelH", { static: false }) panelH: MatExpansionPanelHeader;
  @ViewChild("panelJ", { static: false }) panelJ: MatExpansionPanelHeader;
  @ViewChild("panelK", { static: false }) panelK: MatExpansionPanelHeader;
  @ViewChild("panelL", { static: false }) panelL: MatExpansionPanelHeader;
  toggleSubassemblies: string = "keyboard_arrow_right";
  toggleAssemblies: string = "keyboard_arrow_right";
  toggleParts: string = "keyboard_arrow_right";
  toggleProcesses: string = "keyboard_arrow_right";
  @Input() assembly: any;

  constructor(private calculationService: CalculationService) { }

  ngOnInit(): void {
  }

  toggleSubassembliesPanel() {
    this.panelH._toggle();
    this.toggleSubassemblies = this.panelH._isExpanded() ? "keyboard_arrow_down" : "keyboard_arrow_right";
  }

  togglePartsPanel() {
    this.panelJ._toggle();
    this.toggleParts = this.panelJ._isExpanded() ? "keyboard_arrow_down" : "keyboard_arrow_right";
  }

  toggleProcessesPanel() {
    this.panelK._toggle();
    this.toggleProcesses = this.panelK._isExpanded() ? "keyboard_arrow_down" : "keyboard_arrow_right";
  }

  toggleAssembliesPanel() {
    this.panelL._toggle();
    this.toggleAssemblies = this.panelL._isExpanded() ? "keyboard_arrow_down" : "keyboard_arrow_right";
  }

  calculateCost() {
    this.calculationService.setCurrentSubject(this.assembly.name, this.assembly.cost);
  }

}
