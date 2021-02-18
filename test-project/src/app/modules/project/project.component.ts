import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { MatExpansionPanelHeader } from '@angular/material/expansion';
import { MatMenuTrigger } from '@angular/material/menu';
import { OptionsService } from '../services/options.service'
import { CalculationService } from '../services/calculation.service'
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @ViewChild(MatMenuTrigger) contextMenu: MatMenuTrigger;
  @ViewChild("panelH", { static: false }) panelH: MatExpansionPanelHeader;
  toggleDirection: string = "keyboard_arrow_right";
  @Input() project: any;
  hideComponents: boolean = false;
  options: any;

  constructor(
    private optionsService: OptionsService,
    private calculationService: CalculationService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.removeContextMenu();
    this.initializeMenu();
  }

  togglePanel() {
    this.panelH._toggle();
    this.toggleDirection = this.panelH._isExpanded() ? "keyboard_arrow_down" : "keyboard_arrow_right";
  }

  calculateCost(entity: any) {
    this.calculationService.setCurrentSubject(entity.name, entity.cost);
    this.dataService.selectSubject(entity.id, entity.type);
  }

  onContextMenu(event: MouseEvent) {
    event.preventDefault();
    this.contextMenu.openMenu();
  }

  initializeMenu() {
    this.options = this.optionsService.getProjectMenuOptions();
  }

  removeContextMenu() {
    window.addEventListener("contextmenu", e => {
      e.preventDefault();
    });
  }

  getSelectedState(id: number, type: string) {
    return this.dataService.getSelectedState(id, type);
  }

}
