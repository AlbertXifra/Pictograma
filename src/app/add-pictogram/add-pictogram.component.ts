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

  public addPictogram: FormGroup; 

  constructor(    public crudApi: CrudService, public fb: FormBuilder, public toastr: ToastrService) { }

  ngOnInit() {
    this.crudApi.GetPictogramList();
    this.adPictogram();
  }

  adPictogram() {
    this.addPictogram = this.fb.group({
      namePictogram: ['', Validators.required],
      imagePictogram: ['', Validators.required]
    });
  }

  get namePictogram() {
    return this.addPictogram.get('namePictogram');
  }

  get imagePictogram() {
    return this.addPictogram.get('imagePictogram');
  }

  ResetForm() {
    this.addPictogram.reset();
  }

  submitPictogramData() {
    this.crudApi.AddPictogram(this.addPictogram.value);
    this.toastr.success(this.addPictogram.controls['namePictogram'].value + 'successfully added!');
    this.ResetForm();
  }
}
