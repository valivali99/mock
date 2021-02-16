import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './core/layout/layout.component';
import { ProjectComponent } from './modules/project/project/project.component';
import { HttpClientModule } from '@angular/common/http';
import { MyProjectsComponent } from './modules/my-projects/my-projects/my-projects.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { AssemblyComponent } from './modules/assembly/assembly/assembly.component';
import { PartComponent } from './modules/part/part/part.component';
import { RawMaterialComponent } from './modules/raw-material/raw-material/raw-material.component';
import { RawPartComponent } from './modules/raw-part/raw-part/raw-part.component';
import { CommodityComponent } from './modules/commodity/commodity/commodity.component';
import { StepComponent } from './modules/step/step/step.component';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import { DisplayCalculationComponent } from './modules/display-calculation/display-calculation.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ProjectComponent,
    MyProjectsComponent,
    AssemblyComponent,
    PartComponent,
    RawMaterialComponent,
    RawPartComponent,
    CommodityComponent,
    StepComponent,
    DisplayCalculationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
