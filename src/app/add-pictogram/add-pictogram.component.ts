import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-pictogram',
  templateUrl: './add-pictogram.component.html',
  styleUrls: ['./add-pictogram.component.css']
})
export class AddPictogramComponent implements OnInit {

  public pictogramForm: FormGroup; 

  constructor(public crudApi: CrudService, public fb: FormBuilder, private router: Router, public toastr: ToastrService) { }

  ngOnInit() {
    this.crudApi.GetPictogramsList();
    this.pictoForm();
  }

  pictoForm() {
    this.pictogramForm = this.fb.group({
      namePictogram: ['', Validators.required],
      imagePictogram: ['', Validators.required]
    });
  }

  get namePictogram() {
    return this.pictogramForm.get('namePictogram');
  }

  get imagePictogram() {
    return this.pictogramForm.get('imagePictogram');
  }

  ResetForm() {
    this.pictogramForm.reset();
  }

  submitPictogramData() {
    this.crudApi.AddPictogram(this.pictogramForm.value);
    Swal.fire({ position: 'center', icon: 'success', title: 'Pictograma afegit', showConfirmButton: false, timer: 1500 })
    this.ResetForm();
    this.router.navigate(['/pictograms-list']);
  }
}
