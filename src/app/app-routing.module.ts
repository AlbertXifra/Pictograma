//Importar els moduls necessaris per poder fer les rutes
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddPictogramComponent } from './add-pictogram/add-pictogram.component';
import { PictogramsListComponent } from './pictograms-list/pictograms-list.component';
import { EditPictogramComponent } from './edit-pictogram/edit-pictogram.component';
import { WebPictogramComponent } from './web-pictogram/web-pictogram.component';

//Afegir els paths i els components per fer funcionar el routing
const routes: Routes = [
  { path: '', redirectTo: '/pictograms-list', pathMatch: 'full' }, //La pàgina que se iniciara sempre com la principal
  { path: 'add-pictogram', component: AddPictogramComponent }, //Rederccionar a la pagina per afegir un pictograma
  { path: 'pictograms-list', component: PictogramsListComponent },//Rederccionar a la pagina per mostrar tots els pictogrames
  { path: 'web-pictogram', component: WebPictogramComponent },//Rederccionar a la pagina per crear la teva pàgina de pictogrames
  { path: 'edit-pictogram/:id', component: EditPictogramComponent },//Rederccionar a la pagina per editar un pictograma
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
