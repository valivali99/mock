import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { MatExpansionPanel, MatExpansionPanelHeader } from '@angular/material/expansion';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {

  @ViewChild("panelH", {static:false}) panelH: MatExpansionPanelHeader;
  toggleDirection: string = "keyboard_arrow_right";
  projects: any;
  hideComponents: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.dataService.getData().subscribe((data: any) => {
      this.projects = data
    });
  }

  togglePanel() {
    this.panelH._toggle();
    this.toggleDirection = this.panelH._isExpanded() ? "keyboard_arrow_down" : "keyboard_arrow_right";
  }

}
