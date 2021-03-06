import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from "./core/modules/material.module";
import { AppComponent } from './app.component';
import { LayoutComponent } from './core/layout/layout.component';
import { ProjectComponent } from './modules/project/project.component';
import { MyProjectsComponent } from './modules/my-projects/my-projects.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { AssemblyComponent } from './modules/assembly/assembly.component';
import { PartComponent } from './modules/part/part.component';
import { RawMaterialComponent } from './modules/raw-material/raw-material.component';
import { RawPartComponent } from './modules/raw-part/raw-part.component';
import { CommodityComponent } from './modules/commodity/commodity.component';
import { StepComponent } from './modules/step/step.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { DisplayCalculationComponent } from './modules/display-calculation/display-calculation.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

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
    ReactiveFormsModule,
    MatExpansionModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
