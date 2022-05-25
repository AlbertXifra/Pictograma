import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddPictogramComponent } from './add-pictogram/add-pictogram.component';
import { PictogramsListComponent } from './pictograms-list/pictograms-list.component';
import { EditPictogramComponent } from './edit-pictogram/edit-pictogram.component';

const routes: Routes = [
  { path: '', redirectTo: '/pictograms-list', pathMatch: 'full' },
  { path: 'add-pictogram', component: AddPictogramComponent },
  { path: 'pictograms-list', component: PictogramsListComponent },
  { path: 'edit-pictogram/:id', component: EditPictogramComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
