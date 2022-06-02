import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-pictogram',
  templateUrl: './add-pictogram.component.html',
  styleUrls: ['./add-pictogram.component.css']
})
export class AddPictogramComponent implements OnInit {

  public pictogramForm: FormGroup; 

  constructor(public crudApi: CrudService, public fb: FormBuilder, public toastr: ToastrService) { }

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
    this.toastr.success(this.pictogramForm.controls['namePictogram'].value + 'afegit correctament!');
    this.ResetForm();
  }
}
