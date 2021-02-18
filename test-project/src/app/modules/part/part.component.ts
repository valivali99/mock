import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatExpansionPanelHeader } from '@angular/material/expansion';
import { Data } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.scss']
})
export class PartComponent implements OnInit {

  @ViewChild("panelH", { static: false }) panelH: MatExpansionPanelHeader;
  @ViewChild("panelJ", { static: false }) panelJ: MatExpansionPanelHeader;
  @ViewChild("panelK", { static: false }) panelK: MatExpansionPanelHeader;
  @Input() part: any;
  toggleProcesses: string = "keyboard_arrow_right";
  toggleMaterials: string = "keyboard_arrow_right";
  toggleParts: string = "keyboard_arrow_right";

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  toggleMaterialsPanel() {
    this.panelJ._toggle();
    this.toggleMaterials = this.panelJ._isExpanded() ? "keyboard_arrow_down" : "keyboard_arrow_right";
  }

  togglePartsPanel() {
    this.panelH._toggle();
    this.toggleParts = this.panelH._isExpanded() ? "keyboard_arrow_down" : "keyboard_arrow_right";
  }

  toggleProcessesPanel() {
    this.panelK._toggle();
    this.toggleProcesses = this.panelK._isExpanded() ? "keyboard_arrow_down" : "keyboard_arrow_right";
  }

  getSelectedState(id: number, type: string) {
    return this.dataService.getSelectedState(id, type);
  }

  selectEntity(id: number, type: string) {
    this.dataService.selectSubject(id, type);
  }

}
