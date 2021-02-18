import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { UnsavedChangesGuard } from '../app/core/guards/unsaved-changes.guard';

const routes: Routes = [
  { path: "parts/:id", component: LayoutComponent, canDeactivate: [UnsavedChangesGuard] },
  { path: "**", component: LayoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
