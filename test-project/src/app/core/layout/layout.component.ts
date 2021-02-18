import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { PartsService } from '../services/parts.service';
import { ComponentCanDeactivate } from '../models/component-can-deactivate';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, ComponentCanDeactivate {
  part: any;
  partForm: FormGroup;
  buttonVisibility: boolean = false;
  undoParts: any[] = [];
  undoTabsIndex: number[] = [0];
  selectedIndex: number = 0;
  pageIndex: number = 2;

  constructor(
    private partsService: PartsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let partId = +this.route.snapshot.paramMap.get("id");
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        console.log(this.router.url);
      }

      if (event instanceof NavigationEnd) {
        console.log(1);
      }
    });
    this.partsService.getTaskById(partId).subscribe(data => {
      this.part = data;
      this.undoParts.push(this.part);
      this.createFormGroup();
    });
  }

  test() {
    this.router.navigate(["/parts/2"]);
  }

  @HostListener('window:beforeunload')

  canDeactivate(): boolean {
    return (this.part.name === this.partForm.value.partName &&
      this.part.number === parseInt(this.partForm.value.partNumber) &&
      this.part.version === this.partForm.value.partVersion &&
      this.part.description === this.partForm.value.partDescription &&
      this.part.manufacturer.name === this.partForm.value.manufacturerName &&
      this.part.manufacturer.description === this.partForm.value.manufacturerDescription &&
      this.part.settings.purchasePrice === parseInt(this.partForm.value.settingsPurchasePrice) &&
      this.part.settings.targetPrice === parseInt(this.partForm.value.settingsTargetPrice)
      ) ? true : false;
  }

  createFormGroup() {
    this.partForm = new FormGroup({
      partName: new FormControl(this.part.name),
      partNumber: new FormControl(this.part.number),
      partVersion: new FormControl(this.part.version),
      partDescription: new FormControl(this.part.description),
      manufacturerName: new FormControl(this.part.manufacturer.name),
      manufacturerDescription: new FormControl(this.part.manufacturer.description),
      settingsPurchasePrice: new FormControl(this.part.settings.purchasePrice),
      settingsTargetPrice: new FormControl(this.part.settings.targetPrice),
    });
  }

  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.selectedIndex = tabChangeEvent.index;
  }

  enableUndoButton() {
    this.buttonVisibility = true;
  }

  disableUndoButton() {
    this.buttonVisibility = false;
  }

  addNewUndoEntity() {
    const newPart = {
      name: this.partForm.value.partName,
      number: this.partForm.value.partNumber,
      version: this.partForm.value.partVersion,
      description: this.partForm.value.partDescription,
      manufacturer: {
        name: this.partForm.value.manufacturerName,
        description: this.partForm.value.manufacturerDescription
      },
      settings: {
        purchasePrice: this.partForm.value.settingsPurchasePrice,
        targetPrice: this.partForm.value.settingsTargetPrice
      }
    };

    this.undoParts.push(newPart);
    this.undoTabsIndex.push(this.selectedIndex);
  }

  undoLastChange() {
    if (this.undoParts.length > 1) {
      this.undoParts.pop();
      let previousTabIndex = this.undoTabsIndex.pop();
      let previousPartInstance = this.undoParts[this.undoParts.length - 1];
      this.setCurrentPartValuesInForm(previousPartInstance);
      this.selectedIndex = previousTabIndex;
    }
    else {
      this.setCurrentPartValuesInForm(this.part);
    }
  }

  undoAllChanges() {
    this.undoParts = this.undoParts.slice(0, 1);
    this.undoTabsIndex = this.undoTabsIndex.slice(0, 1);
    const currentPart = this.undoParts[0];
    this.selectedIndex = 0;
    this.setCurrentPartValuesInForm(currentPart);
  }

  setCurrentPartValuesInForm(currentPart: any) {
    //const a = { ... currentPart }; spread operator
    this.partForm.controls.partName.setValue(currentPart.name);
    this.partForm.controls.partNumber.setValue(currentPart.number);
    this.partForm.controls.partDescription.setValue(currentPart.description);
    this.partForm.controls.partVersion.setValue(currentPart.version);
    this.partForm.controls.manufacturerDescription.setValue(currentPart.manufacturer.description);
    this.partForm.controls.manufacturerName.setValue(currentPart.manufacturer.name);
    this.partForm.controls.settingsPurchasePrice.setValue(currentPart.settings.purchasePrice);
    this.partForm.controls.settingsTargetPrice.setValue(currentPart.settings.targetPrice);
  }

}
