import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatExpansionPanelHeader } from '@angular/material/expansion';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @ViewChild("panelH", { static: false }) panelH: MatExpansionPanelHeader;
  toggleDirection: string = "keyboard_arrow_right";
  @Input() project: any;
  hideComponents: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  togglePanel() {
    this.panelH._toggle();
    this.toggleDirection = this.panelH._isExpanded() ? "keyboard_arrow_down" : "keyboard_arrow_right";
  }

}
