import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from '../shared/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-pictogram',
  templateUrl: './edit-pictogram.component.html',
  styleUrls: ['./edit-pictogram.component.css']
})
export class EditPictogramComponent implements OnInit {
  
  //Afegir les variables necessaries que necessitem
  editForm: FormGroup;

  //Afegir en el constructor el components necessaris que es necessiten
  constructor(private crudApi: CrudService, private fb: FormBuilder, private location: Location, private actRoute: ActivatedRoute, private router: Router, private toastr: ToastrService) { }

  // En aquesta funció el que fa es agafar el pictograma per la id i anar a la pagina per editar
  ngOnInit() {
    this.updatePictogramData();
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.crudApi
      .GetPictogram(id)
      .valueChanges()
      .subscribe((data) => {
        this.editForm.setValue(data);
      });
  }

  //Agafem el nom del pictograma
  get namePictogram() {
    return this.editForm.get('namePictogram');
  }

  // Agafem l'imatge del pictograma
  get imagePictogram() {
    return this.editForm.get('imagePictogram');
  }

  // Aquesta funció serveix per actualizar el pictograma
  updatePictogramData() {
    this.editForm = this.fb.group({
      namePictogram: ['', [Validators.required]],
      imagePictogram: ['', [Validators.required]],
    });
  }

  // Aquesta funció fa que vagis a la pàgina anterior en aquest cas a la llista de pictogrames
  goBack() {
    this.location.back();
  }

  // Aquesta funció serveix per actualitzar el formulari
  updateForm() {
    this.crudApi.UpdatePictogram(this.editForm.value);
    this.toastr.success(this.editForm.controls['namePictogram'].value + 'actualizat correctament');
    this.router.navigate(['/pictograms-list']);
  }

}
