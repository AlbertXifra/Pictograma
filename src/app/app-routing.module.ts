import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPictogramComponent } from './add-pictogram/add-pictogram.component';
import { PictogramsListComponent } from './pictograms-list/pictograms-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'pictograms-list', pathMatch: 'full' },
  { path: 'add-pictogram', component: AddPictogramComponent },
  { path: 'pictograms-list', component: PictogramsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
